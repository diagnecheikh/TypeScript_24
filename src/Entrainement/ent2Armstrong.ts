function unité(n: number): number {
  return Math.floor(n % 10);
}

function dizaine(n: number): number {
  let res = Math.floor(n / 10);
  return Math.floor(res / unité(n));
}

function centaine(n: number): number {
  let res = Math.floor(n / 100);
  return Math.floor(res % unité(n));
}

function estArmstrong(n: number): boolean {
  let vérifie = false;
  let a = unité(n);
  let b = dizaine(n);
  let c = centaine(n);
  if (n !== a || n !== b || n !== c) {
    return vérifie;
  } else {
    return !vérifie;
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
  console.log("estArmstrong(153) =", estArmstrong(153));
}

main();
