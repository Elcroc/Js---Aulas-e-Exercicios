//IEEE 754-2008

let num1 = 0.7;
let num2 = 0.1;
//num1 += num2;//0.8
//num1 += num2;//0.9
//num1 += num2;//1.0
num1 = (((num1 * 100) + (num2 * 100) )/ 100);
num1 = (((num1 * 100) + (num2 * 100) )/ 100);
num1 = (((num1 * 100) + (num2 * 100) )/ 100);

//num1 = num1.toFixed(2);
console.log(num1);

/*  
console.log(Number.isInteger(num1));
num1 = Number(num1.toFixed(2));
console.log(num1);
*/
console.log(Number.isInteger(num1));


//console.log(num1.toString()+ num2); //convert o num1 mas nn muda a variavel
//console.log(num1.toString(2)); //Binario
//console.log(num2.toFixed(2));  //Arendonda
//console.log(Number.isInteger(num1)); // Se for inteiro o numero retorna TRUE
//let temp = num1 + '5'
//console.log(Number.isNaN(temp));//Se for NaN da TRUE
//console.log(temp);
