# get-base64 [![Build Status](http://img.shields.io/travis/kevva/get-base64.svg?style=flat)](https://travis-ci.org/kevva/get-base64)

> Get base64 from a string


## Install

```
$ npm install --save get-base64
```


## Usage

```js
var getBase64 = require('get-base64');

getBase64('foo dW5pY29ybg== bar Ym9hdA==');
//=> ['dW5pY29ybg==', 'Ym9hdA==']
```


## CLI

```
$ npm install --global get-base64
```

```
$ get-urls --help

  Usage
    $ get-base64 <file>
    $ cat <file> | get-base64
```


## License

MIT © [Kevin Mårtensson](http://kevinmartensson.com)
