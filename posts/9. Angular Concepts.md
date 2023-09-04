---
title: "Angular Concepts - TypeScript"
date: "2022-12-13"
description: "Angular is framework for single page applications"
language: "Angular"
categories: ["Angular", "TypeScript"]
---

## Install NodeJS and TypeScript

Check node in cmd - `npm -v`

Install typescript - `npm install -g typescript`

> **_NOTE:_** Make sure both of them are in path

## Simple Program

```javascript
export {};

function addNumbers(a: number, b: number) {
  console.log(a + " " + b + " " + (a + b));

  addNumbers(a, b);
}
```

## Installation of Angular

`npm install -g @angular/cli@10`

`ng --version`

## New Project

`ng new testapp`

`ng serve -o`
