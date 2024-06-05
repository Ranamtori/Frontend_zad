let i,
  suma = 0;
const array = [];

function sum(array) {
  for (i = 0; i < array.length; i++) {
    suma = suma + array[i];
  }
  return suma;
}

console.log(sum([3, 7, 5]));

export { sum };
