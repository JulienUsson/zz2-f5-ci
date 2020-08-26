---
title: "Correction TP n°4 Le developpement web"
weight: 3
draft: true
---

## src/routes/cardRouter.js

{{< highlight javascript >}}
import express from "express"
import HttpError from "../middlewares/HttpError"
import * as cardService from "../services/cardService"
const router = express.Router()

// Accessible via http://localhost:3000/cards/workers
router.get("/workers", async function(req, res) {
  try {
    const workers = await cardService.importWorkers()
    res.json(workers)
  } catch (e) {
    // Retourne une erreur 500 si la lecture à échouée
    throw new HttpError(500, "Can't read workers cards.")
  }
})

// Accessible via http://localhost:3000/cards/buildings
router.get("/buildings", async function(req, res) {
  try {
    const buildings = await cardService.importBuildings()
    res.json(buildings)
  } catch (e) {
    // Retourne une erreur 500 si la lecture à échouée
    throw new HttpError(500, "Can't read buildings cards.")
  }
})

export default router

{{< /highlight >}}

## src/routes/index.js

{{< highlight javascript >}}
import cardRouter from "./cardRouter"
import healthRouter from "./healthRouter"
import express from "express"

const router = express.Router()

// Ne pas oubliez d'ajouter le routeur ici
router.use("/cards", cardRouter)
router.use("/health", healthRouter)

export default router
{{< /highlight >}}

## src/services/cardService.js

{{< highlight javascript >}}
import fs from "fs"
import path from "path"
import camelCase from "lodash/camelCase"

export function csvToJson(file) {
  const [headerLine, ...lines] = file.split("\n")
  const headers = headerLine.split(";")
  return lines.map(line => {
    const cells = line.split(";")
    const tmpObject = {}
    for (let i = 0; i < cells.length; i++) {
      tmpObject[camelCase(headers[i])] = Number.parseInt(cells[i])
    }
    return tmpObject
  })
}

export async function importBuildings() {
  const buildingsPath = path.join(__dirname, "../ressources/buildings.csv")
  const buildingsFile = await fs.promises.readFile(buildingsPath)
  // L'exception n'est pas catché donc elle va remonter si elle est levée.
  return csvToJson(buildingsFile)
}

export async function importWorkers() {
  const workersPath = path.join(__dirname, "../ressources/workers.csv")
  const workersFile = await fs.promises.readFile(workersPath)
  // L'exception n'est pas catché donc elle va remonter si elle est levée.
  return csvToJson(workersFile)
}
{{< /highlight >}}
