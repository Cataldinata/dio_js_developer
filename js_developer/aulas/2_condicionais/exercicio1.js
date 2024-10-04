/* faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, 
calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

média = (nota1 + nota2 + nota3) / 3;

classificação:
- média menor que 5, reprovação;
- média entre 5 e 7, recuperação;
- média acima de 7, passou de semestre;
*/

const nota1 = 4.8;
const nota2 = 2;
const nota3 = 8;
const media = (nota1+nota2+nota3)/3;

console.log(media.toFixed(2));

if (media>=7.01){
    console.log('Aprovado!');
} else if(media >=5 && media <=7.01){
    console.log('Recuperação!');
} else {
    console.log('Reprovado!');
}