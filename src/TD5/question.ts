// Question 1
function estBase(b: string): string {
  return "A" || "C" || "G" || "T";
}
function estADN(chaine: string): boolean {
  for (let c of chaine) {
    if (!estBase(c)) {
      return false;
    }
  }
  return true;
}
console.log("Question 1");
console.log(estADN("ACGGUAGCUAGUUUCGACUGGAGGGGUA"));

// Questions 2

function ADNàARN(chaine: string): string {
  let x = "";
  for (let c of chaine) {
    if (c === "T") {
      x += "U"; // X === U
    } else {
      x += c;
    }
  }
  return x;
}
console.log("\nQuestion 2");
console.log(ADNàARN("ACGGTAGCTAGTTTCGACTGGAGGGGTA"));
// QUESTION 3

function baseComplémentaire(base: string): string {
  if (base === "A") return "T";
  else if (base === "T") return "A";
  else if (base === "G") return "C";
  else if (base === "C") return "G";
  else return "";
}
console.log("\nQuestion 3");
console.log(baseComplémentaire("A"));
console.log(baseComplémentaire("T"));
console.log(baseComplémentaire("G"));
console.log(baseComplémentaire("C"));

function seqComplementaireInversée(seq: string): string {
  let nv = "";
  for (let i = seq.length - 1; i >= 0; i--) {
    console.log(seq[i], "=", i);
    nv += baseComplémentaire(seq);
  }
  return seq;
}
seqComplementaireInversée("ACGT");
