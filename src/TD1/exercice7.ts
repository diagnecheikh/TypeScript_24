function livreKG(livres: number): void {
  const poids = Number(prompt("Entrer un poids en kilogramme : "));
  console.log(`Afficher le poids en Kg : ${poids * livres}`);
}

livreKG(2.204);
