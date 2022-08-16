---
title: "Jaipur"
---

## Règles

Les règles du jeu sont disponibles [ici](../rules.pdf) ou [ici en vidéo](https://www.youtube.com/watch?v=xdQymiuB5-c).

⚠️ On considèrera que les parties se jouent en une seule manche et non en deux manches gagnantes comme dans le jeu de base.

## Matériel

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

## User Stories

### [TP4] En tant que joueur, je peux créer une partie [[api]](https://jaipur-api.usson.me/#api-Game-createGame)

 * Création de la route `POST /games`.

### [1] En tant que joueur, je peux lister les parties en cours [[api]](https://jaipur-api.usson.me/#api-Game-findAllActiveGames)

 * Création de la route `GET /games`.

### [1] En tant que joueur, je peux récupérer les informations d'une partie [[api]](https://jaipur-api.usson.me/#api-Game-findOneGameById)

 * Création de la route `GET /games/[id]`.

### [1] En tant que joueur, je peux supprimer une partie [[api]](https://jaipur-api.usson.me/#api-Game-deleteGameById) 

 * Création de la route `DELETE /games/[id]`.

### [2] En tant que joueur, je peux prendre 1 seule marchandise [[api]](https://jaipur-api.usson.me/#api-Game-takeGood) [[règles]](../rules.pdf#page=4)

 * Création de la route `PUT /games/[gameId]/players/[playerId]/take-good`.
 * Permettre l'action uniquement si c'est le tour du joueur.
 * Prendre en compte la limite de 7 cartes en main.

### [2] En tant que joueur, je peux échanger des marchandises [[api]](https://jaipur-api.usson.me/#api-Game-exchange) [[règles]](../rules.pdf#page=4)

 * Création de la route `PUT /games/[gameId]/players/[playerId]/exchange`.
 * Permettre l'action uniquement si c'est le tour du joueur.

### [2] En tant que joueur, je peux prendre les chameaux [[api]](https://jaipur-api.usson.me/#api-Game-takeCamels) [[règles]](../rules.pdf#page=4)

 * Création de la route `PUT /games/[gameId]/players/[playerId]/take-camels`.
 * Permettre l'action uniquement si c'est le tour du joueur.

### [1] En tant que joueur, je peux vendre des cartes [[api]](https://jaipur-api.usson.me/#api-Game-sell) [[règles]](../rules.pdf#page=5)

 * Création de la route `PUT /games/[gameId]/players/[playerId]/sell`.
 * Permettre l'action uniquement si la transaction est valide (voir *"Restriction lors d'une vente"*)
 * Permettre l'action uniquement si c'est le tour du joueur.

### [1] En tant que joueur, je peux terminer une partie [[règles]](../rules.pdf#page=6)

 * Une fois qu'une des conditions d'arrêt est remplie (voir *"Fin d'une manche"*) terminer la partie et décompter les points (voir *"Décompte"*)
 * Empêcher les joueurs de pouvoir effectuer une action sur une partie terminée. 
