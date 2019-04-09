/* . Функция сортировки массива sortir([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]) */
sortir = [3, 8, 7, 6, 5, -4, 3, 2, 1];
let f = function(sortir) {
  for (let i = 0; i < sortir.length; i++) {
    for (let j = i+1; j <= sortir.length; j++) {
      if (sortir[i] > sortir[j]) {
        var a = sortir[i];
        var b = sortir[j];
        var tmp = a;
        sortir[i] = b;
        sortir[j] = tmp;
      }
    }
  }
  return sortir;
}
console.log(f(sortir));