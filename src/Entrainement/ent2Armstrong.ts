function unité(n: number): number {
  return n % 10;
}
function dizaine(n: number): number {
  let res = Math.floor(n / 10);
  return Math.floor(res / unité(n));
}

/* function centaine(n: number): number {
  return Math.floor(n / 100);
}
 */
function centaine(n: number): number {
  return Math.floor(n / 100);
}

function estArmstrong(n: number): boolean {
  if (unité(n) !== 0) {
    return true;
  } else {
    return false;
  }
}

function main(): void {
  console.log("unité(153) =", unité(153));
  console.log("unité(8) =", unité(8));
  console.log("dizaine(153)) =", dizaine(153));
  console.log("dizaine(8) =", dizaine(8));
  console.log("centaine(153) =", centaine(153));
  console.log("estArmstrong(8) =", centaine(8));
  console.log("estArmstrong(8) =", estArmstrong(8));
  console.log("estArmstrong(456) =", estArmstrong(153));
}

main();
