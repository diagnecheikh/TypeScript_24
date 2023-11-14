function estPermutation(t: Array<number>): Array<boolean> {
  let tb = new Array<boolean>();
  for (let i = 0; i < t.length; i++) {
    tb.push(false);
  }
  return tb;
}

function main(): void {
  console.log(estPermutation([1, 2, 3, 4]));
}
main();
