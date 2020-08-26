---
title: "TP n°4 Le developpement web"
weight: 2
---

Lors de ce TP, nous allons commencer le développement du jeu **Les Bâtisseurs - Moyen-Âge**. Dans un premier temps, je vous propose soit de [lire les règles](../../les_batisseurs/rules.pdf) soit de [regarder la vidéo explicative](https://www.youtube.com/watch?v=YINhY-7AXqw).

## Partie 1: Récupération du projet

Pour récupérer le projet, nous allons nous rendre sur le [dépôt Gitlab](https://gitlab.com/JulienUsson/les-batisseurs-backend-starter) hébergeant le starter. Une fois sur la page connectée à Gitlab, il suffit de forker le projet avec le bouton *fork* en haut à droite [[aide]](https://docs.gitlab.com/ee/workflow/forking_workflow.html#creating-a-fork). Cela va créer une copie du dépôt vous appartenant afin que chacun puisse travailler sur son propre dépôt.

Je vous conseille de passer le dépôt en privé dans les paramètres afin d'éviter toute tentations [[aide]](https://docs.gitlab.com/ee/public_access/public_access.html#how-to-change-project-visibility).

Maintenant que vous avez votre copie, il suffit de la télécharger sur votre ordinateur via la commande `git clone [URL]` où l'url est celle indiquée en haut à droite lorsque l'on clique sur le bouton *clone*. Il existe deux façon de cloner un projet, soit en utilisant SSH soit en utilisant HTTPS. L'avantage de SSH est qu'il n'est pas nécessaire de taper son login/mot de passe à chaque `git push` mais il faut générer et configurer une clé privée [[aide]](https://docs.gitlab.com/ee/gitlab-basics/create-your-ssh-keys.html). **Je vous conseille d'utiliser HTTPS pour l'instant.**

## Partie 2 : Démarrage du projet

Je vous conseille d'utiliser [Visual Studio Code](https://code.visualstudio.com/) lors de vos développement. C'est un IDE développé par Microsoft. Il est Open Source et est très utilisé dans le monde Javascript. Il intègre un système de plugins, une interface graphique pour Git, un terminal intégré et pleins d'autres fonctionnalités. Une liste de plugins recommandés est disponible dans le [Readme](https://gitlab.com/JulienUsson/les-batisseurs-backend-starter#recommended-visual-studio-code-plugins) du projet.

Une fois le projet ouvert, ouvrez un terminal depuis *code* (Menu Terminal -> New Terminal) puis installer les dépendances *Node* via la commande `npm install`.
Un répertoire *node_modules* a été créé contenant l'ensemble des dépendances de l'application.

Il suffit maintenant d'utiliser la commande `npm run start` pour démarrer l'application. Rendez-vous sur [`http://localhost:3000/health`](http://localhost:3000/health) et le message `{ health: "ok" }` devrait s'afficher confirmant le bon fonctionnement du site 🎉.

Avant de commencer à développer, il est important de **toujours** travailler dans une branche. Pour cela nous allons créer une branche `feature/cards-list` avec la commande `git branch feature/cards-list` puis nous déplacer dessus avec la commande `git checkout feature/cards-list`. N'hésitez pas à découper votre travail en plusieurs commits. Pour rappel, les commits doivent être **atomique** avec une description **claire**.

## Partie 3 : Création de nouvelles routes

Nous allons développer deux nouvelles routes permettant d'afficher l'ensemble des cartes du jeu. Une documentation détaillée de l'ensemble des routes attendues est disponible sur [`https://batisseurs-api.usson.me/`](https://batisseurs-api.usson.me/). Il est **important** de suivre cette documentation lors du développement du projet sinon le Front-end ne marchera pas.

Lors de ce TP, nous allons développer `findAllBuildings` et `findAllWorkers` des routes permettant de récupérer respectivement les cartes des ouvriers et les cartes des bâtiments.

[![api documentation](../swagger.png)](https://batisseurs-api.usson.me/#api-Cards-findAllBuildings)

On va créer un nouveau router `src/routes/cardRouter.js` et y coller le code suivant :

{{< highlight javascript >}}
import express from "express"
const router = express.Router()

// routes

export default router
{{< /highlight >}}
et l'inscrire dans le fichier `src/routes/index.js`.
{{< highlight javascript >}}
router.use("/cards", cardRouter)
{{< /highlight >}}

On va maintenant initialiser les deux routes répondant à notre besoin.

{{< highlight javascript >}}
router.get("/workers", function(req, res) {
  const workers = [] 
  // C'est ici que l'on récupérera nos ouvriers
  res.json(workers)
})

router.get("/buildings", function(req, res) {
  const buildings = [] 
  // C'est ici que l'on récupérera nos bâtiments
  res.json(buildings)
})
{{< /highlight >}}

Rendez-vous sur [`http://localhost:3000/cards/workers`](http://localhost:3000/cards/workers) et [`http://localhost:3000/cards/buildings`](http://localhost:3000/cards/buildings) et vous devriez obtenir un tableau vide 🎉.

## Partie 4 : Récupération des données

Il est maintenant temps d'écrire le code permettant de lire les CSV et de les transformer en objets Javascript. Nous pourrions écrire ce code directement dans la route mais cela un problème: si nous avons besoin du code ailleurs il faudra dupliquer le code ce qui n'est pas une bonne idée. Ensuite, séparer les responsabilités (*separation of concerns*) entre le code métier (gestion des cartes, des parties, etc\...) et le code gérant le serveur (routeurs, etc\...) permet d'avoir un code plus clair. Pour finir, découper son code en fonctions simples est une bonne façon d'avoir un code clair et compréhensible.

Il est donc recommandé d'écrire le code métier dans des fichiers à part appelés `service`.

Nous allons créer un fichier `src/services/cardService.js` afin d'écrire tout le code permettant d'intéragir avec les cartes. Nous pourrons ensuite importer et utiliser ses fonctions  dans notre routeur. On peut déjà imaginer que notre service comportera deux fonctions `importWorkers()` et `importBuildings()`.

{{< highlight javascript >}}
import fs from "fs"
import path from "path"
import _ from "lodash"

export async function importBuildings() {
  // Import buildings code
}

export async function importWorkers() {
  // Import workers code
}
{{< /highlight >}}

Vous n'avez plus qu'à coder ces deux fonctions sachant que la liste des cartes se trouve au format CSV dans le répertoire `src/ressources`.

 * La fonction [fs.promises.readFile()](https://nodejs.org/api/fs.html#fs_fspromises_readfile_path_options) (`import fs from "fs"`) permet de lire un fichier.

{{< highlight javascript >}}
try {
  // __dirname correspond au répertoire du fichier courant soit `src/services/` dans ce cas
  // La méthode path.join() (import path from "path") permet de créer un chemin en concatenant des strings
  const filePath = path.join(__dirname, "../ressources/buildings.csv")
  const file = await fs.promises.readFile(filePath, "utf8")
  console.log(file) // Contenu du fichier
} catch(e) {
  // Une erreur e est survenue
}
{{< /highlight >}}

 * La fonction [split()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split) (méthode de string) permet de diviser une chaîne de caractères à partir d'un séparateur.

 * La fonction [_.camelCase()](https://lodash.com/docs/4.17.15#camelCase) (`import _ from "lodash"`) permet de transformer une chaîne de caractères dans son équivalent en camel case.

Une fois terminé, il suffit de remplacer le code dans le routeur par l'utilisation de notre service et tout devrait fonctionner 🎉.

{{< highlight javascript >}}
// ...
import * as cardService from "../services/cardService"
// ...
router.get("/workers", async function(req, res) {
  const workers = await cardService.importWorkers()
  // Ne pas oublier de gérer les exceptions pouvant être lancées par importWorkers()
  res.json(workers)
})

router.get("/buildings", async function(req, res) {
  const buildings = await cardService.importBuildings()
  // Ne pas oublier de gérer les exceptions pouvant être lancées par importBuildings()
  res.json(buildings)
})
// ...
{{< /highlight >}}

ℹ️ Pour tester vos nouvelles routes, vous pouvez soit utiliser votre navigateur soit le logiciel [Postman](https://www.getpostman.com/) [[aide]](https://gitlab.com/JulienUsson/les-batisseurs-backend-starter/tree/master#use-postman-to-request-the-application).
