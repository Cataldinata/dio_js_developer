/* ----- ATIVIDADE -----
faça um programa para calcular o valor de uma viagem.

você terá 3 variáveis, sendo elas:
    1 - preço do combustível;
    2 - gasto médio de combustível por km;
    3 - distância em km da viagem;

imprima no console o valor que será gasto para realizar esta viagem.
*/

const consumoGasCidade = 10.7;
const consumoGasRodovia = 17.8;
const consumoAlcCidade = 9.8;
const consumoAlcRodovia = 14.5;
const valorAlc = 4.3;
const valorGas = 5.2;


let distanciaViagem = 50;

let gastoAlcRodovia = distanciaViagem/consumoAlcRodovia;
let gastoAlcCidade = distanciaViagem/consumoAlcCidade;
let gastoGasRodovia = distanciaViagem/consumoGasRodovia;
let gastoGasCidade = distanciaViagem/consumoGasCidade;

let gastoTotal = 0;
    gastoTotal = gastoAlcRodovia*valorAlc; 

console.log('Se utilizar álcool e pegar rodovia: ' + gastoTotal.toFixed(2)); //.toFixed(n) serve para arredondar um número e o apresentar como uma string

    gastoTotal = gastoAlcCidade*valorAlc;

console.log('Se utilizar álcool e pegar cidade: ' + gastoTotal.toFixed(2));

    gastoTotal = gastoGasRodovia*valorGas;

console.log('Se utilizar gasolina e pegar rodovia: ' + gastoTotal.toFixed(2));

    gastoTotal = gastoGasCidade*valorGas;

console.log('Se utilizar gasolina e pegar cidade: ' + gastoTotal.toFixed(2)); 