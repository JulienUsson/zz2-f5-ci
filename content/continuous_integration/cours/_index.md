---
title: "L'intégration continue"
outputs: ["Reveal"]
---

# Intégration continue
Ça passe ou ça casse

---

## L'intégration continue

Technique permettant de vérifier la qualité du code avant son intégration dans une application.

---

> Et le déploiement continu, c'est pareil ?

---

## Le déploiement continu

Technique permettant de déployer automatiquement le nouveau code d'une application dans un ou plusieurs environnement.

<p style="color: red;">⚠️ Il ne faut pas confondre la CI et la CD mais les deux sont complémentaires</p>

---

## Les environnements

 * Développement
 * Acceptance
 * Pré-production
 * Production

---

## En pratique

![Gitflow](./gitflow.png)

---

## Les plateformes de CI/CD

 * Gitlab CI
 * Circle CI
 * Travis CI
 * Jenkins
 * ...

---

> On va utiliser laquelle, nous ?

---

# Gitlab CI

```yaml
# fichier .gitlab-ci.yml placé à la racine du dépôt

# L'image Docker sur laquelle on se base
image: node:latest 

# Définition des différents stages
stages:
    - build
    - test

# Définition d'un job du stage build
build:
    stage: build
    script: npm install # On installe les dépendances

# Définition d'un job du stage test
test:
    stage: test
    script: npm test # On lance les tests
```
