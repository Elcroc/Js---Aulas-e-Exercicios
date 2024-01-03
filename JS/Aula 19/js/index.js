//PRIMITIVOS ( IMUTAVEIS) -STRING ,NUMBER , BOLLEAN ,UNDEFINED , NULL (BIGINT, SYMBOL)
//Referencia (mutavel) - array , object , function
let a = [1,2,3];
let b = [...a];
let c = b;
console.log(a,b);
a.push(4);
console.log(a,b);
b.pop();
console.log(a,b);
a.push('jesiel');
console.log(a ,c); 