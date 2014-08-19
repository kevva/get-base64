# get-base64 [![Build Status](https://travis-ci.org/kevva/get-base64.svg?branch=master)](https://travis-ci.org/kevva/get-base64)

> Get base64 from a string

## Install

```sh
$ npm install --save get-base64
```

## Usage

```js
var getBase64 = require('get-base64');
var str = 'hello hlelo dW5pY29ybg== yoyo asasyo Ym9hdA==';

getBase64(str);
//=> ['dW5pY29ybg==', 'Ym9hdA==']
```

## License

MIT © [Kevin Mårtensson](http://kevinmartensson.com)
