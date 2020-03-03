module.exports = function transform(arr) {
   if ( !Array.isArray(arr)) {throw new Error()};
   
   if (arr.length == 0) {return arr};  
   
   let arr2 = [];
   for(let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
        case '--discard-next':  
           i++;
          break;
      
        case '--discard-prev':  
            arr2.pop();
          break;

        case '--double-next':
            if (i == arr.length - 1) break;
            arr2.push(arr[i + 1]);
            break;

        case '--double-prev':

            if(i != 0) {arr2.push(arr[i - 1])}; 
            break;

        default:
          arr2.push(arr[i]);
        }
   }
   return arr2;
};

 