const chainMaker = {
  result: [],
  
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    
    this.result.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number' || position > this.result.length
   || position - 1 < 0 ){
      this.result = [];
      throw new Error()
    } else {
    
      this.result.splice(position - 1, 1)
    }
    
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let final = this.result.join('~~');
    this.result = [];
    return final;
  }
};

module.exports = chainMaker;
