---
title: "Correction TP n°5 L'intégration continue"
weight: 3
draft: false
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
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository code
        uses: actions/checkout@v3
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16.x'
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm run test
      - name: Run lint
        run: npm run lint
      - name: Save coverage report
        uses: actions/upload-artifact@v3
        with:
          name: code-coverage-report
          path: coverage/**
```
