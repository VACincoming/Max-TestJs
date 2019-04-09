//Same elements

let firstArr = [1, 2, 3, 4, 5, 1, 8,2,2];
let secondArr = [3, 2, 8, 6, 5,2,2,3,3];

let sameElem = function (arr1, arr2) {
  let arr3 = [];
  for (var i = 0; i < arr1.length; i++){
      for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
          arr3.push(arr1[i]);
          break;
        }
        
      }
  }
  return arr3;
}

console.log(sameElem(firstArr, secondArr));