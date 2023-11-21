function entre(x: number, a: number, b: number): boolean {
  return a <= x && x <= b;
}

function présent(x: number, t: Array<number>, idx: number): boolean {
  for (let i = idx; i < t.length; i++) {
    if (x === t[i]) return true;
  }

  return false;
}

function estPermutation(t: Array<number>): boolean {
  for (let i = 0; i < t.length; i++) {
    if (!entre(t[i], 0, t.length - 1) || présent(t[i], t, i + 1)) return false;
  }

  return true;
}

function estPermutationV2(t: Array<number>): boolean {
  let présent = new Array<boolean>();

  for (const _ of t) présent.push(false);

  for (let e of t) {
    if (!entre(e, 0, t.length - 1) || présent[e]) return false;
    else présent[e] = true;
  }

  return true;
}

function permute(positions: Array<number>, chaine: string): string {
  let résultat = "";

  for (let e of positions) {
    résultat = résultat + chaine[e];
  }

  return résultat;
}

function indice(chaine: string, caractere: string): number {
  for (let i = 0; i < chaine.length; i++) {
    if (chaine[i] === caractere) return i;
  }

  return -1;
}

function cherchePermutation(s1: string, s2: string): Array<number> {
  let positions = new Array<number>();

  for (let i = 0; i < s1.length; i++) {
    positions.push(indice(s1, s2[i]));
  }

  return positions;
}

function main(): void {
  console.log(cherchePermutation("chien", "niche"));
  console.log(estPermutation([0, 1, 2, 3, 4]));
  console.log(estPermutationV2([0, 1, 2, 3, 4]));
}

main();
