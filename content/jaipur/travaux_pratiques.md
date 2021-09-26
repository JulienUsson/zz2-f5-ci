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
| Chameau (camel) | 11 | / |
| **Bonus** | **Cartes** | **Jetons** |
| 3 Cartes | / | 3,3,2,2,2,1,1 |
| 4 Cartes | / | 6,6,5,5,4,4 |
| 5 Cartes | / | 10,10,9,8,8 |

⚠️ On considèrera que les parties se jouent en une seule manche et non en deux manches gagnantes comme dans le jeu de base.

## Spécification de l'API

Une documentation détaillée de l'ensemble des routes attendues est disponible sur [`https://jaipur-api.usson.me/`](https://jaipur-api.usson.me/). Il est **important** de suivre cette documentation lors du développement du projet.

Pour tester vos routes, il est **recommandé** d'utiliser le logiciel [Postman](https://cours.usson.me/annexes/postman/).


## User Stories

### En tant que joueur, je peux créer une partie [TP4]

 * Création de la route `POST /games` [[doc]](https://jaipur-api.usson.me/#api-Game-createGame).

### En tant que joueur, je peux lister les parties [1]

 * Création de la route `GET /games` [[doc]](https://jaipur-api.usson.me/#api-Game-findAllGames).

### En tant que joueur, je peux récupérer les informations d'une partie [1]

 * Création de la route `GET /games/[id]` [[doc]](https://jaipur-api.usson.me/#api-Game-findOneGameById).

### En tant que joueur, je peux supprimer une partie [1]

 * Création de la route `DELETE /games/[id]` [[doc]](https://jaipur-api.usson.me/#api-Game-deleteGameById).

### En tant que joueur, je peux prendre 1 seule marchandise [2]

 * Création de la route `PUT /games/[id]/take-good` [[doc]](https://jaipur-api.usson.me/#api-Game-takeGood).
 * Permettre l'action uniquement si c'est le tour du joueur (header playerIndex).
 * Prendre en compte la limite de 7 cartes en main.

### En tant que joueur, je peux prendre plusieurs marchandises [2]

 * Création de la route `PUT /games/[id]/exchange` [[doc]](https://jaipur-api.usson.me/#api-Game-exchange).
 * Permettre l'action uniquement si c'est le tour du joueur (header playerIndex).

### En tant que joueur, je peux prendre les chameaux [2]

 * Création de la route `PUT /games/[id]/take-camels` [[doc]](https://jaipur-api.usson.me/#api-Game-takeCamels).
 * Permettre l'action uniquement si c'est le tour du joueur (header playerIndex).
 
### En tant que joueur, je peux vendre des cartes [1]

 * Création de la route `PUT /games/[id]/sell` [[doc]](https://jaipur-api.usson.me/#api-Game-sell).
 * Permettre l'action uniquement si la transaction est valide (paragraphe *"Restriction lors d'une vente"* des règles)
 * Permettre l'action uniquement si c'est le tour du joueur (header playerIndex).
 
### En tant que joueur, je peux terminer une partie [1]

 * Une fois qu'une des conditions d'arrêt est remplie (paragraphe *"Fin d'une manche"* des règles) terminer la partie et décompter les points (paragraphe *"Décompte"* des règles)
 * Empêcher les joueurs de pouvoir effectuer une action sur une partie terminée. 
