function permutation(): void {
  let a = 2;
  let b = 11;
  let c = 9;
  let d = a;
  a = b; // b passe dans a donc a = 11
  b = c; // c passe dans b donc b = 9
  c = d; // a passe dans c donc c = 2

  console.log(
    "La valeur de a = ",
    a,
    "\nLa valeur de b = ",
    b,
    "\nLa valeur de c = ",
    c,
  );
}
permutation();
