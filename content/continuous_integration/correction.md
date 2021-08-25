---
title: "Correction TP n°6 L'intégration continue"
weight: 3
draft: true
---

## .github/workflows/continuous-integration.yml

```
name: Continuous integration
on:   
  push:
    branches:    
      - master
  pull_request:
    branches:    
      - feature/**
      - bugfix/**
jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository code
        uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14.x'
      - name: Install dependencies
        run: npm install
  test: 
    needs: setup
    runs-on: ubuntu-latest
    steps: 
      - name: Run tests
        run: npm run test
  lint: 
    needs: setup
    runs-on: ubuntu-latest
    steps: 
      - name: Run lint
        run: npm run lint
```
