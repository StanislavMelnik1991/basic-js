  const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let seasons = ['winter', 'spring', 'summer', 'autumn']

  if (date === undefined){
    return 'Unable to determine the time of year!'
  }
  if(date instanceof Date&&(Object.keys(date).length == 0)){
    
    let tmp = date.getMonth()+1
    console.log(tmp)
    tmp === 12?tmp = 0.01:tmp+=0.01;
    console.log(tmp)
    tmp = Math.ceil(tmp/3)-1
    
    
    console.log(seasons[tmp])
    console.log(tmp)
    
    return seasons[tmp]
  }else{
    throw new Error('Invalid date!')
  }
}
getSeason(new Date(2134, 2, 17, 11, 27, 4, 321))

module.exports = {
  getSeason
};
