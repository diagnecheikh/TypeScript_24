function triangle(): boolean {
  const long1 = Number(prompt("Entrer le premier longueur ="));
  const long2 = Number(prompt("Entrer le deuxième longueur ="));
  const long3 = Number(prompt("Entrer le troiième longueur ="));

  if (long1 > long2 + long3) {
    return false;
  } else if (long2 > long1 + long3) {
    return false;
  } else if (long3 > long1 + long2) {
    return false;
  } else {
    return true;
  }
}
function main(): void {
  console.log("On peut former un triangle avec les trois batons =", triangle());
}
main();
