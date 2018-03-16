Array.prototype.bubbleSort = function(){

  let sorted = Array.from(this);

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {

      if(sorted[i] < sorted[j]){
        let temp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = temp;
      }

    }
  }

  return sorted;

};

Array.prototype.uniq = function() {
  const newArray = [];
  this.forEach (el => {
    if (!newArray.includes(el))
  {newArray.push(el);}
  }
);
return newArray;
};


String.prototype.substrings = function() {
  const substringArray = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      substringArray.push(this.slice(i,j+1));
    }
  }

 return substringArray.uniq();
};
