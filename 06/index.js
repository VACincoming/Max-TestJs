//6. delEmptyValue([NaN, 0, 15, false, -22, '',undefined, 47, null])

delEmptyValue = [NaN, 0, 15, false, -22, '', undefined, 47, null];

let f = function (arr) {
  var array = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == "number") {
      array.push(arr[i]);
    }
  }
  return array;
}

console.log(f(delEmptyValue));
// console.log(typeof (NaN));