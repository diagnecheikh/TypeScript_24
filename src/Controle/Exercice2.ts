function cacheMot(chaine: string): string {
  let tirets = "-";
  for (let i = 0; i < chaine.length - 1; i++) {
    tirets += "-";
    console.log(tirets);
  }
  return chaine;
}
function revele(chaine: string, mot: string, lettre: string): string {
  let devine = prompt("Entrer le mot déviner");
  return revele(chaine, mot, lettre);
}
function main(): void {
  console.log(cacheMot("petit"));
  console.log(revele("-----", "petit", "e"));
  console.log(revele("-e---", "petit", "a"));
  console.log(revele("-e---", "petit", "t"));
}
