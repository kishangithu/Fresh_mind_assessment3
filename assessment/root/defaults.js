const _ = require('./underscore');

function defaults(obj, defaultProps) {
    obj = obj || {};
    for (var prop in defaultProps) {
        if (_.isUndefined(obj[prop])) {
            obj[prop] = defaultProps[prop];
        }
    }
    return obj;
}

module.exports = defaults;
