module.exports = function getSeason(date) {
  if(date === undefined) {return 'Unable to determine the time of year!'};
  if(Object.getOwnPropertyNames(date).length != 0) {throw new Error()};
  let result = '';
  let a = date.getMonth();
  if (a == 0 || a == 1 || a == 11) {result += 'winter'};
  if (a == 2 || a == 3 || a == 4) {result += 'spring'};
  if (a == 5 || a == 6 || a == 7) {result += 'summer'};
  if (a == 8 || a == 9 || a == 10) {result += 'fall'};

  
  return result;
};
