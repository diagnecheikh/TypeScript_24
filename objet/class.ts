class Point {
  x = 0;
  y = 0;
}

class Cercle {
  centre = new Point();
  rayon = 0;
}

function distance(p1: Point, p2: Point): number {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function pointDansCercle(c: Cercle, p: Point): boolean {
  return distance(c.centre, p) <= c.rayon;
}

class Rectangle {
  hautGauche = new Point();
  longueur = 0;
  largeur = 0;
}

function décalage(p: Point, dx: number, dy: number): Point {
  let p2 = new Point();

  p2.x = p.x + dx;
  p2.y = p.y + dy;

  return p2;
}

function rectangleDansCercle(c: Cercle, r: Rectangle): boolean {
  // Calculer les 4 autres coins du rectangle
  let hautDroit = décalage(r.hautGauche, r.longueur, 0);
  let basDroit = décalage(r.hautGauche, r.longueur, r.largeur);
  let basGauche = décalage(r.hautGauche, 0, r.largeur);

  // vérifier que tous les coins sont dans le cercle
  return (
    pointDansCercle(c, r.hautGauche) &&
    pointDansCercle(c, hautDroit) &&
    pointDansCercle(c, basDroit) &&
    pointDansCercle(c, basGauche)
  );
}
// Exo 4
function chevauchement(c: Cercle, r: Rectangle): boolean {
  // Calculer les 4 autres coins du rectangle
  let hautDroit = décalage(r.hautGauche, r.longueur, 0);
  let basDroit = décalage(r.hautGauche, r.longueur, r.largeur);
  let basGauche = décalage(r.hautGauche, 0, r.largeur);

  // vérifier que tous les coins sont dans le cercle
  return (
    pointDansCercle(c, r.hautGauche) ||
    pointDansCercle(c, hautDroit) ||
    pointDansCercle(c, basDroit) ||
    pointDansCercle(c, basGauche)
  );
}

let cercle = new Cercle();
cercle.centre.x = 150;
cercle.centre.y = 100;
cercle.rayon = 50;

let p = new Point();
p.x = 100;
p.y = 100;

// Exo 5
function main(): void {
  console.log(pointDansCercle(cercle, p));
}
main();
