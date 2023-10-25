function saisie(): void {
  let reponse = Number(prompt("Entrer un nombre entre 0 et 20:"));
  // while (!(reponse >= 0 && reponse <= 20 ))
  while (reponse < 0 || reponse > 20) {
    console.log("Veuillez entrer un nombre valable, please !");
    reponse = Number(prompt("Entrer un nombre entre 0 et 20:"));
  }
  console.log("Ok, bravo !", reponse);
}

saisie();
