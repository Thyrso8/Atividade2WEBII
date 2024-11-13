async function buscarPrimeiro(promises) {
    try {
      const resultado = await Promise.race(promises);
      return resultado;
    } catch (erro) {
      throw new Error("Nenhuma Promise foi resolvida com excelência.");
    }
  }
  
  function promessaRapida() {
    return new Promise((resolve) => setTimeout(() => resolve("Promessa rápida resolvida!"), 500));
  }
  
  function promessaMedia() {
    return new Promise((resolve) => setTimeout(() => resolve("Promessa média resolvida!"), 1000));
  }
  
  function promessaLenta() {
    return new Promise((resolve, reject) => setTimeout(() => reject(new Error("Promessa lenta rejeitada!")), 1500));
  }
  
  (async () => {
    try {
      const resultado = await buscarPrimeiro([promessaLenta(), promessaMedia(), promessaRapida()]);
      console.log("Resultado:", resultado);
    } catch (erro) {
      console.error("Erro:", erro.message);
    }
  })();
  