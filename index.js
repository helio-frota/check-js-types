const { helper, noHelp } = require('./lib/helper');

console.log(helper(1,2,3));
console.log(helper('foo','bar',42));


console.log(noHelp(1,2,3));
console.log(noHelp('foo','bar',42));

