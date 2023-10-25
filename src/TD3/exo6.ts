function checkFermat(a: number, b: number, c: number, n: number): void {
  if (n >= 2 && a ** 2 + b ** n == c ** n) {
    console.log("Fermat avait tort");
  } else {
    console.log("Cela ne marche pas");
  }
}
checkFermat(4, 3, 7, 2);
