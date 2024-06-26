const _ = require('./underscore');

function invert(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        result[obj[keys[i]]] = keys[i];
    }
    return result;
}

module.exports = invert;
