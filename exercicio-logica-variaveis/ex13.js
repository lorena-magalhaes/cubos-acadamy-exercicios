const montante = 90000;
const capital = 60000;
const meses = 24;

const taxaDeJuros = ((montante / capital) ** (1/meses)) -1
//transformando em taxa real
const taxaDeJurosFinal = taxaDeJuros * 100;
console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${taxaDeJurosFinal}, pois após ${meses} meses você teve que pagar ${montante} reais`); 