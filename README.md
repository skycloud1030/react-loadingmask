# react-loadingmask

[![Travis](https://api.travis-ci.org/skycloud1030/react-loadingmask.svg?branch=master)](https://travis-ci.org/skycloud1030/react-loadingmask)
[![Coverage Status](https://coveralls.io/repos/github/skycloud1030/react-loadingmask/badge.svg?branch=master)](https://coveralls.io/github/skycloud1030/react-loadingmask?branch=master)
[![Version](https://img.shields.io/npm/v/react-loadingmask.svg)](https://www.npmjs.com/package/react-loadingmask)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Donloads](https://img.shields.io/npm/dm/react-loadingmask.svg)](https://www.npmjs.com/package/react-loadingmask)

A Loading Component for displaying loading state of a page or a section.

## Install

```sh
npm i --save react-loadingmask
yarn add react-loadingmask --save
```

## Getting Started

```js
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";

<LoadingMask loading={true} text={"loading..."}>
  <div style={{ width: 500, height: 300 }}>Compoment You want to display</div>
</LoadingMask>
```

## Demo

- [preview](https://skycloud1030.github.io/react-loadingmask/example/)
- [code](https://github.com/skycloud1030/react-loadingmask/blob/gh-pages/src/index.js)

## Properties

| Props     | Type      | Description                          | Default |
| :-------- | :-------- | :----------------------------------- | :------ |
| loading   | boolean   | Loading status                       | false   |
| text      | string    | Customize description content        | -       |
| indicator | ReactNode | React node of the spinning indicator | -       |
