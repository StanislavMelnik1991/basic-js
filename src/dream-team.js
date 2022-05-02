const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  
  let arr = members
  if (!Array.isArray(arr)){
    return false
  }

  arr.sort()
  let result = ''
  for (let name in arr) {
    typeof arr[name] === 'string'?
    arr[name]=arr[name].trim().toUpperCase():
    false;
  }
  arr.sort()
  console.log(arr)
  for (let name of arr) {
    if (typeof name === 'string'){
      if (name[0]!==undefined){
        result+=name[0]
      }
      
    }
    
    
    
  }
  
  return result
}

module.exports = {
  createDreamTeam
};
