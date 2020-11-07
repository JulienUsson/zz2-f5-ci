---
title: "TP final Les bâtisseurs : Moyen-Âge"
---

## Mise en place du projet

Formez une équipe de deux personnes et choisissez un des deux projets pour continuer le développement. Invitez la personne manquante sur le projet et n'oubliez pas de m'inviter ([@JulienUsson](https://gitlab.com/JulienUsson)) avec le **droit Reporter** minimum pour que je puisse vous noter 😉. Rajoutez un fichier `authors.md` avec votre pseudo suivi de votre nom afin que je sache quel pseudo correspond à quelle personne. Vous êtes prêts à coder 🎉.

## Gestion de projet

Pour simplifier votre organisation, vous **devez** vous servir de la vue *board* de la section *issues* de Gitlab. En organisant votre *board* comme ci-dessous, vous pourrez savoir qui fait quoi, qu'elle est la prochaine tâche à faire ainsi que les *merge-requests* en attente.

![kanban example](../kanban.png)

ℹ️ N'hésitez pas a redécouper les tâches si celles-ci vous parraissent trop longues ou complexes.

⚠️ N'oubliez pas de vous assigner aux tâches et de bien mettre à jour le *board* pour profiter au maximum de l'outil.

## Notation

Le tp sera noté selon les critères suivants :

- Utilisation de Git (commits, branches, demande de merge, revue de code, ...)
- Tests (qualité des tests, couverture de code, ...)
- Code (qualité du code, fonctionnalités implémentées, ...)
- Gestion de projet (découpe en ticket, priorisation, partage des tâches, ...)

## Frontend

Une application frontend est disponible sur [batisseurs.usson.me](https://batisseurs.usson.me).

Par défaut, l'application utilise un backend se trouvant à l'adresse `http://localhost:3000`. Si ce n'est pas votre cas, vous pouvez le configurer via l'icône ⚙️ en haut à droite.

## Rappels

Une documentation détaillée de l'ensemble des routes attendues est disponible sur [`https://batisseurs-api.usson.me/`](https://batisseurs-api.usson.me/). Il est **important** de suivre cette documentation lors du développement du projet sinon le Front-end ne marchera pas.


Pour tester vos routes, il est **recommandé** d'utiliser le logiciel [Postman](https://cours.usson.me/annexes/postman/).

Les règles du jeu sont disponibles [ici](../rules.pdf) ou [ici](https://www.youtube.com/watch?v=YINhY-7AXqw) en vidéo.

Google est votre ami.


## Règles et informations supplémentaires

Le joueur 1 commence toujours.

Un apprenti est un ouvrier avec un prix de 2 écus.

Il ne faut pas gérer les pièces d'or, on utilisera uniquement des pièces d'argent.


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

### En tant que joueur, je peux voir les détails d'une partie

 * Création de la route `GET /games/{gameId}` [[doc]](https://batisseurs-api.usson.me/#api-Game-getGame) pour récupérer les informations d'une partie. 

<details>
    <summary>Aide</summary>
    
 * Lire le fichier de base de données et le parser.
 * Utiliser [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) pour trouver la partie via son id.
 * La retourner 

</details>

### En tant que joueur, je peux lister les parties existante

 * Création de la route `GET /games` [[doc]](https://batisseurs-api.usson.me/#api-Game-findAllGames) pour lister les partie. 


<details>
    <summary>Aide</summary>
    
 * Lire le fichier de base de données et le parser.
 * Retourner le tableau des parties.
    
</details>

### En tant que joueur, je peux ouvrir un chantier

 * Création de la route `POST /games/{gameId}/actions` [[doc]](https://batisseurs-api.usson.me/#api-Game-playAction). 

⚠️ Attention de ne pas oublier de prendre en compte le *header* HTTP `player-id` qui détermine le joueur qui effectue l'action.

### En tant que joueur, je peux recruter un ouvrier

 * Amélioration de la route `POST /games/{gameId}/actions` [[doc]](https://batisseurs-api.usson.me/#api-Game-playAction). 

### En tant que joueur, je peux envoyer travailler un ouvrier

 * Amélioration de la route `POST /games/{gameId}/actions` [[doc]](https://batisseurs-api.usson.me/#api-Game-playAction). 

### En tant que joueur, je peux prendre un ou plusieurs écus

 * Amélioration de la route `POST /games/{gameId}/actions` [[doc]](https://batisseurs-api.usson.me/#api-Game-playAction). 

### En tant que joueur, je peux acheter des actions supplémentaires

 * Amélioration de la route `POST /games/{gameId}/actions` [[doc]](https://batisseurs-api.usson.me/#api-Game-playAction). 

### En tant que joueur, je peux terminer mon tour

 * Amélioration de la route `POST /games/{gameId}/actions` [[doc]](https://batisseurs-api.usson.me/#api-Game-playAction). 

### En tant que joueur, je peux terminer un bâtiment

### En tant que joueur, je peux utiliser les machines

<details>
    <summary>Aide</summary>

Une des possibilité est qu'une fois un bâtiment machine terminé, on peut créer un ouvrier correspondant aux caractéristiques de la carte. 

</details>

### En tant que joueur, je peux terminer une partie
