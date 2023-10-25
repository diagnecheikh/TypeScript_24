function main(): void {
  const a = Number(prompt("Entrer un nombre plus grand que 100 : "));
  const b = Number(prompt("Entrer un nombre plus petit que 10 : "));

  let quotient = Math.floor(a / b);
  console.log(
    "On peut multiplier",
    b,
    "par",
    quotient,
    "au maximum  avant de dépasser",
    a,
    "le plus grand nombre",
  );
}
main();
