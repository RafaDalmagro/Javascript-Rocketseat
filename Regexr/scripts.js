const input = document.querySelector("input");
const form = document.querySelector("form");

input.addEventListener("input", () => {
    const value = input.value;
    const regex = /\D+/g;

    // console.log(value.match(regex));

    const isValid = regex.test(value);
    console.log(isValid);
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const regex = /\D+/g;
    const value = input.value;
    // value = input.value.replace(regex, "X");
	if(regex.test(value)){
		alert("Padrão encontrado!")
	}
    console.log(value);
});
