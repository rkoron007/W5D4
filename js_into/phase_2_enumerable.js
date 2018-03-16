Array.prototype.myEach = function(callback){
  let arr = Array.from(this);

  for (let i = 0; i < this.length; i++) {
    arr[i] = callback(this[i]);

  }

};

Array.prototype.myMap = function(callback) {
  let mapped = [];
  this.myEach (el => {
    mapped.push(callback(el));
  });
  return mapped;
};


const cb =  el => { return el * 2; };

const cb2 = (el1, el2) => { return el1 + el2;  };


Array.prototype.myReduce = function(callback, acc = 0) {
  // for (let i = 0; i < this.length; i++) {
  //   if (initialValue === 0)
    this.myEach(el => {
      acc = callback(acc, el);
    });
  return acc;
};
