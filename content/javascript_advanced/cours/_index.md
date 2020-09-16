---
title: "Javascript avancé"
outputs: ["Reveal"]
weight: 1
---

# Javascript 2
Le retour

---

## Les modules

```javascript
// Chaque fichier est appelé module. 
// Un module peut exporter ou importer des fonctions, variables, etc... d'autres modules

// Export par défaut (un seul par module)
export default function func1() {/* some code */ }
// Pour l'import
import func1 from "./fichier1"

// export nommé (0 ou n par module)
export function func2() {/* some code */ }
export function func3() {/* some code */ }
// Pour l'import
import { func2, func3 } from "./fichier1"
// On peut cumuler les deux
import func1, { func2, func3 } from "./fichier1"

// On peut utiliser uniquement les fonctions, variables, etc... exportés
```

---

## Les exceptions

```javascript
function readFile(file) {
    // Some code
    if("file don't exist") {
        throw new Error("Error: can't read file") // Termine directement la fonction
    }
    // Some code
}

let text = ""
try {
    text = readFile("./foo.txt");  
} catch (error) {
    text = error.message
}
console.log(text)
// Si on catch pas, l'exception remonte la pile
// Si l'exception remonte toute la pile c'est le crash...
```
---

## Javascript est non bloquant (asynchrone)

![Async](./async.png)

---

## Asynchronité: Les callbacks

```javascript
import fs from "fs"

console.log("Foo")

fs.readFile('./foo.txt', function (err, data) {
  if (err) {
      console.error("Impossible de lire le fichier")
      throw err
  }
  console.log(data);
});

console.log("Bar")
// Foo Bar data
```

---

## Asynchronité: Les promesses (depuis 2015)

```javascript
import fs from "fs"

console.log("Foo")

fs.promises.readFile('./foo.txt').then(function (data) {
    console.log(data)
})
.catch(function (err) {
    console.error("Impossible de lire le fichier")
    throw err
})

console.log("Bar")
// Foo Bar data
```

---

## Transformer un callback en promesse

```javascript
import fs from "fs"

function customPromiseReadFile(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, function (err, data) {
            if(err) { 
                reject(err)
                return
            }
            resolve(data)
        })
    })
}
```

---

## Asynchronité: La syntaxe async/await (sucre syntaxique)

```javascript
// On ne peut utiliser le mot-clé await que dans une fonction async
async function getPostsPromise() {
    try {
       const user = await fetchUser()
       const posts = await fetchUserPosts(user)
       return posts
    } catch(e) {
        console.error(e)
        throw e
    }
}

// Cette fonction est totalement identique à la précédente pour l'interpréteur JS
function getPostsPromise() {
    return new Promise(function (resolve, reject) {
        fetchUser().then(function (user) {
            fetchUserPosts(user).then(function (posts) {
                resolve(posts)
            })
        }).catch(function (e) {
            console.error(e)
            reject(e)
        })
    })
}
```
