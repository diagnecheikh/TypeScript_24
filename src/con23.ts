function gain(mise: number, r1: number, r2: number, r3: number): number {
    if (r1 === 1 && r2 === 1 && r3 === 1) {
        return mise * 250;
    } else if (r1 === 2 && r2 === 2 && r3 === 2) {
        return mise * 150;
    } else if ((r1 === 1 && r2 === 1) || (r2 === 1 && r3 === 1) || (r1 === 1 && r3 === 1)) {
        return mise * 5;
    } else if (r1 === 1 || r2 === 1 || r3 === 1) {
        return mise * 2;
    } else {
        return 0;
    }
}

// Exemples d'utilisation de la fonction
console.log(gain(2, 1, 1, 1)); // Renvoie 500
console.log(gain(5, 2, 2, 2)); // Renvoie 750
console.log(gain(10, 3, 1, 1)); // Renvoie 50
console.log(gain(20, 2, 1, 3)); // Renvoie 40
console.log(gain(50, 2, 3, 2)); // Renvoie 0



