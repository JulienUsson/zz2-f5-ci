---
title: "Jaipur"
---

## Règles

Les règles du jeu sont disponibles [ici](../rules.pdf) ou [ici en vidéo](https://www.youtube.com/watch?v=xdQymiuB5-c).

| Marchandises (goods) | Cartes (cards) | Jetons (tokens) |
|---|---|---|
| Diamants (diamonds)  | 6 | 7,7,5,5,5 |
| Or (gold) | 6 | 6,6,5,5,5 |
| Argent (silver) | 6 | 5,5,5,5,5 |
| Tissus (cloth) | 8 | 5,3,3,2,2,1,1 |
| Epices (spice) | 8 | 5,3,3,2,2,1,1 |
| Cuir (leather) | 10 | 4,3,2,1,1,1,1,1,1 |
| Chameau (camels) | 11 | / |
| **Bonus** | **Cartes** | **Jetons** |
| 3 Cartes | / | 3,3,2,2,2,1,1 |
| 4 Cartes | / | 6,6,5,5,4,4 |
| 5 Cartes | / | 10,10,9,8,8 |

⚠️ On considèrera que les parties se jouent en une seule manche et non en deux manches gagnantes comme dans le jeu de base.

## Spécification de l'API

Une documentation détaillée de l'ensemble des routes attendues est disponible sur [`https://jaipur-api.usson.me/`](https://jaipur-api.usson.me/). Il est **important** de suivre cette documentation lors du développement du projet.

Pour tester vos routes, il est **recommandé** d'utiliser le logiciel [Postman](https://cours.usson.me/annexes/postman/).

## Représentation d'une partie en Javascript


```json
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
```

## User Stories

⚠️ Les aides ne sont données qu'à titre indicatif. Vous pouvez utiliser la méthode que vous préférez.

### En tant que joueur, je peux créer une partie [1&2]

 * Création de la route `POST /games` [[doc]](https://jaipur-api.usson.me/#api-Game-createGame) pour créer une partie. Aidez-vous du paragraphe *"Mise en place"* des règles.

 * Sauvegarder les parties dans un fichier `storage/database.json` afin de conserver les parties entre deux redémarrages du serveur.

<details>
    <summary>Aide</summary>

ℹ️ On peut sauvegarder les parties sous forme d'un tableau de parties dans le fichier.

ℹ️ [shuffle()](https://lodash.com/docs/4.17.15#shuffle) permet de mélanger un tableau.

ℹ️ [fs.readFileSync()](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options) permet de lire une string d'un fichier.

ℹ️ [fs.writeFileSync()](https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options) permet d'écrire une string dans un fichier.

ℹ️ [JSON.stringify()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/stringify) permet de convertir un objet Javascript en string.

ℹ️ [JSON.parse()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/parse) permet de convertir une string en objet Javascript.

</details>

### En tant que joueur, je peux liste les parties [1&2]

 * Création de la route `GET /games` [[doc]](https://jaipur-api.usson.me/#api-Game-findAllGames).

### En tant que joueur, je peux récupérer les informations d'une partie [1&2]

 * Création de la route `GET /games/[id]` [[doc]](https://jaipur-api.usson.me/#api-Game-findOneGameById).

### En tant que joueur, je peux prendre 1 seule marchandise [1]

 * Création de la route `POST /take-good` [[doc]](https://jaipur-api.usson.me/#api-Game-takeGood).
 * Permettre l'action uniquement si c'est le tour du joueur.
 * Prendre en compte la limite de 7 cartes en main.

### En tant que joueur, je peux prendre plusieurs marchandises [1]

 * Création de la route `POST /exchange` [[doc]](https://jaipur-api.usson.me/#api-Game-exchange).
 * Permettre l'action uniquement si c'est le tour du joueur.

### En tant que joueur, je peux prendre les chameaux [1]

 * Création de la route `POST /take-camels` [[doc]](https://jaipur-api.usson.me/#api-Game-takeCamels).
 * Permettre l'action uniquement si c'est le tour du joueur.
 
### En tant que joueur, je peux vendre des cartes [2]

 * Création de la route `POST /sell` [[doc]](https://jaipur-api.usson.me/#api-Game-sell).
 * Permettre l'action uniquement si c'est le tour du joueur.
 
### En tant que joueur, je peux terminer une partie [2]

 * Une fois qu'une des conditions d'arrêt est remplie (paragraphe *"Fin d'une manche"* des règles) terminer la partie et décompter les points (paragraphe *"Décompte"* des règles)
 * Empêcher les joueurs de pouvoir effectuer une action sur une partie terminée. 
