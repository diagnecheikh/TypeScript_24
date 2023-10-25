function ajouterUn(t: Array<number>): Array<number> {
  console.log(t);

  for (let i = 0; i <= t.length - 1; i++) {
    t[i] += 1;
  }
  console.log(t);

  return t;
}

function plusUn(tab: Array<number>): Array<number> {
  let y = ajouterUn(tab);
  for (let e of tab) y.push(e);

  return y;
}

function main(): void {
  console.log(plusUn([1, 2, 3]));
  console.log(ajouterUn([1, 2, 3]));
}
main();
