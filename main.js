

return parseInt(strNum)
function descendingOrder(n){

  let strNum = String(n);
  let strNumArr = strNum.split("");
  let strNumArrSorted = strNumArr.sort(function(a,b){
  return a - b;
  });

  strNumArrSorted = strNumArrSorted.reverse();
  strNum = strNumArrSorted.join("");

  return parseInt(strNum)
}
