const fs = require('fs').promises;

async function lerDiretorio(caminho) {
  try {
    const arquivos = await fs.readdir(caminho);
    return arquivos;
  } catch (erro) {
    throw new Error(`Erro ao ler diretório: ${erro.message}`);
  }
}

//Exemplo
lerDiretorio('./meu-diretorio')
  .then(arquivos => console.log("Conteúdo do diretório:", arquivos))
  .catch(erro => console.error(erro.message));
