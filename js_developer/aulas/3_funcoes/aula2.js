function escrevaMeuNome(nome){
  return 'meu nome é ' + nome;
}

function verificarIdade(idade){
    if (idade >= 18){
        console.log(escrevaMeuNome('Natã') + ' e sou maior de idade: '+ idade);
    } else {
        console.log(escrevaMeuNome('Natã') + ' e sou menor de idade: '+ idade);
    }
}

verificarIdade(18);