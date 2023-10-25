function randint(inf: number, sup: number): number {
  return Math.floor(Math.random() * (sup - inf) + inf);
}

function comptage(n: number): void {
  let cptNegatif = 0;
  let cptPositif = 0;
  for (let i = 0; i < n; i++) {
    let r = randint(-10, 10);
    console.log(r);
    if (r >= 0) {
      cptPositif++;
    } else {
      cptNegatif++;
    }
  }
  console.log("Nombre de valeur positifs :", cptPositif);
  console.log("Nombre de valeur negatifs :", cptNegatif);
}
comptage(8);

function accumulationSystematique(n: number): void {
  let a = 0;
  for (let i = 0; i < n; i++) {
    let r = randint(-10, 10);
    console.log(r);
    let s = a + r;
    console.log("La somme des entiers générés = ", s);
  }
}
accumulationSystematique(5);
