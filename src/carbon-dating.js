const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity > MODERN_ACTIVITY 
  || sampleActivity <= 0 
  || /[a-z]/i.test(sampleActivity)) {return false};
  let result = Math.log((MODERN_ACTIVITY / parseFloat(sampleActivity))) / 0.693 * 5730;
  result = Math.ceil(result);
  
  return result;
};
