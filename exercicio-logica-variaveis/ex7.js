let inicialInfectados= 1000;
let potencialInfeccao = 4;
let tempo = 7;

const pessoasInfectadas = inicialInfectados * potencialInfeccao ** (tempo/7);

console.log(pessoasInfectadas);