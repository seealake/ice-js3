const consonants = ["b", "n", "n", "s"];
let output;

// make the program print bananas
// your code here
consonants.splice(1, 0, "a");
consonants.splice(3, 0, "a");
consonants.push("a");
consonants.push("s");
output = consonants.join("");
console.log(output);
