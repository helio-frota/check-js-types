/**
 * This function helps a lot.
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 */
function helper(a, b, c) {
  return a + b + c;
}

// To fix this, need JSDoc like the helper function above ^
function noHelp(x, y, z) {
  return x + y + z;
}

module.exports = {
  helper,
  noHelp
};

