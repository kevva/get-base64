'use strict';

/**
 * Get base64 from a string
 *
 * @param {String} str
 * @api public
 */

module.exports = function (str) {
    var reg = /(^|\s)(?:[A-Za-z0-9+\/]{4}\n?)*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)(?=\s|$)/gi;
    var base64 = str.match(reg);
    var ret = [];

    if (!base64) {
        return [];
    }

    base64.forEach(function (el) {
        ret.push(el.trim());
    });

    return ret;
};
