function pieces(val10: number, val5: number, val2: number, val1: number): void {
  let somDonnee = Number(prompt("Entrer une somme : "));
  let montAchat = Number(prompt("Entrer une somme : "));

  let montRendu = somDonnee - montAchat;
  console.log("La somme qu'on doit rendre est : ", montRendu);

  let piece10 = 0;
  let piece5 = 0;
  let piece2 = 0;
  let piece1 = 0;

  while (montRendu >= val10) {
    piece10++;
    montRendu -= val10;
  }
  if (piece10 > 0) {
    console.log(
      "On peut rendre",
      piece10,
      "pièces de valeurs",
      val10,
      "unités",
    );
  }
  while (montRendu >= val5) {
    piece5++;
    montRendu -= val5;
  }
  if (piece10 > 0) {
    console.log("On peut rendre", piece5, "pièces de valeurs", val5, "unités");
  }
}
pieces(10, 5, 2, 1);
