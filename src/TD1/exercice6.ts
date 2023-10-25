function nombreJours(): void {
  const jour = Number(prompt("Donne un nombre de jours : "));
  const heures = jour * 24;
  const minutes = heures * 60;
  const secondes = minutes * 60;

  console.log(
    `Dans ${jour} jours, il y'a ${heures} heures, ${minutes} minutes et ${secondes} secondes`,
  );
}
nombreJours();
