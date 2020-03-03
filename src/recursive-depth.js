module.exports = class DepthCalculator {
    
    calculateDepth(arr, depth = 1) {
        let currentDepth = depth;
        let maxDepth = 1;
        arr.sort((a, b) => +Array.isArray(b) - +Array.isArray(a))
        for (let key in arr) {
            if (Array.isArray(arr[key])) {
            currentDepth = this.calculateDepth(arr[key], depth + 1);
            maxDepth = maxDepth > currentDepth ? maxDepth : currentDepth;
            } 
        } 
        maxDepth = maxDepth > currentDepth ? maxDepth : currentDepth;
    
        return maxDepth;
    }
};