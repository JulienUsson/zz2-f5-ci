/* eslint-disable no-irregular-whitespace */
import React from 'react'
import Markdown from 'components/Markdown'

export default () => (
  <Markdown>{`
# TP n°4 : Une première application web !

## Partie 1 : Création du projet

 * Récupérer le projet de base [ici](https://github.com/JulienUsson/zz2-f5-ci-bootstrap)
 * **Suivre les instructions du README.md** et lancer le projet.
 * Intégrer la page créée dans le TP n°2.

## Partie 2 : Récupération des données

Nous n'allons pas utiliser de base de données pour plus de facilité (pas d'installation, pas de langage compliqué).
Nous allons à la place utiliser des fichiers. Comme toujours Google, Stackoverflow et les documentations sont vos amis :)

 * Réfléchir au format JSON de stockage des pizzas.

>Par exemple : 
>\`src/storage/pizzas.json\`
>\`\`\`
[
    { name: 'Hawaïenne',  image: '/public/images/hawaienne.jpg',  note: 10 },
    { name: 'Margherita', image: '/public/images/margherita.jpg', note: 4 }
]
\`\`\`

 * Récupérer les pizzas de la "base de données" fichier créée précédemment.

Utiliser [JSON.stringify()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/stringify) et [JSON.parse()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/parse) pour transformer les objets JSON en texte ou l'inverse.

Le module [FS](https://nodejs.org/api/fs.html) permet d'écrire et de lire des fichiers.
\`\`\`
const pizzas = fs.readFileSync('src/storage/pizzas.json');
fs.writeFileSync('src/storage/pizzas.json', pizzas)

// Attention: readFileSync() et writeFileSync() manipulent des chaînes de caractères et non des objets JSON.
\`\`\`

N'oubliez pas de mettre les fonctions d'écriture et de lecture dans un service (\`src/services/PizzaService.js\`).

## Partie 3 : Stockage des données

 * Faire un formulaire d'ajout de pizza (pas d'authentification pour le moment)
 * Ajouter la pizza fraîchement créée dans le fichier de "base de données" (\`src/storage/pizzas.json\`)

## Autres ressources

 * [NodeJS](https://nodejs.org/api) [EN]
 * [ExpressJS](https://expressjs.com/fr/) [FR]
 * [EJS](http://ejs.co/) [EN]
 * [OpenClassroom](https://openclassrooms.com/fr/courses/1056721-des-applications-ultra-rapides-avec-node-js/1057503-le-framework-express-js) [FR]
`}</Markdown>
)
