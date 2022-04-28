const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(a) {
  let tmp = [...a]
  let result = 0
  function flatDeep(arr, d = 100) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [''])
                 : arr.slice();
  };
  tmp = flatDeep(tmp)
  for (let key in tmp) {
    tmp[key] === '^^'?
    result++:
    false;
  }
 return result
}

module.exports = {
  countCats
};
