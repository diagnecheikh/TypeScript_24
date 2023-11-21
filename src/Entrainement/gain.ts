function gain(
  mise: number,
  symbole1: number,
  symbole2: number,
  symbole3: number,
): number {
  let multiplicateur = 0;

  if (symbole1 === 1 && symbole2 === 1 && symbole3 === 1) {
    multiplicateur = 250;
  } else if (symbole1 === 2 && symbole2 === 2 && symbole3 === 2) {
    multiplicateur = 150;
  } else if (
    (symbole1 === 1 && symbole2 === 1) || (symbole1 === 1 && symbole3 === 1) ||
    (symbole2 === 1 && symbole3 === 1)
  ) {
    multiplicateur = 5;
  } else if (symbole1 === 1 || symbole2 === 1 || symbole3 === 1) {
    multiplicateur = 2;
  }

  return mise * multiplicateur;
}
