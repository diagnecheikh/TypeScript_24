function rotation(tab: Array<number>): Array<number> {
  console.log(tab);
  // let sav = tab[(tab.length + 1) - tab.length];
  let save = tab[tab.length - 1];
  for (let i = tab.length - 1; i >= 1; i--) {
    tab[i] = tab[i - 1];
    // tab[i]= tab[i + 1]; Si on veut parcourir d'arrière vers la droite
  }
  tab[0] = save;
  console.log(tab);

  return tab;
}

rotation([23, 28, 6, 49]);
