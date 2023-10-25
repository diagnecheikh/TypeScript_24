function nombre(): boolean {
  const x = Number(prompt("Entrer un nombre : "));
  const y = Number(prompt("Entrer un nombre : "));
  if (x > 0 && y > 0) {
    return true;
  } else if (x < 0 && y < 0) {
    return true;
  } else {
    return false;
  }
}
function main(): void {
  console.log("X et Y ont du meme signe =", nombre());
}
main();
