
// --------------------------------------------------------

  function geradorDeTagsDeIdentificacao(nomeDog) {
   return nomeDog.toUpperCase();
  }

// --------------------------------------------------------

 function verificarSePodeSerAdotado (idade, porte){
   return idade == 1 && porte === 'M';
 }

// --------------------------------------------------------
 function calcularConsumoDeRacao (nomeDog,idadeDog,pesoDog){
   //console.log(`Nome do dog: ${nomeDog}` )
   //console.log(`Idade dog: ${idadeDog}` )
   //console.log(`Peso do dog: ${pesoDog}` )
   if (pesoDog === 14.5){
     let consumoDiario = 4350
    //console.log(`Consumo diário em gramas: ${consumoDiario}`)
    return(consumoDiario)
  }
 }

// --------------------------------------------------------

function decidirTipoDeAtividadePorPorte (porte){
  if (porte === 'pequeno'){
    return('brincar dentro de casa')
  } else return ('Atividade não definida')
}

// --------------------------------------------------------
async function buscarDadoAsync() {
  let dado = 'Pipoca'
  return (dado)
}

// --------------------------------------------------------
export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
}