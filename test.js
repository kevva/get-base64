'use strict';

var test = require('ava');
var getBase64 = require('./');

test('get base64 from a string', function (t) {
	t.plan(3);

	var a = new Buffer('unicorn').toString('base64');
	var b = new Buffer('boat').toString('base64');
	var ret = getBase64('hjehjej ' + a + ' 124124ts dsdfasd gfgfdgsfa ' + b);
	var retA = new Buffer(ret[0], 'base64').toString();
	var retB = new Buffer(ret[1], 'base64').toString();

	t.assert(ret.length === 2, ret.length);
	t.assert(retA === 'unicorn', retA);
	t.assert(retB === 'boat', retB);
});
