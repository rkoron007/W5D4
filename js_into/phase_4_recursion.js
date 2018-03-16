 function range(start, end) {
   let arr = [];

   if (start === end) {
     return [start];
   }

   return [start].concat(range(start + 1, end));
 }

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  debugger
  return arr[0] + sumRec(arr.slice(1, arr.length));
}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp-1);
}


function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  };

  if (exp % 2 === 0) {
    // x ** y === Math.pow(x, y)
    return exponent2(base, exp / 2) ** 2;
  } else {
    return base * (exponent2(base, exp - 1) / 2) ** 2;
  };

};
