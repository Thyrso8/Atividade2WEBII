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
  
  async function buscarVariosDados() {
    try {
      const resultados = await Promise.all([
        buscarDado("entrada1"),
        buscarDado("entrada2"),
        buscarDado("entrada3")
      ]);
      console.log(resultados);
    } catch (erro) {
      console.error("Uma das buscas falhou:", erro.message);
    }
  }
  
  buscarVariosDados();
  