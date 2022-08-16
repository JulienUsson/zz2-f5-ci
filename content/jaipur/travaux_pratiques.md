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
 * Attention au type de retour (uniquement l'identifiant et le nom de la partie).
 * Attention à bien retourner le code de status `400` si aucune partie n'est trouvée.

### [1] En tant que joueur, je peux lister les parties en cours [[api]](https://jaipur-api.usson.me/#api-Game-findAllActiveGames)

 * Création de la route `GET /games`.
 * Attention au type de retour (uniquement l'identifiant et le nom d'une partie).

### [1] En tant que joueur, je peux récupérer les informations d'une partie [[api]](https://jaipur-api.usson.me/#api-Game-findOneGameByIdAndPlayerId)

 * Création de la route `GET /games/:gameId/players/:playerId`.
 * Attention aux types des paramètres `gameId` et `playerId`.
 * Attention au type de retour (ne pas retourner les secrets et retourner la main du joueur).
 * Attention à bien retourner le code de status `404` si aucune partie n'est trouvée.

### [1] En tant que joueur, je peux supprimer une partie [[api]](https://jaipur-api.usson.me/#api-Game-deleteGameById) 

 * Création de la route `DELETE /games/:gameId`.
 * Attention au type du paramètre `gameId`.
 * Attention à bien retourner le code de status `404` si aucune partie n'est trouvée.

### [2] En tant que joueur, je peux prendre 1 seule marchandise [[api]](https://jaipur-api.usson.me/#api-Game-takeGood) [[règles]](../rules.pdf#page=4)

 * Création de la route `POST /games/:gameId/players/:playerId/take-good`.
 * Attention aux types des paramètres `gameId` et `playerId`.
 * Attention à bien retourner le code de status `404` si aucune partie n'est trouvée.
 * Attention à bien retourner le code de status `400` si les paramètres ne sont pas valides.
 * Permettre l'action uniquement si c'est le tour du joueur.
 * À la fin de son tour, un joueur ne peut jamais avoir plus de 7 cartes en main.

### [2] En tant que joueur, je peux échanger des marchandises [[api]](https://jaipur-api.usson.me/#api-Game-exchange) [[règles]](../rules.pdf#page=4)

 * Création de la route `POST /games/:gameId/players/:playerId/exchange`.
 * Attention aux types des paramètres `gameId` et `playerId`.
 * Attention à bien retourner le code de status `404` si aucune partie n'est trouvée.
 * Attention à bien retourner le code de status `400` si les paramètres ne sont pas valides.
 * Permettre l'action uniquement si c'est le tour du joueur.
 * On ne peut jamais troquer 1 seule carte de sa main contre 1 carte du marché. Un troc, c’est au minimum 2 cartes contre 2.

### [2] En tant que joueur, je peux prendre les chameaux [[api]](https://jaipur-api.usson.me/#api-Game-takeCamels) [[règles]](../rules.pdf#page=4)

 * Création de la route `POST /games/:gameId/players/:playerId/take-camels`.
 * Attention aux types des paramètres `gameId` et `playerId`.
 * Attention à bien retourner le code de status `404` si aucune partie n'est trouvée.
 * Attention à bien retourner le code de status `400` si les paramètres ne sont pas valides.
 * Permettre l'action uniquement si c'est le tour du joueur.

### [1] En tant que joueur, je peux vendre des cartes [[api]](https://jaipur-api.usson.me/#api-Game-sell) [[règles]](../rules.pdf#page=5)

 * Création de la route `POST /games/:gameId/players/:playerId/sell`.
 * Attention aux types des paramètres `gameId` et `playerId`.
 * Attention à bien retourner le code de status `404` si aucune partie n'est trouvée.
 * Attention à bien retourner le code de status `400` si les paramètres ne sont pas valides.
 * Permettre l'action uniquement si la transaction est valide (voir *"Restriction lors d'une vente"*)
 * Permettre l'action uniquement si c'est le tour du joueur.

### [1] En tant que joueur, je peux terminer une partie [[règles]](../rules.pdf#page=6)

 * Une fois qu'une des conditions d'arrêt est remplie (voir *"Fin d'une manche"*) terminer la partie et décompter les points (voir *"Décompte"*)
 * Empêcher les joueurs de pouvoir effectuer une action sur une partie terminée. 
 * Lors d’un décompte, si les deux joueurs possèdent le même nombre de chameaux, personne ne gagne le jeton chameau.
