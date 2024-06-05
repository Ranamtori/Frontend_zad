let x;
function isOdd(x) {
  if (x % 2 == 1) return true;
  else return false;
}

const isEven = (x) => x % 2 == 0;

console.log(isOdd(5));
console.log(isEven(4));

export { isOdd };
