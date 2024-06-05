const slowo1 = "";
let i;

function palindrom(slowo1) {
  const slowo2 = slowo1.split("").reverse().join("");

  return slowo1 == slowo2;
  // let slowo2 = slowo1;
  // const array1 = slowo1.split("");
  // const array2 = slowo2.split("");

  // for(i=0; i<array1.length; i++)
  // {
  //     if(array1[i] != array2[i])
  //     {
  //         return false;
  //     }
  //     else return true;
  // }
}

console.log(palindrom("maslo"));

export { palindrom };
