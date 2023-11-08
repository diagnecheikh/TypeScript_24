function gain(
  mise: number,
  symbole1: number,
  symbole2: number,
  symbole3: number,
): number {
  if (symbole1 === 1 && symbole2 === 1 && symbole3 === 1) {
    return mise * 250;
  } else if (symbole1 === 2 && symbole2 === 2 && symbole3 === 2) {
    return mise * 150;
  } else if (
    symbole1 === 1 && symbole2 === 1 || symbole1 === 1 && symbole3 === 1 ||
    symbole2 === 1 && symbole3 === 1
  ) {
    return mise * 5;
  } else if (symbole1 === 1 || symbole2 === 1 || symbole3 === 1) {
    return mise * 2;
  } else {
    return mise * 0;
  }
}

function main(): void {
  console.log(gain(10, 1, 1, 1)); // retourne 2500
  console.log(gain(5, 2, 2, 2)); //  retourne 750
  console.log(gain(10, 1, 3, 1)); // retourne 50
  console.log(gain(20, 2, 3, 1)); // retourne 40
  console.log(gain(50, 2, 3, 2)); // retourne 0
}
main();
