---
title: "TP final Jaipur"
---

## Mise en place du projet

Formez une équipe de deux personnes et choisissez un des deux projets pour continuer le développement. Invitez la personne manquante sur le projet.


## Frontend

Une application frontend est disponible sur [jaipur.usson.me](https://jaipur.usson.me).

Par défaut, l'application utilise un backend se trouvant à l'adresse `http://localhost:3000`. Si ce n'est pas votre cas, vous pouvez le configurer via l'icône ⚙️ en haut à droite.

## Rappels

Une documentation détaillée de l'ensemble des routes attendues est disponible sur [`https://jaipur-api.usson.me/`](https://jaipur-api.usson.me/). Il est **important** de suivre cette documentation lors du développement du projet sinon le Front-end ne marchera pas.

Pour tester vos routes, il est **recommandé** d'utiliser le logiciel [Postman](https://cours.usson.me/annexes/postman/).

Les règles du jeu sont disponibles [ici](../rules.pdf) ou [ici](https://www.youtube.com/watch?v=xdQymiuB5-c) en vidéo.

Google est votre ami.


## Règles et informations supplémentaires

## User Stories

⚠️ Les aides ne sont données qu'à titre indicatif. Vous pouvez utiliser la méthode que vous préférez.

### En tant que joueur, je peux créer une partie

 * Création de la route `POST /games` [[doc]](https://batisseurs-api.usson.me/#api-Game-createGame) pour créer une partie. 

 * Sauvegarder les parties dans un/des fichier(s) dans le répertoire `/storage` afin de conserver les parties entre deux redémarrages.

ℹ️ Les apprentis sont les cartes qui coûtent 2 écus.

<details>
    <summary>Aide</summary>

 * Créer une partie avec les valeurs de départ. (s'aider de la [doc](https://batisseurs-api.usson.me/#api-Game-createGame) et des [règles](../rules.pdf) pour déduire les valeurs).
 Attention il faut sauvegardé les decks dans la partie mais ne pas l'envoyer au joueur (il pourrait tricher avec ces infos).
On peut le stocker dans `game._private.buildingsDeck` et dans `game._private.workersDeck` puis le filter avant l'envoi via :

```javascript
function filterPrivateField(obj) {
    delete obj._private
    return obj
}

router.get("/games/:gameId", function(req, res) {
    const game = // ...
    res.json(filterPrivateField(game))
})
```

 * Lire de fichier `storage/database.json`, s'il n'existe pas le créer avec la valeur `[]` (tableau vide) puis le transformer en JS avec [JSON.parse()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/parse).
 * Ajouter la partie créée dans le tableau des parties.
 * Ecraser le fichier `storage/database.json` avec le nouveau tableau des parties.  

ℹ️ [uuidv4()](https://www.npmjs.com/package/uuid) permet de générer un identifiant aléatoire unique.

ℹ️ [shuffle()](https://lodash.com/docs/4.17.15#shuffle) permet de mélanger un tableau.

ℹ️ [fs.promises.readFile()](https://nodejs.org/api/fs.html#fs_fspromises_readdir_path_options) permet de lire dans un fichier.

ℹ️ [fs.promises.writeFile()](https://nodejs.org/api/fs.html#fs_fspromises_writefile_file_data_options) permet d'écrire dans un fichier.

ℹ️ [JSON.stringify()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/stringify) permet de convertir un objet Javascript en string.

ℹ️ [JSON.parse()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/parse) permet de convertir un string en objet Javascript.

</details>
