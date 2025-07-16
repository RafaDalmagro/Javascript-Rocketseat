// Cotações de moedas do dia.
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

// Obtendo os elementos do DOM.
const form = document.querySelector("form");
const footer = document.querySelector("main footer");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const result = document.querySelector("#result");
const description = document.querySelector("#description");

form.onsubmit = (event) => {
    event.preventDefault();

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$");
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
    }
};

amount.addEventListener("input", (event) => {
    const hasCaractersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCaractersRegex, "");
});

function convertCurrency(amout, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

        let total = amout * price
        total = formatCurrencyBRL(total).replace("R$", "");

        result.textContent = `${total} Reais`;
        footer.classList.add("show-result");
    } catch (error) {
        footer.classList.remove("show-result");

        console.log(error);
        alert("Não foi possível converter o valor.Tente novamente mais tarde.");
    }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}
