function écrire(...args: string[]): void {
  Deno.stdout.writeSync(new TextEncoder().encode(args.join(" ")));
}
function randInt(inf: number, sup: number): number {
  return Math.floor(Math.random() * (sup - inf + 1)) + inf;
}

function comptage(n: number): void {
  let cptPositif = 0;
  let cptNegatif = 0;

  for (let i = 0; i < n; i++) {
    let r = randInt(-10, 10);

    if (r >= 0) {
      cptPositif = cptPositif + 1;
    } else {
      cptNegatif = cptNegatif + 1;
    }
  }

  console.log("Nombre de valeurs positives : " + cptPositif);
  console.log("Nombre de valeurs négatives : " + cptNegatif);
}

// somme
function accumulationSystematique(n: number): number {
  let res = 0;

  for (let i = 0; i < n; i++) {
    let r = randInt(-10, 10);

    res = res + r;
  }

  return res;
}

// produit
function accumulationSelective(n: number): number {
  let res = 1;

  for (let i = 0; i < n; i++) {
    let r = randInt(-10, 10);

    if (r > 0) {
      res = res * r;
    }
  }

  return res;
}

// n >= 1
function maximum(n: number, a: number, b: number): number {
  let res = randInt(a, b);

  for (let i = 1; i < n; ++i) {
    let r = randInt(a, b);

    if (r > res) {
      res = r;
    }
  }

  return res;
}

function minimum(n: number, a: number, b: number): number {
  let res = randInt(a, b);

  for (let i = 1; i < n; ++i) {
    let r = randInt(a, b);

    if (r < res) {
      res = r;
    }
  }

  return res;
}

function afficheCarré(n: number): void {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) { // affichage d'une ligne
      écrire("O");
    }
    écrire("\n");
  }
}

function afficheDiagonale(n: number): void {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) { // affichage d'une ligne
      if (i === j) {
        écrire("X");
      } else {
        écrire("O");
      }
    }
  }
  écrire("\n");
}

function afficheTriangle(n: number): void {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) { // affichage d'une ligne
      écrire("O");
    }
    écrire("\n");
  }
}

function sommeCarré(n: number): void {
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= i; j++) {
      for (let k = i + 1; k <= n; k++) {
        if (i ** 2 + j ** 2 === k ** 2) {
          console.log(i + "² + " + j + "² = " + k + "²");
        }
      }
    }
  }
}

function saisie(): number {
  let réponse = Number(prompt("Entre un nombre entre 0 et 20 :"));

  // while (!(réponse >= 0 && réponse <= 20))
  while (réponse < 0 || réponse > 20) {
    console.log("Votre nombre n'est pas valable");
    réponse = Number(prompt("Entrez un nombre entre 0 et 20 : "));
  }

  return réponse;
}

function saisieEtStatistique(): void {
  let sommeNégatif = 0, compteurNégatif = 0;
  let sommePositif = 0, compteurPositif = 0;
  let réponse = Number(prompt("Entrez un nombre :"));
  let maximum = réponse;
  let minimum = réponse;

  if (réponse < 0) {
    sommeNégatif = sommeNégatif + réponse;
    compteurNégatif = compteurNégatif + 1;
  } else if (réponse > 0) {
    sommePositif = sommePositif + réponse;
    compteurPositif = compteurPositif + 1;
  }

  while (réponse !== 0) {
    réponse = Number(prompt("Entrez un nombre :"));

    if (réponse < 0) {
      sommeNégatif = sommeNégatif + réponse;
      compteurNégatif = compteurNégatif + 1;
    } else if (réponse > 0) {
      sommePositif = sommePositif + réponse;
      compteurPositif = compteurPositif + 1;
    }

    if (réponse !== 0 && réponse < minimum) {
      minimum = réponse;
    } else if (réponse !== 0 && réponse > maximum) {
      maximum = réponse;
    }
  }

  console.log("Somme des négatifs :", sommeNégatif);
  if (compteurNégatif > 0) {
    console.log("Moyenne des négatifs :", sommeNégatif / compteurNégatif);
  }
  console.log("Somme des positifs :", sommePositif);
  if (compteurPositif > 0) {
    console.log("Moyenne des positifs :", sommePositif / compteurPositif);
  }
  console.log("maximum =", maximum);
  console.log("minimum =", minimum);
}

function chiffreDroit(n: number): number {
  return n % 10;
}

function popDroit(n: number): number {
  return Math.floor(n / 10);
}

function somme(n: number): number {
  let res = 0;

  while (n !== 0) {
    res = res + chiffreDroit(n);

    n = popDroit(n);
  }

  return res;
}

function pushDroit(n: number, c: number): number {
  return n * 10 + c;
}

function miroir(n: number): number {
  let res = 0;

  while (n > 0) {
    // traitement

    n = popDroit(n);
  }

  return res;
}
