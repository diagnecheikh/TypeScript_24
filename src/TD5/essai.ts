let prenom = "George";
console.log("Parcourir de 0 vers la fin");
for (let i = 0; i < prenom.length; i++) {
  console.log(prenom[i]);
}

console.log("\nde la fin vers 0");
for (let i = prenom.length - 1; i >= 0; i--) {
  prenom[i];
  console.log(prenom[i]);
}
