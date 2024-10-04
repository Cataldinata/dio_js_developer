/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Condições de pagamento:
- À vista no Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juro;
- Acima de duas vezes, preço normal mais juros de 10%;
*/

const valorProduto = 100;

const pagDebito = valorProduto*0.9;
const pagDinheiroOuPix = valorProduto-(valorProduto*0.15);
const pagAteDuasVezes = valorProduto;
const pagMaisQueDuasVezes = valorProduto+(valorProduto*0.10);

let tipoPagmento = 'ababa';

console.log(tipoPagmento);

if (tipoPagmento === 'debito') { 
    console.log('Valor da etiqueta: R$ '+valorProduto+'. Valor de pagamento em débito com 10% de desconto: R$' + pagDebito);
} else if(tipoPagmento === 'dinheiroOuPix') {
    console.log('Valor da etiqueta: R$ '+valorProduto+'. Valor de pagamento em dinheiro ou pix com 15% de desconto: R$' + pagDinheiroOuPix);
} else if(tipoPagmento === 'maisQueDuasVezes') {
    console.log('Valor da etiqueta: R$ '+valorProduto+'. Valor de pagamento em mais de duas vezes com 10% de juros: R$' + pagMaisQueDuasVezes);
} else {
    console.log('Valor da etiqueta: R$ '+valorProduto+'. Valor de pagamento em até duas vezes R$' + pagAteDuasVezes);
}