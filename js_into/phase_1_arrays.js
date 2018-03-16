  Array.prototype.uniq = function() {
    const newArray = [];
    this.forEach (el => {
      if (!newArray.includes(el))
    {newArray.push(el);}
    }
  );
  return newArray;
};


Array.prototype.twoSum = function() {
  const twoSumArray = [];

  for(let i = 0; i < this.length; i++){
    for(let j = 1; j < this.length; j++){

      if(j <= i){
        continue;
      }
      else if (this[i] + this[j] === 0){
          twoSumArray.push([i, j]);
        }
    }
  }

  return twoSumArray;
};

Array.prototype.transpose = function(){

  const transposed = [];
  for (let i = 0; i < this.length; i++) {
    transposed.push(new Array(this.length));
  }

  for(let i = 0; i < this.length; i++){
    for(let j = 0; j < this[0].length; j++){
      transposed[i][j] = this[j][i];
    }
  }
  return transposed;

};
