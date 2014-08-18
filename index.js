'use strict';

var base64Regex = require('base64-regex');

/**
 * Get base64 from a string
 *
 * @param {String} str
 * @api public
 */

module.exports = function (str) {
    var base64 = str.match(base64Regex());
    var ret = [];

    if (!base64) {
        return [];
    }

    base64.forEach(function (el) {
        ret.push(el.trim());
    });

    return ret;
};
