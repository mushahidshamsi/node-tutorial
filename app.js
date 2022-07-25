// 1. npm init installs npm locally asking the specifications
// 2. npm i lodash
// 2. npm i bootstrap

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
