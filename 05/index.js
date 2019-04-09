//not Same elements
let firstArr = [1, 2, 3, 4, 5];
let secondArr = [3, 4, 5, 6, 7, 8, 9];
let notSameElem = function (arr1, arr2) {
  let arr3 = [];
  for (var i = 0; i < arr1.length; i++) {
    let found = false;
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        found = true;
        break;
      }
    }
    if (found == false) {
      arr3.push(arr1[i]);
    }
  }
  return arr3;
}

// let notSameElem_1 = function (arr2, arr1) {
//   let arr3 = [];
//   for (var i = 0; i < arr2.length; i++) {
//     let found = false;
//     for (var j = 0; j < arr1.length; j++) {
//       if (arr2[i] == arr1[j]) {
//         found = true;
//         break;
//       }
//     }
//     if (found == false) {
//       arr3.push(arr1[i]);
//     }
//   }
//   return arr3;
// }

final = notSameElem(firstArr, secondArr).concat(notSameElem(secondArr, firstArr));

// console.log(notSameElem(firstArr, secondArr));
// console.log(notSameElem(secondArr, firstArr));
console.log(final);