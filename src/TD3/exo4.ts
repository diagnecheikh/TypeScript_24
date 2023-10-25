function valNum(): boolean {
  const a = Number(prompt("Entrer un nombre a = "));
  const b = Number(prompt("Entrer un nombre b = "));
  const c = Number(prompt("Entrer un nombre c = "));
  if (a < b && a < c) {
    return true;
  } else if (b > a && b < c) {
    return true;
  } else if (c > b && c > a) {
    return true;
  } else {
    return false;
  }
}
function main(): void {
  console.log("a < b < c =", valNum());
}
main();
