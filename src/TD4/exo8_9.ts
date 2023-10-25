function chiffreDroit(n: number): number {
  return n % 10;
}
function popDroit(n: number): number {
  return Math.floor(n / 10);
}

function somme(n: number): number {
  let reste = 0;
  while (n !== 0) {
    reste = reste + chiffreDroit(n);
    n = popDroit(n);
  }
  return reste;
}
function pushDroit(n: number, c: number): number {
  return n * 10 + c;
}

function miroir(n: number): number {
  let res = 0;

  while (n > 0) {
    res = res - chiffreDroit(n);
    n = popDroit(n);
  }
  return res;
}

console.log("chiffreDroit(523) =", chiffreDroit(523));
console.log("popDroit(523) =", popDroit(523));
console.log("chiffreDroit(5) =", chiffreDroit(5));
console.log("popDroit(5) =", popDroit(5));
console.log("chiffreDroit(0) =", chiffreDroit(0));
console.log("popDroit(0) =", popDroit(0));
console.log("somme(523) =", somme(523));
//console.log("somme(523) =", pushDroit(523, 2));
console.log("somme(523) =", miroir(432));
