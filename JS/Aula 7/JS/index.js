//Nao pode modificar o valor de uma constante
//Não utilize var, Utilize Const
const nome = "Jesiel";
// não se pode modificar o nome no caso pois ira dar erro
//Se fosse mudar mude para let.
const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
resultadoTriplicado = resultadoTriplicado + 150;
console.log(resultadoTriplicado);
// descobrir o tipo da variavel 
console.log(typeof (primeiroNumero));
console.log(primeiroNumero + segundoNumero);
console.log(typeof( primeiroNumero + segundoNumero));
//number + string = string
