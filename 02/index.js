//ShuffleArr
let arr = function (shuffleArray) {
  let randArr = [];
  let len = shuffleArray.length;
  for (var i = 0; i < len; i++){
    let randNumb = function(min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      rand = Math.floor(rand);
      return rand;
    }
    let currRand = randNumb(0, shuffleArray.length - 1);
    console.log(shuffleArray[currRand]);
    randArr.push(shuffleArray[currRand]);
    shuffleArray.splice(currRand, 1)
  }
  return randArr;
}

let shuffleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr(shuffleArray));