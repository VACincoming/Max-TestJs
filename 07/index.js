let arr = [10, 20, 10, 40, 50, 60, 70];


let found = function (number, arr) {
      if (number < arr[0]) {
        console.log("error, so less number");
      }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] == number) {
        console.log("{" + i + "," + j + "}");
      }
    }
  }
}

found(20,arr);