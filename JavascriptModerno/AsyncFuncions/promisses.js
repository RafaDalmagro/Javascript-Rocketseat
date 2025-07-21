function asyncFuncions() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = true;

            if (isSuccess) {
                resolve("Operação bem-sucedida");
            } else {
                reject("Operação falhou");
            }
        }, 4000);
    });
}

// asyncFuncions()
//     .then((response) => {
//         console.log("Sucesso: " + response);
//     })
//     .catch((error) => {
//         console.error("Erro: " + error);
//     })
//     .finally(() => {
//         console.log("Operação finalizada");
//     });

async function fetch(){
	const response = await asyncFuncions();
	console.log("Resposta recebida: " + response);
}

fetch()