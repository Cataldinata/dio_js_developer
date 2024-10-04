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

function gastoMedioGasolina(rota, valorGasolina, distancia, consumoGasolinaCidade, consumoGasolinaRodovia) {
   
    if (rota === 'rodovia'){
        return valorGasolina*(distancia/consumoGasolinaRodovia);
   } else if (rota === 'cidade'){
        return valorGasolina*(distancia/consumoGasolinaCidade);
   } else {
        return 'Rota não identificada';
   } return
}

function gastoMedioAlcool(rota, valorAlcool, distancia, consumoAlcoolCidade, consumoAlcoolRodovia) {

    if (rota === 'rodovia'){
        return valorAlcool*(distancia/consumoAlcoolRodovia);
    } else if (rota === 'cidade') {
        return valorAlcool*(distancia/consumoAlcoolCidade);
    } else {
        return 'Rota não identificada';
    } 
}

function main(combustivel){

    if (combustivel === 'gasolina'){
        console.log('Com a escolha da sua rota pela ' + rota + ', com uma distância de ' + distancia + 'km e a escolha do combustível ' + combustivel + ', seu gasto médio será aproximadamente de R$' + gastoMedioGasolina(rota, valorGasolina, distancia, consumoGasolinaCidade, consumoGasolinaRodovia).toFixed(2) + '.');
    } else if (combustivel === 'alcool'){
        console.log('Com a escolha da sua rota pela ' + rota + ', com uma distância de ' + distancia + 'km e a escolha do combustível ' + combustivel + ', seu gasto médio será aproximadamente de R$' + gastoMedioAlcool(rota, valorAlcool, distancia, consumoAlcoolCidade, consumoAlcoolRodovia).toFixed(2) + '.');
    } else {
        console.log('Combustível não identificado'); 
    }
}

valorGasolina = 5.2;
consumoGasolinaRodovia = 17.8;
consumoGasolinaCidade = 10.7;
valorAlcool = 4.3;
consumoAlcoolCidade = 9.8;
consumoAlcoolRodovia = 14.5;
rota = 'rodovia';
distancia = 50;

main('gasolina');