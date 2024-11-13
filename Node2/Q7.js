function rejeitarApos(ms) {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error(`Rejeitado após ${ms} milissegundos`));
      }, ms);
    });
  }
  