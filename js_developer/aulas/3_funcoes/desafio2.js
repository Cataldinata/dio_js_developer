/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Condições de pagamento:
- À vista no Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juro;
- Acima de duas vezes, preço normal mais juros de 10%;
*/


function aplicarDesconto (valor, desconto) {
    return valor - [valor*(desconto/100)];
}

function aplicarJuros (valor) {
    return valor + (valor*(10/100));
}

function compra(tipoPagamento){
    if (tipoPagamento === 1) {
        console.log('Valor de etiqueta: R$' + valor + '. Valor com de 10% de desconto no débito: R$' + aplicarDesconto(valor, 10) + '.');
    } else if (tipoPagamento === 2) {
        console.log('Valor de etiqueta: R$' + valor + '. Valor com 15% de desconto no dinheiro ou pix: R$' + aplicarDesconto(valor, 15) + '.');
    } else if (tipoPagamento === 3) {
        console.log('Valor de etiqueta: R$' + valor + '. Valor de pagamento em até duas vezes: R$' + aplicarDesconto(valor, 0) + '.');
    } else if (tipoPagamento === 4) {
        console.log('Valor de etiqueta: R$' + valor + '. Valor de juros de 10% em pagamentos divididos em mais de duas vezes: R$' + aplicarJuros(valor) + '.');
    } else {
        console.log('Tipo não identificado.');
    }
}

valor = 100;
tipoPagamento = 5;

compra(tipoPagamento);
