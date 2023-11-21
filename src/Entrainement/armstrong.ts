function unité(n: number): number {
  return n % 10;
}

function dizaine(n: number): number {
  return unité(Math.floor(n / 10));
}

function centaine(n: number): number {
  return unité(Math.floor(n / 100));
}

function estArmstrong(n: number): boolean {
  return n ===
    Math.pow(unité(n), 3) + Math.pow(dizaine(n), 3) + Math.pow(centaine(n), 3);
}

function nbreArmstrong(): Array<number> {
  let nbre = new Array<number>();

  for (let i = 0; i < 999; i++) {
    if (estArmstrong(i)) nbre.push(i);
  }

  return nbre;
}
nbreArmstrong();
