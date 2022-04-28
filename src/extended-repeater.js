const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resultArray  = [];
  let additionArray = [];
  let result = ''
  
  str+=''


  options.separator == undefined?
  options.separator = '+':
  options.separator;

  options.additionSeparator === undefined?
  options.additionSeparator = '|':
  options.additionSeparator;

  if (options.addition !== undefined){
    options.addition+=''
    for (let i = 0; i<options.additionRepeatTimes;i++){
      additionArray.push(options.addition)
      
    }
    if (additionArray.length>0){
      str += additionArray.join(options.additionSeparator)
    }else{
      str += options.addition
    }
    
   
    result = str
  }
  for (let i = 0; i<options.repeatTimes;i++){
    resultArray.push(str)
  }
  (resultArray.length>0?
  result = resultArray.join(options.separator):
  result = str)
 
  return result
}


module.exports = {
  repeater
};
