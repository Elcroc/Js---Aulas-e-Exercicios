//let umaString = 'Um \'Texto\'';
//let umaString = 'Um \\Texto';
//               01234567
let umaString = 'Um Texto Bem Bonitinho';
console.log(umaString[5]);
console.log(umaString.charAt(2));
console.log(umaString.indexOf('ex'));
console.log(umaString.lastIndexOf('ex'));
console.log(umaString.match(/o/));
console.log(umaString.replace(/Um/, 'Uma'));
console.log(umaString.replace(/Um/g, 'Uma'));
console.log(umaString.length);//retorna o numero de caracteres
console.log(umaString.slice(0,8));
console.log(umaString.split(' '));
console.log(umaString.toUpperCase());