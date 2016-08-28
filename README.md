jsonnet-loader for webpack
==========================================
[![Build Status](https://travis-ci.org/SparrowJang/jsonnet-loader.svg?branch=master)](https://travis-ci.org/SparrowJang/jsonnet-loader)

The loader is able to require jsonnet file for webpack.

## Installation

```sh
npm install --save-dev jsonnet-loader
```

## Usage

```js
var json = require("jsonnet!./config.jsonnet");
```


### webpack config

```js
module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsonnet$/,
        loader: "jsonnet"
      }
    ]
  }
};
```

## Test

```sh
npm run test
```


