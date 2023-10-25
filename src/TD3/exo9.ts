function annéeBissextile(année: number): boolean {
  if ((année % 4 === 0 && année % 100 != 0) || année % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

function dateJour(jour: number, mois: number, année: number): number {
  if (
    (mois === 1 || mois === 3 || mois === 5 || mois === 7 || mois === 8 ||
    mois === 10 || mois === 12) && (jour >31)
  ) {
    return 31;
  } else if (mois === 2 && annéeBissextile(année)) {
    return 29;
  } else if (mois === 2){
    return 28;
  } else return 30;


}

functionn jourSuivant(jour: number, mois: number, année: number):void {
  jour = jour + 1;
  if( jour > dateJour(mois, année)){
    mois = mois + 1;
    jour = 1;
  } if(){
    année = année + 1;
    mois = 1;
  }
 console.log(jour, "/")
}


