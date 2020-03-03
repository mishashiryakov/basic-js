module.exports = function countCats(matrix) {
  let sum = 0;
  for(backyard in matrix) {
    for(cat in matrix[backyard]) {
       sum += matrix[backyard][cat] == '^^' ? 1 : 0; 
    }
  }
  return sum;
};
