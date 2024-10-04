/* ----- CONDICIONAIS -----

expressões de códigos, baseada em booleanos, onde determina se a condição vai ser verdadeira ou não, implicando na sua execução ou não.

----- IF / ELSE / ELSE IF------

é uma estrutura condicional, onde, dentro do bloco de código, a expressão será verficada em verdadeira ou não, implicando na execução ou não da expressão de código. 

----- OPERADORES -----
operadores de comparação: <(menor que), >(maior que), <=(menor ou igual), >=(maior ou igual), ==(igual), !=(não igual), ===(estritamente igual), !==(estritamente não igual)
operadores lógicos: &&(AND lógico), ||(OU logico), !(NOT lógico)
*/

const numero = 0;
const numeroDivisivelPorCinco = (numero % 5) === 0;

console.log(numeroDivisivelPorCinco);

/*if (numeroPar) {
    console.log('Executei par!')
}

if (!numeroPar) {
    console.log('Executei ímpar!');
}*/

if (numero <= 0) {
    console.log('Número inválido');
} else if (numeroDivisivelPorCinco) {
    console.log('Sim!');
} else {
    console.log('Não!');
}

