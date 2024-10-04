/* ----- DESAFIO IMC -----

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

/*function main() {
    const peso = 73;
    const altura = 1.72;
    const imc = calcularImc(peso, altura);

    console.log(imc.toFixed(2));
    console.log(classificarImc(imc));
}*/

function calcularImc(peso, altura){
    return peso/ Math.pow(altura, 2);
}

function classificarImc(imc){
    if (imc < 18.5){
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc<=25){
        return 'Peso normal';
    } else if (imc > 25 && imc <= 30){
        return 'Acima do peso';
    } else if (imc > 30 && imc <= 40){
        return 'Obeso';
    } else {
        'Obesidade grave';
    }
}

//main();

(function main() {
    const peso = 73;
    const altura = 1.72;
    const imc = calcularImc(peso, altura);

    console.log(imc.toFixed(2));
    console.log(classificarImc(imc));
})(); // isso se chama função imediatamente invocada. Ou seja, ao rodar o código, ele vai executar e invocar automaticamente, sem rpecisar referenciar posteriormente no código como main()

