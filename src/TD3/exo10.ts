function monnaie(
  montant: number,
  nbP10Max: number,
  nbP5Max: number,
  nbP2Max: number,
  nbP1Max: number,
): void {
  let somDonnee = Number(prompt("Entrer une somme :"));

  let montRendu = somDonnee - montant;
  console.log("La somme qu'on doit rendre est : ", montRendu);
  if (montRendu / 10 > nbP10Max) {
    let piece10 = 0;
    piece10++;
  }
}
monnaie(1400, 10, 5, 2, 1);
