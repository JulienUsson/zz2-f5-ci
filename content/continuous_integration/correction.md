---
title: "Correction TP n°6 L'intégration continue"
weight: 2
draft: true
---

## .gitlab-ci.yml

```
image: node:latest

cache:
  key: node-cache
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
    - /^feature/*$/
    - merge_requests

lint:
  stage: test
  script: npm run lint
  only:
    - master
    - /^feature/*$/
    - merge_requests
```
