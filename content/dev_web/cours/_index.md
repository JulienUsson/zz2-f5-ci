---
title: "Le developpement web"
outputs: ["Reveal"]
weight: 1
---

# Le developpement web
**GET** /cours HTTP/1.1

---

## Une application web 

 * Ca répond à des requêtes HTTP
 * C'est accessible via internet (pas toujours => intranet)
 * C'est utilisable avec un navigateur (pas toujours => API)

---

![frontend vs backend](./web-app.jpg)
<small style="text-align: right;">www.designquote.net</small>


---

## Une requête HTTP

```HTTP
GET /gp/cart/view.html?ref_=nav_cart
Host: www.amazon.fr
Accept: text/html
User-Agent: Chrome/27.0.1453.110
```

## La réponse

```HTTP
HTTP/2 200 
content-type: text/html; charset=UTF-8
Content-Length: 155
date: Wed, 26 Aug 2020 13:59:36 GMT

<html>...</html>
```

---


## Les verbes HTTP

| Verbe     | Définition                    |
| --------- | ----------------------------- |
| GET       | Lecture d'une ressource       |
| POST      | Création d'une ressources     |
| PUT       | Mise à jour d'une ressource   |
| DELETE    | Suppression d'une ressource   |

---

## Les headers HTTP

| Headers       | Définition                    |
| ------------- | ----------------------------- |
| Accept        | Format des données attendues  |
| Content-Type  | Format des données envoyées   |
| Cache-Control | Politique de cache            |
| Authorization | Token d'authentification      |
| Origin        | L'origine de la consultation  |

---

## Les codes de retour


| Headers       | Définition                    |
| ------------- | ----------------------------- |
| 2xx           | Success                       |
| 200           | Ok                            |
| 4xx           | Client errors                 |
| 400           | Bad Request                   |
| 401           | Unauthorized                  |
| 403           | Forbidden                     |
| 404           | Not found                     |
| 5xx           | Server errors                 |
| 500           | Internal Server Error         |

---

## La norme REST

 * Se base sur les url, les verbes et les headers
 * Permet de faire une API facilement utilisable
 * Simple à comprendre

---

> Pourtant ça à l'air compliqué...

---

## Récupérer toutes les pizzas

```HTTP
GET /pizzas
Host: www.pizzima.fr
Accept: application/json
```

```json
// Status code 200
[
    {id: 1, name: "Classique jambon" },
    {id: 2, name: "Bellachô" },
    {id: 3, name: "Super veggie" },
    ...
]
```

---

## Récupérer la pizza n°42

```HTTP
GET /pizzas/42
Host: www.pizzima.fr
Accept: application/json
```

```json
// Status code 200
{
    id: 42, 
    name: "4 Fromages",
}
```

---

## Ajouter une pizza

```HTTP
POST /pizzas
Host: www.pizzima.fr
Accept: application/json

{
    name: "Pepperoni",
    description: "Une pizza au pepperoni"
}
```

```json
// Status code 201
{
    id: 50,
    name: "Pepperoni",
    description: "Une pizza au pepperoni"
}
```

---

## Modifier la pizza n°42

```HTTP
PUT /pizzas/42
Host: www.pizzima.fr
Accept: application/json

{
    name: "5 Fromages",
    description: "Une pizza au fromage"
}
```

```json
// Status code 200
{
    id: 42,
    name: "5 Fromages",
    description: "Une pizza au fromage"
}
```

---

## Supprimer la pizza n°42

```HTTP
DELETE /pizzas/42
Host: www.pizzima.fr
Accept: application/json
```

```json
// Status code 200
{
    id: 42,
    name: "5 Fromages",
    description: "Une pizza au fromage"
}
```

---

## Récupérer les ingrédients de la pizza n°42

```HTTP
GET /pizzas/42/ingredients
Host: www.pizzima.fr
Accept: application/json
```

```json
// Status code 200
["Sauce tomate", "Mozzarella", "Jambon"]
```

---

> Ok, mais en Javascript, on fait ça comment ?

---

## ExpressJS

```javascript
import * as pizzaService from "../services/pizzaService"

app.get('/pizzas', (req, res) => {
    const pizzas = pizzaService.findAll()
    res.status(200).json(pizzas)
})

app.post('/pizzas/:id', (req, res) => {
    const updatedPizza = pizzaService.update(req.params.id, req.body)
    res.status(200).json(updatedPizza)
})

app.delete('/pizzas/:id', (req, res) => {
    const removedPizza = pizzaService.delete(req.params.id)
    res.status(200).json(removedPizza)
})
```
