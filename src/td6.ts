function pair(n: number): void {
  let nombresPairs = new Array<number>();

  for (let i = 0; i < n; i++) {
    let nombre = Number(prompt("Entrez un nombre : "));

    if (nombre % 2 === 0) {
      nombresPairs.push(nombre);
    }
  }

  for (let v of nombresPairs) {
    console.log(v);
  }
}

function ajouterUn(t: Array<number>): void {
  for (let i = 0; i < t.length; i++) {
    t[i] = t[i] + 1;
  }
}

function plusUn(t: Array<number>): Array<number> {
  let t2 = new Array<number>();

  for (let e of t) {
    t2.push(e + 1);
  }

  return t2;
}

function rotation(t: Array<number>): void {
  let aux = t[t.length - 1];

  for (let i = t.length - 1; i >= 1; i--) {
    t[i] = t[i - 1];
  }

  t[0] = aux;
}

function inverse(t: Array<number>): void {
  for (let i = 0; i < Math.floor(t.length / 2); i++) {
    let aux = t[i];
    t[i] = t[t.length - 1 - i];
    t[t.length - 1 - i] = aux;
  }
}

function randInt(inf: number, sup: number): number {
  return Math.floor(Math.random() * (sup - inf + 1) + inf);
}

function compteurTirage(nbTirages: number): Array<number> {
  let compteur = new Array<number>();

  for (let i = 0; i < 12; i++) compteur.push(0);

  for (let i = 0; i < nbTirages; i++) {
    let tirage = randInt(1, 6) + randInt(1, 6);
    compteur[tirage] = compteur[tirage] + 1;
  }

  return compteur;
}

function histogramme(t: Array<number>): void {
  for (let i = 2; i <= 12; i++) {
    let ligne = "";

    for (let j = 0; j < Math.floor(t[i] / 100) + 1; j++) {
      ligne += "*";
    }

    console.log(ligne);
  }
}

function main(): void {
  let x = [1, 2, 3, 4, 5];
  let y = plusUn(x);
  console.log(y);
}
