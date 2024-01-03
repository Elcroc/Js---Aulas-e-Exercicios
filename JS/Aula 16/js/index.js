const aluno = ["jesiel", "juão" , "Titica"];
console.log(aluno);
console.log(aluno[2]);
aluno.push("mamedes");//adiconar ao fim
console.log(aluno);
aluno[aluno.length] = "silva"; //adiconar ao fim
console.log(aluno);
aluno.unshift("Paulo");//adiconar ao inicio
console.log(aluno);
aluno.pop(); // remove do fim
console.log(aluno);
aluno.shift(); // remove do Inicio
console.log(aluno);
delete aluno[1]; // deleta mas não exclui o indice fica undefined
console.log(aluno);
