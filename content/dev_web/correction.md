---
title: "Correction TP n°4 Le developpement web"
weight: 3
draft: true
---

## src/services/gameService.js

{{< highlight javascript >}}
import fs from "fs"
import path from "path"
import _ from "lodash"

const DATABASE_FILE = path.join(__dirname, "../../storage/database.json")

export function getGames() {
  try {
    const file = fs.readFileSync(DATABASE_FILE)
    return JSON.parse(file)
  } catch (e) {
    return []
  }
}

export function saveGame(game) {
  const games = getGames()
  const gameIndex = games.findIndex((g) => g.id === game.id)
  if (gameIndex >= 0) {
    games[gameIndex] = game
  } else {
    games.push(game)
  }
  try {
    fs.mkdirSync(path.dirname(DATABASE_FILE))
  } catch (e) {
    // Do nothing
  }
  fs.writeFileSync(path.join(DATABASE_FILE), JSON.stringify(games))
}

function initDeck() {
  const deck = []
  _.range(6).map((_) => deck.push("diamonds"))
  _.range(6).map((_) => deck.push("gold"))
  _.range(6).map((_) => deck.push("silver"))
  _.range(8).map((_) => deck.push("cloth"))
  _.range(8).map((_) => deck.push("spice"))
  _.range(10).map((_) => deck.push("leather"))
  _.range(11 - 3).map((_) => deck.push("camel"))
  return _.shuffle(deck)
}

function drawCards(deck, count = 1) {
  const drawedCards = []
  for (let i = 0; i < count; i++) {
    drawedCards.push(deck.pop())
  }
  return drawedCards
}

function putCamelsFromHandToHerd(game) {
  game._players.forEach((player) => {
    let camelIndex = player.hand.findIndex((card) => card === "camel")
    while (camelIndex !== -1) {
      player.hand.splice(camelIndex, 1)
      player.camelsCount++
      camelIndex = player.hand.findIndex((card) => card === "camel")
    }
  })
}

export function createGame(name) {
  const deck = initDeck()
  const market = ["camel", "camel", "camel", ...drawCards(deck, 2)]
  const game = {
    id: getGames().length + 1,
    name,
    market,
    _deck: deck,
    _players: [
      { hand: drawCards(deck, 5), camelsCount: 0, score: 0 },
      { hand: drawCards(deck, 5), camelsCount: 0, score: 0 },
    ],
    currentPlayerIndex: 0,
    tokens: {
      diamonds: [7, 7, 5, 5, 5],
      gold: [6, 6, 5, 5, 5],
      silver: [5, 5, 5, 5, 5],
      cloth: [5, 3, 3, 2, 2, 1, 1],
      spice: [5, 3, 3, 2, 2, 1, 1],
      leather: [4, 3, 2, 1, 1, 1, 1, 1, 1],
    },
    _bonusTokens: {
      3: _.shuffle([2, 1, 2, 3, 1, 2, 3]),
      4: _.shuffle([4, 6, 6, 4, 5, 5]),
      5: _.shuffle([8, 10, 9, 8, 10]),
    },
    isDone: false,
  }
  putCamelsFromHandToHerd(game)
  saveGame(game)
  return game
}
{{< /highlight >}}
