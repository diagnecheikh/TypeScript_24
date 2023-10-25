function prix(htaxe: number): void {
  /* const TVA = 0.196;
  const prixTTC = Math.round(htaxe * (1 + TVA));
  console.log("Le prix TTC =", prixTTC); */

  const montTTC = Number(prompt("Entrer un montant ="));

  if (montTTC < 1000) {
    console.log("Vous avez obtenu une remise de 0%");
    let remise0 = 0;
    let montRemise = montTTC * remise0;
    let nMontTTC = montTTC - montRemise;
    console.log("Nouveau montant TTC =", nMontTTC);
  } else if (montTTC < 2000) {
    console.log("Vous avez obtenu une remise de 1%");
    let remise1 = 0.01;
    let montRemise = montTTC * remise1;
    let nMontTTC = montTTC - montRemise;
    console.log("Nouveau montant TTC =", nMontTTC);
  } else if (montTTC < 5000) {
    console.log("Vous avez obtenu une remise de 2%");
    let remise1 = 0.02;
    let montRemise = montTTC * remise1;
    let nMontTTC = montTTC - montRemise;
    console.log("Nouveau montant TTC =", nMontTTC);
  } else {
    console.log("Vous avez obtenu une remise de 5%");
    let remise1 = 0.05;
    let montRemise = montTTC * remise1;
    let nMontTTC = montTTC - montRemise;
    console.log("Nouveau montant TTC =", nMontTTC);
  }
}
prix(836);
