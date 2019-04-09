//Visokostiy year

var f = function (min, max) {
  var counter = 0;
  for (var i = min; i <= max; i++){
    if (i % 4 == 0) {
      counter++;
    }
  }
  return counter;
}

console.log(f(2000,2020));
