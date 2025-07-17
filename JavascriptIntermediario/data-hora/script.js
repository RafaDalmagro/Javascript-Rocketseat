// console.log(new Date());

// DATA E HORA DE REFERENCIA
// console.log(new Date(0));

// console.log(new Date().getTime());

let date = new Date();

// console.log(date.getDay()); // Dia da semana (0-6)
// console.log(date.getDate()); // Dia do mês (1-31)
// console.log(date.getMonth()); // Mês (0-11)
// console.log(date.getFullYear()); // Ano (4 dígitos)
// console.log(date.getHours()); // Hora (0-23)
// console.log(date.getMinutes()); // Minutos (0-59)
// console.log(date.getSeconds()); // Segundos (0-59)
// console.log(date.getMilliseconds()); // Milissegundos (0-999)

// date.setFullYear(2024);
// console.log(date.getFullYear());
// Exemplo de manipulação de data
// date.setDate(2);

// console.log(date.getDate().toString().padStart(2, "0")); // Exibe o dia atualizado

// console.log(date.toTimeString()); // Exibe a hora no formato de string
// console.log(date.toDateString()); // Exibe a data no formato de string

console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleString("pt-BR", {
	day: '2-digit',
	month: '2-digit',
	year: 'numeric',
})); // Exibe data e hora no formato local

const currentLocale = Intl.DateTimeFormat().resolvedOptions();


console.log(currentLocale);

console.log(new Intl.DateTimeFormat('pt-BR').format(new Date()));

console.log(date.getTimezoneOffset()); // Diferença em minutos entre o horário local e UTC
console.log(date.getTimezoneOffset() / 60); // Diferença em minutos entre o horário local e UTC


