---
title: "TP n°4 Le developpement web"
weight: 2
---

Lors de ce TP, nous allons commencer le développement du jeu **Jaipur**. Dans un premier temps, je vous propose de lire les [règles](/jaipur/travaux_pratiques/#r%C3%A8gles).

## Récupération du projet

Le projet est disponible sur [Github](https://github.com/JulienUsson/jaipur-backend-starter). Il faut [forker](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) le projet ce qui va créer une copie du dépôt vous appartenant.

Maintenant que vous avez votre copie, il suffit de la télécharger sur votre ordinateur via la commande `git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY` [[aide]](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository#cloning-a-repository).

## Démarrage du projet

Je vous conseille d'utiliser [Visual Studio Code](/annexes/vscode/) lors de vos développement.

Une fois le projet ouvert, ouvrez un terminal depuis *code* (Menu Terminal -> New Terminal) puis installer les dépendances *Node* via la commande `npm install`.
Un répertoire *node_modules* a été créé contenant l'ensemble des dépendances de l'application.

Il suffit maintenant d'utiliser la commande `npm run start` pour démarrer l'application. Rendez-vous sur [`http://localhost:3000/health`](http://localhost:3000/health) et le message `{ health: "ok" }` devrait s'afficher confirmant le bon fonctionnement du site 🎉.

ℹ️ Si le port est déjà pris (très probable sur les machines de l'ISIMA), vous pouvez utiliser `PORT=xxxx npm run start` pour démarrer l'application sur le port `xxxx`.


## Création d'une partie

Lors de ce tp nous allons développer notre première fonctionnalité : **En tant que joueur, je peux créer une partie** [[voir]](http://localhost:1313/jaipur/travaux_pratiques/#en-tant-que-joueur-je-peux-cr%C3%A9er-une-partie-tp4). Toutes les fonctions de notre application seront liées à des routes HTTP qui sont listé dans la [spécification](/jaipur/travaux_pratiques/#spécification-de-lapi). Grâce a cela, tous les tp fonctionneront de la même façon et la même application frontend fonctionera avec chacun de vos backend.


Avant de commencer à développer, il est important de **toujours** travailler dans une branche. Pour cela nous allons créer une branche `feature/create-game` avec la commande `git branch feature/create-game` puis nous déplacer dessus avec la commande `git checkout feature/create-game`. N'hésitez pas à découper votre travail en plusieurs commits. Pour rappel, les commits doivent être **atomique** avec une description **claire**.


La spécification de la route qui permet de créer une partie est disponible [ici](https://jaipur-api.usson.me/#api-Game-createGame). 

![spécification](/dev_web/swagger.png)

Essayons de la comprendre. Premièrement, on peut remarquer que l'adresse de notre route est `/games` et qu'elle répond au verbe HTTP `POST`. Ensuite, notre route prend en entrée (via son corps) un objet json qui contient une propriété name qui est une chaîne de caractères.
 La réponse attendu est un statut 201 qui signifie `created`. Le message contenu dans la réponse est un objet représentant une `game`. Pour savoir comment initialiser un objet `game`, il faut lire les [règles](/jaipur/travaux_pratiques/#r%C3%A8gles). Comme vous l'avez remarqué (ou pas), l'objet `game` manque d'informations car la spécification définit le minimum pour que le frontend fonctionne. Je vous conseille d'utiliser la structure suivante pour votre objet `game`.

{{< highlight JavaScript >}}
{
    // identifiant de la partie
    "id": 1,
    "name": "nom de la partie",
    // pioche
    "_deck": ["diamond", "camel", "cloth", "cloth", ...],
    // marché
    "market": ["camel", "camel", "camel", "cloth", "gold"],
    "_players": [
        {
            // main
            "hand": ["cloth", "silver", "diamonds"],
            // nombre de chameaux
            "camelsCount": 2, 
            // Score actuel
            "score": 0,
        },
        {
            "hand": ["gold", "gold", "leather", "diamonds", "spice"],
            "camelsCount": 0,
            "score": 0,
        }
    ],
    // joueur courant (0 ou 1)
    "currentPlayerIndex": 0,
    "tokens": {
        "diamonds": [7,7,5,5,5],
        "gold": [6,6,5,5,5],
        "silver": [5,5,5,5,5],
        "cloth": [5,3,3,2,2,1,1],
        "spice": [5,3,3,2,2,1,1],
        "leather": [4,3,2,1,1,1,1,1,1],
    },
    // ne pas oublier de les mélanger au début de la partie
    "_bonusTokens": {
        "3": [2,1,2,3,1,2,3],
        "4": [4,6,6,4,5,5],
        "5": [8,10,9,8,10]
    },
    // est-ce que la partie est terminée?
    "isDone": false
}
{{< /highlight >}}

> A votre avis, pourquoi ces propriétés ne sont pas dans la spécification et quel est l'intêret de les préfixer par un `_` ?

## Let's code

Premièrement il faut créer un nouveau router qui va gérer les routes commencent par `/games`.

`/src/routes/gameRouter.js`
{{< highlight javascript >}}
import express from "express"
import * as gameService from "../services/gameService"

const router = express.Router()

// Listen to POST /games
router.post("/", function (req, res) {
  const newGame = gameService.createGame(req.params.name)
  res.status(201).json(newGame)
})

export default router
{{< /highlight >}}

`/src/routes/index.js`
{{< highlight javascript >}}
import express from "express"

import healthRouter from "./healthRouter"
import gameRouter from "./gameRouter"

const router = express.Router()

router.use("/health", healthRouter)
router.use("/games", gameRouter)

export default router
{{< /highlight >}}

La bonne pratique lorsque l'on développe des routes est d'écrire notre code métier dans des fichier de service. Toute l'intelligence de notre application sera contenu dans des services et nos routes seront le plus bête possible et ne feront qu'appeler des services.

Utiliser le squelette du service `gameService` ci-dessous pour développer votre première fonctionnalité.

`/src/services/gameService.js`
{{< highlight javascript >}}
import fs from "fs"
import path from "path"
import _ from "lodash"

const DATABASE_FILE = path.join(__dirname, "../../storage/database.json")

// Read the file storage/database.json and return the parsed array of games.
export function getGames() {
  try {
    const file = fs.readFileSync(DATABASE_FILE)
    return JSON.parse(file)
  } catch (e) {
    return []
  }
}

// Save a game to storage/database.json
export function saveGame(game) {
  const games = getGames()
  const gameIndex = games.findIndex((g) => g.id === game.id)
  if (gameIndex >= 0) {
    games[gameIndex] = game
  } else {
    games.push(game)
  }
  try {
    fs.mkdirSync(path.dirname(DATABASE_FILE))
  } catch (e) {
    // Do nothing
  }
  fs.writeFileSync(path.join(DATABASE_FILE), JSON.stringify(games))
}

// Return a shuffled deck
function initDeck() {
  // TODO
  return []
}

// Draw {count} cards of a deck
function drawCards(deck, count = 1) {
  // TODO
}

// Transfer camels from players hand (_players[i].hand) to their herd (_players[i].camelsCount)
function putCamelsFromHandToHerd(game) {
  // TODO
}

// Create a game object
export function createGame(name) {
  // TODO
  return {}
}
{{< /highlight >}}

ℹ️ Pour tester vos routes, il est **recommandé** d'utiliser le logiciel [Postman](https://cours.usson.me/annexes/postman/).

ℹ️ Les parties sont sauvegardés sous forme d'un tableau de parties dans le fichier `storage/database.json`.

ℹ️ Pour générer l'identifiant, il suffit de récupérer le nombre de parties sauvegardées et d'y ajouter 1.

ℹ️ [shuffle()](https://lodash.com/docs/4.17.15#shuffle) permet de mélanger un tableau.

ℹ️ [fs.readFileSync()](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options) permet de lire une **string** d'un fichier.

ℹ️ [fs.writeFileSync()](https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options) permet d'écrire une **string** dans un fichier.

ℹ️ [JSON.stringify()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/stringify) permet de convertir un **objet** Javascript en **string**.

ℹ️ [JSON.parse()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/parse) permet de convertir une **string** en **objet** Javascript.

ℹ️ [path.join()](https://nodejs.org/api/path.html#path_path_join_paths) permet de concatener des chemins de fichier.
