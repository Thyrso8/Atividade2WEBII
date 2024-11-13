async function buscarDados(entrada) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (entrada === "erro") {
          reject(new Error("Erro: Entrada inválida!"));
        } else {
          resolve({ dados: `Dados simulados pra ${entrada}` });
        }
      }, 1000);
    });
  }
  