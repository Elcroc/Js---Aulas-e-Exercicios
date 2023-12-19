let varA = 'A';
let varB = 'B';
let varC = 'C';

let varX;
varX = varC;
varC = varA
varA = varB
varB = varX

//[varA,varB,varC] = [varB,varC,varA]

console.log(varA,varB,varC);