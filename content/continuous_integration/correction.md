---
title: "Correction TP n°6 L'intégration continue"
weight: 3
draft: false
---

## .gitlab-ci.yml

```
image: node:latest

cache:
  files:
    - package.json
  paths:
  - node_modules/

before_script:
  - npm install

stages:
  - test

test:
  stage: test
  script: npm run test
  only:
    - master
    - /^feature\/.*$/
    - /^bugfix\/.*$/
    - merge_requests

lint:
  stage: test
  script: npm run lint
  only:
    - master
    - /^feature\/.*$/
    - /^bugfix\/.*$/
    - merge_requests
```
