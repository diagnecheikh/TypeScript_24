function afficherMenu(): number {
  console.log("Entrez 1 ou 2 :");
  let number = Number(prompt("Entrez 1 ou 2 :"));
  if (number !== 1 && number! == 2) {
    console.log("Erreur entrer 1 ou 2");
    return number;
  } else {
    console.log("Erreur entrer 1 ou 2");
    return number;
  }
}

function sommeNombre(): number {
  if (afficherMenu() === 1) {
    let nombre1 = Math.floor(Math.random() * 16) + 5;
    let nombre2 = Math.floor(Math.random() * 16) + 5;
    let sommeAttendue = nombre1 + nombre2;
    return sommeAttendue;
  }
  return sommeNombre();
}

function differenceNombre(): number {
  if (afficherMenu() === 2) {
    let nombre1 = Math.floor(Math.random() * 26) + 25;
    let nombre2 = Math.floor(Math.random() * 25) + 1;
    let differenceAttendue = nombre1 - nombre2;
    return differenceAttendue;
  }
  return differenceNombre();
}
function reponseUtilsateur(): number {
  let reponse = Number(prompt("Entrez votre réponse :"));
  if (reponse !== sommeNombre() || reponse !== differenceNombre()) {
    return reponseUtilsateur();
  }
  return reponse;
}
function main(): void {
  let correct = afficherMenu();
  if (correct === 1) {
    let reponse = reponseUtilsateur();
    if (reponse === sommeNombre()) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
    }
  }
}
main();
