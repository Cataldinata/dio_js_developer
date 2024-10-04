//código vindo do chat gpt para comparar e tentar resolver o desfaio3 da pasta de funções

function gastoMedioGasolina(rota, valorGasolina, distancia, consumoGasolinaCidade, consumoGasolinaRodovia) {
    if (rota === 'rodovia') {
         return valorGasolina * (distancia / consumoGasolinaRodovia);
    } else if (rota === 'cidade') {
         return valorGasolina * (distancia / consumoGasolinaCidade);
    } else {
         return 'Rota não identificada';
    }
 }
 
 function gastoMedioAlcool(rota, valorAlcool, distancia, consumoAlcoolCidade, consumoAlcoolRodovia) {
     if (rota === 'rodovia') {
         return valorAlcool * (distancia / consumoAlcoolRodovia);
     } else if (rota === 'cidade') {
         return valorAlcool * (distancia / consumoAlcoolCidade);
     } else {
         return 'Rota não identificada';
     }
 }
 
 function main(rota, distancia, combustivel, valorCombustivel, consumoCidade, consumoRodovia) {
     let gastoMedio;
     
     if (combustivel === 'gasolina') {
         gastoMedio = gastoMedioGasolina(rota, valorCombustivel, distancia, consumoCidade, consumoRodovia);
     } else if (combustivel === 'alcool') {
         gastoMedio = gastoMedioAlcool(rota, valorCombustivel, distancia, consumoCidade, consumoRodovia);
     } else {
         console.log('Combustível não identificado.');
         return;
     }
     
     console.log('Com a escolha da sua rota pela ' + rota + ', com uma distância de ' + distancia + 
                 'km e a escolha do combustível ' + combustivel + ', seu gasto médio será aproximadamente de R$' + gastoMedio.toFixed(2) + '.');
 }
 
 // Chamando a função principal com os parâmetros corretos
 main('rodovia', 50, 'gasolina', 5.20, 10.7, 17.8);
 main('cidade', 50, 'alcool', 4.30, 9.8, 14.5);
 