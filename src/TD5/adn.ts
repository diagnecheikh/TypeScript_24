function estBase(c: string): boolean {
  return c === "A" || c === "C" || c === "G" || c === "T";
}

function estADN(seq: string): boolean {
  for (let c of seq) {
    if (!estBase(c)) return false;
  }

  return true;
}

function transcrit(seqADN: string): string {
  let seqARN = "";

  for (let c of seqADN) {
    if (c === "T") {
      seqARN += "U";
    } else {
      seqARN += c;
    }
  }

  return seqARN;
}

function baseComplémentaire(base: string): string {
  if (base === "A") return "T";
  else if (base === "T") return "A";
  else if (base === "C") return "G";
  else if (base === "G") return "C";
  else return "";
}

function seqCompInv(seq: string): string {
  let res = "";

  for (let c of seq) {
    res = baseComplémentaire(c) + res;
  }

  return res;
}

function seqCompInvV2(seq: string): string {
  let res = "";

  for (let i = seq.length - 1; i >= 0; i--) {
    res += baseComplémentaire(seq[i]);
  }

  return res;
}

function nbreOccCodon(codon: string, seq: string): number {
  let compteur = 0;

  for (let i = 0; i < seq.length; i += 3) {
    if (
      seq[i] === codon[0] && seq[i + 1] === codon[1] && seq[i + 2] === codon[2]
    ) {
      compteur++;
    }
  }

  return compteur;
}

function main(): void {
  let seqADN = prompt("Entre une séquence ADN : ")!;

  if (estADN(seqADN)) {
    let codon = prompt("Entre un codon : ")!;
    console.log();

    let seqCI = seqCompInv(seqADN);
    let seqARN = transcrit(seqADN);

    console.log("Séquence complémentaire inversée :", seqCI);
    console.log("Séquence ARN :", seqARN);
    console.log(
      "Le codon",
      codon,
      "apparaît",
      nbreOccCodon(codon, seqADN),
      "fois dans la séquence ADN.",
    );
  } else {
    console.log("\nSéquence ADN erronée !!!");
  }
}
