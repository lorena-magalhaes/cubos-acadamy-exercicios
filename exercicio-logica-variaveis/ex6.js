// distancia é dada em metros e tempo em segundos, ou seja resultado é m/s;

let distPercorrida = 500;
let tempo = 10;
const velocidade = distPercorrida / tempo;

console.log(velocidade);

// convertendo para m/s para km/h;

const velocidadeEmKm = velocidade * 3.6;

console.log(velocidadeEmKm);