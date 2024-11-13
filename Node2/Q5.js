async function buscarDadosAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const status = Math.random() > 0.5 ? 200 : 404;
        const dados = { nome: "Usuário Exemplo", idade: 30 };
  
        if (status === 200) {
          resolve(dados);
        } else {
          reject(new Error(`Erro: Status da resposta ${status}`));
        }
      }, 1000);
    });
  }
  
  async function obterDados() {
    try {
      const dados = await buscarDadosAPI();
      console.log("Dados recebidos:", dados);
    } catch (erro) {
      console.error("Erro ao buscar dados:", erro.message);
    }
  }
  
  obterDados();
  