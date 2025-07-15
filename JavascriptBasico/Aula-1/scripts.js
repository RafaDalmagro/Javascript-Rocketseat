function execute(taskName, callback) {
	console.log("Executando a tarefa: ", taskName);
	
	callback()
}

function callback(){
	console.log("Downloading...");
}

execute("Teste", callback)

execute("Teste", ()=>{
	console.log("Testando tudo ---------------------");
})