/* Факториал числа (рекурсия) */

let fact = function(n) {
  // let n1 = (n - 1) + (n - 2);
  if (n == 1) {
    return 1;
  }
  if(n==0) {
    return 0;
  }
  return n*fact(n-1);
}

console.log(fact(5));