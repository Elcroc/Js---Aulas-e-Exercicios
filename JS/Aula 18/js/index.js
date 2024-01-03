/*
const pessoa = {
    nome : 'jesiel',
    sobrenome : 'mamedes',
    idade : '28'
};
const pessoa2 = {
    nome : 'thyrson',
    sobrenome : 'resquin',
    idade : '31'
};

console.log(pessoa.nome);
console.log(pessoa2.nome);
function criarPessoa (nome,sobrenome,idade){
    return{nome,sobrenome,idade};
}
const pessoa1 = criarPessoa ('Geisy' , 'Hellen' , '35');
const pessoa3 = criarPessoa ('Maria' , 'Hellen' , '89');
const pessoa4 = criarPessoa ('Helena' , 'Hellen' , '22');
const pessoa5 = criarPessoa ('Betania' , 'Hellen' , '20');
const pessoa6 = criarPessoa ('Pablo' , 'Hellen' , '10');    
console.log(pessoa1.nome ,pessoa4.nome, pessoa5.nome ,pessoa6.nome );
*/
const pessoa = {
    nome : 'jesiel',
    sobrenome : 'mamedes',
    idade : '28',
    fala () {
        console.log(`${this.nome} ${this.nome} está falando oi com ${this.idade} anos de vida`); 
    },
     incrementaIdade  () {
        this.idade++;
     }
}; 
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.incrementaIdade();
pessoa.incrementaIdade();
pessoa.fala();
