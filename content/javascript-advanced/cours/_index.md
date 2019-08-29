---
title: "Javascript avancé"
outputs: ["Reveal"]
---

# Javascript 2
Le retour

---

## Les exceptions

---

## L'asynchronité

 * Javascript possède des I/O non bloquantes

```javascript
console.log("1")
fs.readFile('/toto.txt', (err, data) => {
  console.log("2")
});
console.log("3")
// 1 3 2
```

---

## Le callback hell

```
const verifyUser = function(username, password, callback){
   dataBase.verifyUser(username, password, (error, userInfo) => {
       if (error) {
           callback(error)
       }else{
           dataBase.getRoles(username, (error, roles) => {
               if (error){
                   callback(error)
               }else {
                   dataBase.logAccess(username, (error) => {
                       if (error){
                           callback(error);
                       }else{
                           callback(null, userInfo, roles);
                       }
                   })
               }
           })
       }
   })
};
```

---

# La solution: Les promesses

```
const verifyUser = function(username, password) {
   database.verifyUser(username, password)
       .then(userInfo => dataBase.getRoles(userInfo))
       .then(rolesInfo => dataBase.logAccess(rolesInfo))
       .then(finalResult => {
           //do whatever the 'callback' would do
       })
       .catch((err) => {
           //do whatever the error handler needs
       });
};
```
