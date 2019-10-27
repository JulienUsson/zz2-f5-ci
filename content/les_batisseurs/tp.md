---
title: "TP final Les bâtisseurs : Moyen-Âge"
---

## Mise en place du projet

Formez une équipe de trois personnes et choisissez un des projets. Invitez les deux personnes manquantes sur le projet et n'oubliez pas de m'inviter ([@JulienUsson](https://gitlab.com/JulienUsson)) pour que je puisse vous noter 😉. Rajoutez un fichier `authors.md` avec votre pseudo suivi de votre nom afin que je sache quel pseudo correspond à quelle personne. Vous êtes prêts à coder 🎉.

## Gestion de projet

Pour simplifier votre organisation, vous pouvez vous servir de la vue *board* de la section *issues* de Gitlab. En organisant votre *board* comme ci-dessous, vous pourrez savoir qui fait quoi, qu'elle est la prochaine tâche à faire ainsi que les *merge-requests* en attente.

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

Une documentation détaillée de l'ensemble des routes attendues est disponible sur [`http://localhost:3000/api-docs/`](http://localhost:3000/api-docs/). Il est **important** de suivre cette documentation lors du développement du projet sinon le Front-end ne marchera pas.


Pour tester vos routes, il est **recommandé** d'utiliser le logiciel [Postman](https://www.getpostman.com/) [[aide]](https://gitlab.com/JulienUsson/les-batisseurs-backend-starter/tree/master#use-postman-to-request-the-application).

Les règles du jeu sont disponibles [ici](https://gitlab.com/JulienUsson/les-batisseurs-backend-starter/blob/master/rules.pdf) ou [ici](https://www.youtube.com/watch?v=YINhY-7AXqw) en vidéo.

Google est votre ami.

## Tâches

### En tant que joueur, je peux créer une partie

 * Création de la route `POST /games` [[doc]](http://localhost:3000/api-docs/#/default/post_games) pour créer une partie. 

 * Création de la route `GET /games/{gameId}` [[doc]](http://localhost:3000/api-docs/#/default/get_games__gameId_) pour récupérer les informations d'une partie. 

 * Sauvegarder les parties dans un/des fichier(s) dans le répertoire `/storage` afin de conserver les parties entre deux redémarrages.

ℹ️ [uuidv4()](https://www.npmjs.com/package/uuid) permet de générer un identifiant aléatoire.

ℹ️ [shuffle()](https://lodash.com/docs/4.17.15#shuffle) permet de mélanger un tableau.

ℹ️ [fs.writeFile()](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback) permet d'écrire dans un fichier.

ℹ️ [JSON.stringify()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/stringify) permet de convertir un objet Javascript en string.

ℹ️ [JSON.parse()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/parse) permet de convertir une string en objet Javascript.

### En tant que joueur, je peux ouvrir un chantier

 * Création de la route `POST /games/{gameId}/actions` [[doc]](http://localhost:3000/api-docs/#/default/post_games__gameId__actions). 

### En tant que joueur, je peux recruter un ouvrier

 * Amélioration de la route `POST /games/{gameId}/actions` [[doc]](http://localhost:3000/api-docs/#/default/post_games__gameId__actions). 

### En tant que joueur, je peux envoyer travailler un ouvrier

 * Amélioration de la route `POST /games/{gameId}/actions` [[doc]](http://localhost:3000/api-docs/#/default/post_games__gameId__actions). 

### En tant que joueur, je peux prendre un ou plusieurs écus

 * Amélioration de la route `POST /games/{gameId}/actions` [[doc]](http://localhost:3000/api-docs/#/default/post_games__gameId__actions). 

### En tant que joueur, je peux terminer un bâtiment

### En tant que joueur, je peux utiliser les machines

ℹ️ Une des possibilité est qu'une fois un bâtiment terminé, on peut créer un nouveau ouvrier correspondant aux caractéristiques de la machine. 

### En tant que joueur, je peux terminer une partie
