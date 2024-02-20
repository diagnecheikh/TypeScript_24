//Le dernier nombre devient  le premier
/* function rotation1(tab: Array<number>): Array<number> {
  let temp = tab[tab.length - 1];
  for (let i = tab.length - 1; i > 0; i--) {
    tab[i] = tab[i - 1];
  }
  tab[0] = temp;

  return tab;
}

console.log(rotation1([1, 2, 3, 4, 5]));

// Le premier nombre devient le dernier
function rotation(tab: Array<number>): Array<number> {
  let temp = tab[0];
  {
    for (let i = 0; i < tab.length - 1; i++) {
      tab[i] = tab[i + 1];
    }
  }
  tab[tab.length - 1] = temp;

  return tab;
}

console.log(rotation([1, 2, 3, 4, 5]));

function indices(t: Array<number>, x: number): Array<number> {
  let tab2 = new Array<number>();
  for (let i = 0; i < t.length; i++) {
    if (t[i] === x) {
      tab2.push(i);
      //valeurs.push(t[i]);
    }
  }
  return tab2;
}

console.log(indices([1, 3, 2, 4, 6, 2], 2));
 */

function apparait(
  t1: Array<number>,
  indice: number,
  t2: Array<number>
): boolean {
  // Vérifie si l'indice + la longueur de t2 dépasse la taille de t1
  if (indice + t2.length > t1.length) {
    return false;
  }

  // Vérifie si les éléments de t1 à partir de l'indice correspondent à t2
  for (let i = 0; i < t2.length; i++) {
    if (t1[indice + i] !== t2[i]) {
      return false;
    }
  }

  // Si toutes les conditions sont satisfaites, t2 apparaît à l'indice spécifié dans t1
  return true;
}
// Exemples d'utilisation
console.log(estSousTableau([1, 5, 2, 10, 7], [5, 2, 10])); // true
console.log(estSousTableau([1, 5, 6, 2, 10, 7], [5, 2, 10])); // false
function estSousTableau(t1: Array<number>, t2: Array<number>): boolean {
  // Parcourir tous les indices possibles dans t1
  for (let i = 0; i <= t1.length - t2.length; i++) {
    // Vérifier si t2 apparaît à l'indice actuel i dans t1
    if (apparait(t1, i, t2)) {
      return true;
    }
  }

  // Si aucun sous-tableau n'est trouvé, retourner false
  return false;
}
// Exemples d'utilisation
console.log(apparait([1, 5, 2, 10, 7], 1, [5, 2, 10])); // true
console.log(apparait([1, 5, 2, 10, 7], 0, [5, 2, 10])); // false

function estSousTableauTrie(t1: Array<number>, t2: Array<number>): boolean {
  let index1 = 0;
  let index2 = 0;

  while (index1 < t1.length && index2 < t2.length) {
    if (t1[index1] === t2[index2]) {
      // Correspondance trouvée, passer à l'élément suivant dans t2
      index2++;
    }
    // Passer à l'élément suivant dans t1
    index1++;
  }

  // Si tous les éléments de t2 ont été trouvés, t2 est un sous-tableau de t1
  return index2 === t2.length;
}

// Exemples d'utilisation
console.log(estSousTableauTrie([10, 7, 5, 2, 1], [5, 2, 1])); // true
console.log(estSousTableauTrie([10, 7, 6, 5, 2, 1], [6, 2, 1])); // false



function somme(a: number, b: number): number {
  // Cas de base : si a est égal à 0, retourner b
  if (a === 0) {
    return b;
  }

  // Cas de base : si b est égal à 0, retourner a
  if (b === 0) {
    return a;
  }

  // Cas récursif : appeler la fonction somme avec a décrémenté de 1 et b inchangé
  if (a > 0) {
    return somme(a - 1, b + 1);
  }
  
  // Cas récursif : appeler la fonction somme avec a inchangé et b décrémenté de 1
  return somme(a + 1, b - 1);
}

// Exemple d'utilisation
console.log(somme(3, 5)); // Résultat attendu : 8
