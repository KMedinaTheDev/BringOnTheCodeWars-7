
function descendingOrder(n){
//numbers are being passed in, convert the numbers into a string value
  let strNum = String(n);
  //split all the numbers in the string into an array of strings
  let strNumArr = strNum.split("");
  // sort in an ascending order
  let strNumArrSorted = strNumArr.sort(function(a,b){

  return a - b;
  });
  // reverse the order of the string
  strNumArrSorted = strNumArrSorted.reverse();
  // join the string
  strNum = strNumArrSorted.join("");
  // string values need to be pulled out and returned as numbers
  return parseInt(strNum)
}

//====same as above --> code golfed solution====//
function descendingOrder(n){
let strNumArr = parseInt(String(n).split("").sort((a,b) => a-b).reverse().join(""));
}
//first n is turned into a string, the string is split, sorted in an ascending fasion
// sort uses a function expression, w/ es6 notation, using the fat arrow
// return is not required because the function is only doing one thing
