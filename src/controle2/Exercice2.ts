// Question 1 enlèveEspacesDébutFin
function enlèveEspacesDébutFin(chaine: string): string {
  let espace = " ";
  for (let c of chaine) {
    if (c === espace) {
      chaine = chaine.trim();
    }
  }
  return chaine;
}

// Question 2 nombre de mots
function nombreMots(chaine: string): number {
  let espace = " ";
  let nombre = 0;
  for (let c of chaine) {
    if (c === espace) {
      nombre++;
    }
  }
  return nombre;
}
// Question 3 validation
function validation(chaine: string): string {
  let valide = nombreMots(chaine);
  if (valide > 1 && valide < 10) {
    return "Votre message de " + valide + " mots a bien été envoyé";
  } else {
    return "Votre message est trop long, il contient " + valide + " caractères";
  }
  return chaine;
}

// Main2
function main2(): void {
  console.log(enlèveEspacesDébutFin("Bonjour ")); // returne "Bonjour"
  console.log(enlèveEspacesDébutFin("    Bonjour ")); // retourne `"Bonjour"`
  console.log(enlèveEspacesDébutFin("Bonjour  le  monde")); // retourne `"Bonjour le  monde"`
  console.log(nombreMots("J’aurai une bonne note. ")); // retourne 4
  console.log(nombreMots(" Cool !")); // retourne 1
  console.log(validation("J’aurai une bonne note. "));
  console.log(
    validation(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod âtempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis auteirure dolor inreprehenderit in voluptate veli "
    )
  );
}

main2();
