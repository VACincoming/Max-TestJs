/* Вывести числа фибоначи (рекурсией) */

let fib = function(n) {
  let n1 = (n - 1) + (n - 2);
  if (n == 1 || n==2) {
    return 1;
  }
  if(n==0) {
    return 0;
  }
  return (fib(n-1)+fib(n-2));
}

console.log(fib(7));