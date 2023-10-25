function écrire(...args: string[]): void {
  Deno.stdout.writeSync(new TextEncoder().encode(args.join(" ")));
}

/* function afficheCarrée(n: number): void {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      écrire("O");
    }
    écrire("\n");
  }
}
afficheCarrée(5); */

/* function afficheDiagonale(n: number): void {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        écrire("X");
      } else {
        écrire("O");
      }
    }
    écrire("\n");
  }
}
afficheDiagonale(5); */

/* function afficheTriangle(n: number): void {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n; j++) {
      écrire("O");
      if (i === j) {
        écrire("O");
  }
      } else {
        écrire("O");
      }
    }
    écrire("\n");
  }
}
afficheTriangle(5); */

function sommeCarré(n: number): void {
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= i; j++) {
      for (let k = i + 1; k <= n; k++) {
        if (i ** 2 + j ** 2 === k ** 2) {
          console.log(i + "," + j + "," + k);
        }
      }
    }
  }
}
sommeCarré(27);
