async function processarChamadasEmSeq(urls) {
    const resultados = [];
  
    for (const url of urls) {
      try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
          throw new Error(`Erro na chamada pra ${url}: Status ${resposta.status}`);
        }
        const dados = await resposta.json();
        resultados.push(dados);
        console.log(`Dados recebidos de ${url}:`, dados);
      } catch (erro) {
        console.error(`Erro ao processar ${url}:`, erro.message);
      }
    }
  
    return resultados;
  }
  
  const urls = [
    "https://api.exemplo.com/dados1",
    "https://api.exemplo.com/dados2",
    "https://api.exemplo.com/dados3"
  ];
  
  processarChamadasEmSeq(urls).then((resultados) => {
    console.log("Todos os dados processados:", resultados);
  });
  