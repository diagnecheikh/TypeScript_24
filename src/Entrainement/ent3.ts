/* function estPermutation(t: Array<number>): Array<boolean> {
  let tb = new Array<boolean>();
  for (let i = 0; i < t.length; i++) {
    tb.push(false);
  }
  for (let e of t) {
    tb[e] = false;
  }
  /*  if(t[0]===1){

  } */
/*   return tb;
}  */

function estPermutation(t: Array<number>): Array<number> {
  let tb = new Array<number>();
  for (let i of t) {
    tb.push(i + 1);
  }

  /* for (let j = 0; j < tb.length; j++) {
    tb.push(j - 1);

    return tb;
  } */
  return t;
}

function positions(t: Array<number>): Array<string> {
  let chaine = new Array<string>();
  let nouvelleChaine = new Array<string>();
  for (let i in t) {
    chaine.push();
  }
  return chaine;
}

function main(): void {
  console.log(estPermutation([1, 2, 3, 4]));
  console.log(positions([1, 2, 3, 4]));
}
main();
