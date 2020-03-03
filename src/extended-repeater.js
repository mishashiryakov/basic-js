module.exports = function repeater(str, options) {
    str += '';
    let result = '';

    for(let i = options.repeatTimes || 1; i > 0; i--) {
        result += str;
        for(let j = options.additionRepeatTimes || 1; j > 0; j--) {
            if(options.addition === undefined){
                result += '';
                continue;};
            result += options.addition;
            if (j > 1) {result += options.additionSeparator || '|'};
        }
        if(i>1){result += options.separator || '+'}
    }
    
    return result;
};
  