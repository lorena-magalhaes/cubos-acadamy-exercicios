const nota = 9;
const conceito = '';

// if(nota > 9){
//     console.log('O estudando obteve conceito A')
// } else if ( nota > 8){
//     console.log('O estudando obteve conceito B')
// } else if ( nota > 6){
//     console.log('O estudando obteve conceito C')
// } else if ( nota > 4){
//     console.log('O estudando obteve conceito D')
// } else if ( nota < 4){
//     console.log('O estudando obteve conceito E')
// } 

if (nota < 4){
    conceito = 'E';
} else if (nota < 6){
    conceito = 'D';
} else if (nota < 8){
    conceito = 'C';
} else if (nota < 9){
    conceito = 'B';
} else {
    conceito = 'A';
}

console.log(`O estudante obteve conceito ${conceito}`);