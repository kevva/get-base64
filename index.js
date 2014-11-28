'use strict';

var arrayUniq = require('array-uniq');
var base64Regex = require('base64-regex');

/**
 * Get base64 from a string
 *
 * @param {String} str
 * @api public
 */

module.exports = function (str) {
	var base64 = str.match(base64Regex());

	if (!base64) {
		return [];
	}

	return arrayUniq(base64.map(function (el) {
		return el.trim();
	}));
};
