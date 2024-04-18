const defaults = require('./defaults');

const testObject = { name: 'Bruce Wayne', age: 36 };
const defaultProps = { name: 'Unknown', gender: 'Male' };
const result = defaults(testObject, defaultProps);
console.log(result);