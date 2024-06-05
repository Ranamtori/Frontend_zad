let a, b, i;

function range(a, b) {
  const array = [];
  for (i = a; i <= b; i++) {
    array.push(i);
  }
  return array;
}

console.log(range(1, 4));

export { range };
