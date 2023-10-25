function annéeBissextile(année: number): boolean {
  if ((année % 4 === 0 && année % 100 != 0) || année % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
function main(): void {
  console.log("2000 est une année bissectile =", annéeBissextile(2000));
  console.log("2007 est une année bissectile =", annéeBissextile(2007));
  console.log("2023 est une année bissectile =", annéeBissextile(2023));
}
main();
