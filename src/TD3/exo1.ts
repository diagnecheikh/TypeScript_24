function egaux(x: number, y: number, z: number): boolean {
  if (x === y && y === z) {
    return true;
  }
  return false;
}
function entre(x: number, y: number, z: number): boolean {
  if (y <= x && y <= z) {
    return true;
  }
  return false;
}
function estPair(x: number): boolean {
  if (x % 2 === 0) {
    return true;
  }
  return false;
}

function main(): void {
  console.log("egaux(2,3,3) =", egaux(1, 3, 3));
  console.log("egaux(2,3,3) =", egaux(4, 4, 4));
  console.log("egaux(2,3,3) =", egaux(2, 3, 5));
  console.log("entre(2,3,3) =", entre(2, 1, 3));
  console.log("entre(2,3,3) =", entre(2, 7, 3));
  console.log("entre(2,3,3) =", entre(6, 3, 3));
  console.log("estPair(2) =", estPair(2));
  console.log("estPair(8) =", estPair(8));
  console.log("estPair(9) =", estPair(9));
}
main();
