/* Заполнить массив случайными числами,
  функция принимает(Мин значение, максимальное, и количество элементов, bool: с повторениями или без)
если невозможно заполнить массив выбросить ошибку с текстом« Входные данные некоректны» */

let f = function (min, max, count, repeat) {
  let arr = [];
      let rnd = function randomInteger(min, max) {
        var rand = Math.floor(min + Math.random() * (max + 1 - min));
        return rand;
      };
  if (min > max || count < 0 || typeof (repeat) != "boolean") {
    return console.log("Enter correct date");
  } else if (repeat == true) {
    // console.log(rnd(5, 10));
    for (let i = 0; i < count; i++) {
      // console.log(rnd(min, max));
      arr[i] = rnd(min, max);
    }
  } else {
    for (let i = 0; i < count; i++) {
      let rep = false;
      let rndNumb = rnd(min, max);
      for (let j = 0; j < arr.length; j++) {
        if (rndNumb == arr[j]) {
          rep = true;
          break;
        }
      }
      if (rep == false) {
        arr.push(rndNumb);
      }
    }
  }
  return arr;
}

console.log(f(12, 10, 9, true));
console.log(f(1, 10, 9, false));