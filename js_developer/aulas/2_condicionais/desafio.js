/* ----- DESAFIO -----

Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis, sendo elas:
    1 - preço do etanol;
    2 - preço da gasolina;
    3 - o tipo de combustível que está no seu carro;
    4 - gasto médio de combustível do carro po km;
    5 - distância em km da viagem;
    
Imprima no console o valor que será gasto para realizar esta viagem.
*/

const numero = 11; 
const escolhaGas = numero%2 === 0;

const caminho = 89;
const caminhoRodovia = caminho%2 === 0;

const consumoGasCidade = 10.4;
const consumoGasRodovia = 13.0;
const consumoAlcCidade = 7.4;
const consumoAlcRodovia = 9.2;
const valorAlc = 4.7;
const valorGas = 5.3;
 
const distanciaViagem = 100;

const gastoAlcRodovia = distanciaViagem/consumoAlcRodovia;
const gastoAlcCidade = distanciaViagem/consumoAlcCidade;
const gastoGasRodovia = distanciaViagem/consumoGasRodovia;
const gastoGasCidade = distanciaViagem/consumoGasCidade;

const gastoTotalAlcRodovia = gastoAlcRodovia*valorAlc;
const gastoTotalAlcCidade = gastoAlcCidade*valorAlc;
const gastoTotalGasRodovia = gastoGasRodovia*valorGas;
const gastoTotalGasCidade = gastoGasCidade*valorGas;

console.log('esolhaGas: ' + escolhaGas);
console.log('caminhoRodovia: ' + caminhoRodovia)

    if (escolhaGas && caminhoRodovia) {
        console.log('Gasto ao utilizar gasolina e pegar rodovia: R$' + gastoTotalGasRodovia.toFixed(2));
    } else if (escolhaGas && !caminhoRodovia) {
        console.log('Gasto ao utilizar gasolina e pegar cidade: R$' + gastoTotalGasCidade.toFixed(2));
    } else if (!escolhaGas && caminhoRodovia) {
        console.log('Gasto ao utilizar álcool e pegar rodovia: R$' + gastoTotalAlcRodovia.toFixed(2));
    } else {
        console.log('Gasto ao utilizar álcool e pegar cidade: R$' + gastoTotalAlcCidade.toFixed(2));
    }


   

  


     