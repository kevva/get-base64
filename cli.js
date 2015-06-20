#!/usr/bin/env node
'use strict';
var fs = require('fs');
var meow = require('meow');
var stdin = require('get-stdin');
var getBase64 = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ get-base64 <file>',
		'  $ cat <file> | get-base64'
	]
});

function run(data) {
	console.log(getBase64(data).join('\n'));
}

if (!cli.input.length && process.stdin.isTTY) {
	console.error('Input file required');
	process.exit(1);
}

if (cli.input.length) {
	run(fs.readFileSync(cli.input[0], 'utf8'));
} else {
	stdin(run);
}
