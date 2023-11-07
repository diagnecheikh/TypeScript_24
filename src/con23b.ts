// Fonction pour afficher le menu
function afficherMenu(): number {
    console.log("1) Addition");
    console.log("2) Soustraction");

    // Simule une réponse de l'utilisateur en générant un nombre aléatoire entre 1 et 2
    return Math.floor(Math.random() * 2) + 1;
}

// Fonction pour vérifier si la réponse de l'utilisateur est correcte pour l'addition
function verifierAddition(): boolean {
    const nombre1 = Math.floor(Math.random() * 16) + 5;
    const nombre2 = Math.floor(Math.random() * 16) + 5;
    const sommeAttendue = nombre1 + nombre2;

    // Simule une réponse de l'utilisateur en générant une réponse aléatoire
    const reponseUtilisateur = Math.floor(Math.random() * 31); // Réponse aléatoire entre 0 et 30

    return reponseUtilisateur === sommeAttendue;
}

// Fonction pour vérifier si la réponse de l'utilisateur est correcte pour la soustraction
function verifierSoustraction(): boolean {
    const nombre1 = Math.floor(Math.random() * 26) + 25;
    const nombre2 = Math.floor(Math.random() * 25) + 1;
    const differenceAttendue = nombre1 - nombre2;

    // Simule une réponse de l'utilisateur en générant une réponse aléatoire
    const reponseUtilisateur = Math.floor(Math.random() * 51); // Réponse aléatoire entre 0 et 50

    return reponseUtilisateur === differenceAttendue;
}

// Fonction pour afficher le résultat
function afficherResultat(estCorrect: boolean) {
    if (estCorrect) {
        console.log("Correct");
    } else {
        console.log("Incorrect");
    }
}

// Fonction principale
function main() {
    const choix = afficherMenu();

    if (choix === 1) {
        const estCorrect = verifierAddition();
        afficherResultat(estCorrect);
    } else {
        const estCorrect = verifierSoustraction();
        afficherResultat(estCorrect);
    }
}

// Appel de la fonction principale
main();
