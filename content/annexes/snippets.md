---
title: "Code snippets"
weight: 1
pdf: false
---

## Add a router

Create a new file in `src/routes`
```javascript
import express from "express"
const router = express.Router()

// Write your new routes here
router.get("/hello", function(req, res) {
  res.json({hello: "world"})
})

export default router
```

Add your controller here
```javascript
// import your new router here
import healthRouter from "./healthRouter"
import express from "express"

const router = express.Router()

router.use("/health", healthRouter)
//Subscribe your router here with the base url and the router

export default router
```

## Error handling

You can use the custom class `HttpError` in `src/middlewares/HttpError.js` to return HTTP error
```javascript
import HttpError from "../middlewares/HttpError"

throw new HttpError(400, "error message")
```
