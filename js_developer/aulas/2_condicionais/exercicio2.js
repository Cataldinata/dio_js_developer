/* O IMC (Índice de Massa Corporal) é um critério da OMS (Organização Mundial de Saúde) para dar uma indicação sobre a condição de peso de uma pessoa.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algortimo que dado o peso e a latura de um adulto sua condição de acordo com a tabela abaixo:

Condições do IMC em adultos:
- Abaixo de 18.5 = abaixo do peso;
- Entre 18.5 e 25 = peso normal;
- Entre 25 e 30 = acima do peso;
- Entre 30 e 40 = obeso;
- Acima de 40 = obesidade grave;
*/

const peso = 73;
const alturaCm = 172; // pode utilizar como metro(que fica mais fácil = 0.00m)
const imc = peso/[(alturaCm/100)*(alturaCm/100)]; // pode utilizar a biblioteca Math.pow(altura,2), para fazer a potência, e fica mais fácil de utilizar usando metros

console.log(imc.toFixed(2));

if (imc < 18.5){
    console.log('Abaixo do peso!');
} else if(imc>= 18.5 && imc<=25){
    console.log('Peso normal!');
} else if(imc > 25 && imc <= 30){
    console.log('Acima do peso!');
} else if(imc > 30 && imc <= 40){
    console.log('Obeso!');
} else {
    console.log('Obesidade grave!');
}