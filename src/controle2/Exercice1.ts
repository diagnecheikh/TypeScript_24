// Occurrences
function nombreOccurrences(v: number, t: Array<number>): number {
  let nombre = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === v) {
      //console.log("t[i] = " + t[i]);
      nombre++;
    }
  }
  return nombre;
}
// Carrés
function carrés(t: Array<number>): Array<number> {
  let t2 = new Array<number>();
  for (let i = 0; i < t.length; i++) {
    t2.push(t[i] * t[i]);
  }
  return t2;
}

// Filtrage

function filtrage(t: Array<number>, v: number): Array<number> {
  let tab = new Array<number>();
  for (let i = 0; i < t.length; i++) {
    if (t[i] > 0 && t[i] !== v) {
      tab.push(t[i]);
    }
  }
  return tab;
}
//Moyenne
function moyenne(tab1: Array<number>, tab2: Array<number>): number {
  let somme = 0;
  let moyenne = 0;
  for (let i = 0; i < tab1.length; i++) {
    somme += tab1[i];
  }
  for (let i = 0; i < tab2.length; i++) {
    somme += tab2[i];
  }
  moyenne = somme / (tab1.length + tab2.length);
  return moyenne;
}
// Nombre d'occurences version 2

function nombreOccurrences2(aCompter: Array<number>, t: Array<number>): string {
  let caractere = "";
  let nombre = 0;
  for (let i = 0; i < aCompter.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (aCompter[i] === t[j]) {
        nombre++;
      }
    }
    caractere += nombre + " + ";
    nombre = 0;
  }
  return caractere;
}
// Main
function main(): void {
  console.log(
    "nombreOccurrences(2, [1, 2, 3, 2, 4, 2, 5]) = ",
    nombreOccurrences(2, [1, 2, 3, 2, 4, 2, 5])
  ); // retourn 3
  console.log(
    "nombreOccurrences(2, [1, 3, 4, 5]) = ",
    nombreOccurrences(2, [1, 3, 4, 5])
  ); // retourn 0
  console.log("carrés([1, 2, 3, 4, 5]) = ", carrés([1, 2, 3, 4, 5]));
  console.log(
    "filtrage([1, 2, 3, 2, 4, 2, 5], 2)) = ",
    filtrage([1, 2, 3, 2, 4, 2, 5], 2)
  );
  console.log(
    "moyenne([1, 2, 3], [4, 5, 6]) = ",
    moyenne([1, 2, 3], [4, 5, 6])
  );
  console.log(
    "nombreOccurrences2([4, 2, 7], [4, 2, 6, 2, 2, 5, 4])=",
    nombreOccurrences2([4, 2, 7], [4, 2, 6, 2, 2, 5, 4])
  );
}
main();
