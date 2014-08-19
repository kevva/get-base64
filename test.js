'use strict';

var getBase64 = require('./');
var test = require('ava');

test('get base64 from a string', function (t) {
    t.plan(3);

    var a = new Buffer('unicorn').toString('base64');
    var b = new Buffer('boat').toString('base64');
    var ret = getBase64('hjehjej ' + a + ' 124124ts dsdfasd gfgfdgsfa ' + b);

    t.assert(ret.length === 2);
    t.assert(new Buffer(ret[0], 'base64').toString() === 'unicorn');
    t.assert(new Buffer(ret[1], 'base64').toString() === 'boat');
});
