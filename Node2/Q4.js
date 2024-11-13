async function buscarDados(entrada) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (entrada === "erro") {
          reject(new Error("Erro: Entrada inválida!"));
        } else {
          resolve(`Dados simulados pra ${entrada}`);
        }
      }, 1000);
    });
  }
  
  async function buscarDadosSeguro(entrada) {
    try {
      const resultado = await buscarDado(entrada);
      console.log("Resultado:", resultado);
    } catch (erro) {
      console.error("Erro ao buscar dados:", erro.message);
    }
  }
  
  buscarDadosSeguro("entrada1");
  
  buscarDadosSeguro("erro");
  