---
title: "TP n°3 Le developpement web"
weight: 2
---

Lors de ce TP, nous allons commencer le développement du jeu **Jaipur**. Dans un premier temps, je vous propose de lire les [règles](/jaipur/travaux_pratiques/#r%C3%A8gles) si ce n'est pas déjà fait.

## Récupération du projet

Le projet est disponible sur [Github](https://github.com/JulienUsson/jaipur-backend-starter). Il faut [forker](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) le projet ce qui va créer une copie du dépôt vous appartenant. Ensuite pour récupérer le projet, il faut fait un [git clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository). Pour pouvoir utiliser `git pull` et `git push` il faut: 
 * si on utilise SSH, [générer des clés SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent). 
 * si on utilise HTTPS, [créer un token d'accès](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

## Démarrage du projet

Je vous conseille d'utiliser [Visual Studio Code](/annexes/vscode/) lors de vos développements (n'oubliez pas d'installer les plugins que je vous conseille).

Une fois le répertoire du projet ouvert, ouvrez un terminal depuis *code* (Menu Terminal -> New Terminal) puis installer les dépendances *Node* via la commande `npm install`.<br/>
Un répertoire *node_modules* a été créé contenant l'ensemble des dépendances de l'application (n'hésitez pas à y jeter un coup d'oeil). Chaque répertoire correspond à une bibliothèque dans laquelle se trouvent des fichiers JS.

Il suffit maintenant d'utiliser la commande `npm run start` pour démarrer l'application. Rendez-vous sur [`http://localhost:3000/health`](http://localhost:3000/health) et le message `{ health: "ok" }` devrait s'afficher confirmant le bon fonctionnement du site 🎉.

ℹ️ Si le port est déjà pris (très probable sur les clients légers de l'ISIMA, les ports étant partagés), vous pouvez utiliser `PORT=xxxx npm run start` pour démarrer l'application sur le port `xxxx`.


## Création d'une partie

Lors de ce tp nous allons développer notre première fonctionnalité : **En tant que joueur, je peux créer une partie** [[voir]](/jaipur/travaux_pratiques/#tp4-en-tant-que-joueur-je-peux-créer-une-partie-apihttpsjaipur-apiussonmeapi-game-creategame). Toutes les fonctions de notre application seront liées à des routes HTTP qui sont listées dans la [spécification](https://jaipur-api.usson.me/). Grâce à cela, tous les TP fonctionneront de la même façon et le [frontend](https://jaipur.usson.me/) fonctionnera avec chacun de vos backends.


Avant de commencer à développer, il est important de **toujours** travailler dans une branche. Pour cela, nous allons créer une branche `feature/create-game` avec la commande `git branch feature/create-game` puis nous déplacer dessus avec la commande `git checkout feature/create-game`. Je vous invite à découper votre travail en plusieurs commits. Pour rappel, les commits doivent être **atomiques** avec une description **claire**.


La spécification de la route qui permet de créer une partie est disponible [ici](https://jaipur-api.usson.me/#api-Game-createGame). 

![spécification](/dev_web/swagger.png)

Essayons de la comprendre. Premièrement, on peut remarquer que l'adresse de notre route est `/games` et qu'elle répond au verbe HTTP `POST`. Ensuite, notre route prend en entrée (via son corps) un objet json qui contient une propriété name qui est une chaîne de caractères.
 La réponse attendue est soit le statut 201 qui signifie `created` en cas de succès soit le statut 400 qui signifie `bad request` en cas d'erreur. Le message contenu dans la réponse est un objet avec uniquement l'identifiant et le nom d'une `game`. Pour savoir comment initialiser un objet `game`, il faut lire les [règles](/jaipur/travaux_pratiques/#r%C3%A8gles). Je vous conseille d'utiliser la structure suivante pour votre objet `game`.

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
    // Identifiant du gagnant si la partie est terminée sinon vaut undefined.
    "winnerId": undefined
}
{{< /highlight >}}

> A votre avis, pourquoi ces propriétés ne sont pas dans la spécification et quel est l'intêret de les préfixer par un `_` ?

## Let's code

Utiliser ces squelettes de code et compléter les trous (représenté par le commentaire TODO) pour coder votre première fonctionnalité.

`/src/routes/gameRouter.js`
{{< highlight javascript >}}
import express from "express"
import * as gameService from "../services/gameService"

const router = express.Router()

// Ecoute la requête POST /games.
router.post("/", function (req, res) {
  // TODO retourner le status 400 si le nom n'existe pas.
  const newGame = gameService.createGame(req.body.name)
  res.status(201).json({ id: newGame.id, name: newGame.name })
})

export default router
{{< /highlight >}}

`/src/services/gameService.js`
{{< highlight javascript >}}
import * as db from "../database"
import { shuffle } from "lodash"

// Créer et retourne un deck mélangé avec 3 chameaux en moins.
export function initDeck() {
  // TODO
  // Créer un tableau vide
  // Ajouter les diamants, l'or, l'argent, les tissus, les épices, le cuir et les chameaux
  // Retourner le tableau remplis
  return []
}

// Pioche x cartes d'un deck.
export function drawCards(deck, count = 1) {
  // TODO
  // Créer un tableau vide
  // Pour chaque carte à piocher:
  //  Retirer la carte piochée du deck et la mettre dans le tableau
  // Retourner le tableau contenant les cartes piochées
}

// Déplace les chameaux de la main d'un joueur (_players[i].hand) vers son enclos (_players[i].camelsCount).
export function putCamelsFromHandToHerd(game) {
  // TODO
  // Pour chaque joueur:
  //  Pour chaque chameau dans la main du joueur
  //  Enlever le chameau de la main et le mettre dans l'enclos
}

// Créer un objet game.
export function createGame(name) {
  // TODO
  // Initialiser un nouveau deck avec la fonction précédente
  // Créer le marché avec 3 chameaux et 2 cartes piochés du deck
  // Générer un nouvel identifiant pour la partie
  // Pour chaque joueur:
  //  Créer la main en piochant 5 cartes du deck
  //  Initialiser l'enclos à 0
  //  Initialiser le score à 0
  // Créer les objets contenant les jetons
  // Rassembler le tout pour créer la partie
  // Mettre les chameaux des mains des joueurs dans leurs enclos avec la fonction précédente
  // Retourner la partie 
  return {}
}
{{< /highlight >}}

`/src/routes/index.js`
{{< highlight javascript >}}
import express from "express"

import healthRouter from "./healthRouter"
import gameRouter from "./gameRouter"

const router = express.Router()

router.use("/health", healthRouter)
// On ajoute ici notre nouveau routeur.
router.use("/games", gameRouter)

export default router
{{< /highlight >}}

ℹ️ Pour tester vos routes, il est **recommandé** d'utiliser le logiciel [Postman](/annexes/postman/) ou directement le [frontend](https://jaipur.usson.me/).

ℹ️ Les parties sont sauvegardées sous forme d'un tableau de parties dans le fichier `storage/database.json` grâce à `database/index.js`.

ℹ️ Pour générer l'identifiant, il suffit de récupérer le nombre de parties sauvegardées et d'y ajouter 1.

ℹ️ [shuffle()](https://lodash.com/docs/4.17.15#shuffle) permet de mélanger un tableau (Pour importer lodash: `import _ from "lodash"`).

ℹ️ [Array.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) permet de supprimer le premier élément d'un tableau et de le récupérer.

ℹ️ [Array.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) permet de supprimer un élément d'un tableau.

ℹ️ [Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) permet d'ajouter un élément dans un tableau.

ℹ️ [Array.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) permet de rechercher l'indice d'un élément dans un tableau.

