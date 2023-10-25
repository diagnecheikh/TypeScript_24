function interval1(x: number): boolean {
  if (x >= -1 && 3 >= x) {
    return true;
  }
  return false;
}
function interval2(x: number): boolean {
  if (x > -1 && 3 >= x) {
    return true;
  }
  return false;
}
function interval3(x: number): boolean {
  if (x < -1 && 3 > x || x >= 8 && 10 >= x) {
    return true;
  }
  return false;
}
function interval4(x: number): boolean {
  if (x > -1 && 3 > x || 8 <= x) {
    return true;
  }
  return false;
}
function main(): void {
  console.log(
    "Est-ce que X appartient à l'ensemble I1 = [-1; 3] = ",
    interval1(4),
  );
  console.log(
    "Est-ce que X appartient à l'ensemble I2 = ]-1; 3] = ",
    interval2(3),
  );
  console.log(
    "Est-ce que X appartient à l'ensemble I3 = ]-1; 3] U [8; 10] = ",
    interval3(7),
  );
  console.log(
    "Est-ce que X appartient à l'ensemble I4 = ]-1; 3] U [8; +∞[ = ",
    interval4(0),
  );
}
main();
