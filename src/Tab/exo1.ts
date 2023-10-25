function nombPairs(n: number): Array<number> {
  let tab = new Array<number>();

  for (let i = 0; i < n; i++) {
    let nombre = Number(prompt("Entrez des nombres entiers :"));

    if (nombre % 2 === 0) {
      tab.push(nombre);
    }
  }
  return tab;
}
function main(): void {
  console.log("Nombre pairs = ", nombPairs(5));
}
main();
