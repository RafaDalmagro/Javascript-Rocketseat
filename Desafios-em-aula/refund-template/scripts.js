// Elementos do DOM
const form = document.querySelector("form");
const amout = document.querySelector("#amount");
const expense = document.querySelector("#expense");
const category = document.querySelector("#category");
const expenseList = document.querySelector("ul");
const expensesQuantity = document.querySelector("aside header p span");
const expenseTotal = document.querySelector("aside header h2");
// Capturamos o evento de input para formatar o valor do input
amout.oninput = () => {
    let value = amout.value.replace(/\D/g, "");
    value = Number(value) / 100;

    amout.value = formatCurrencyBRL(value);
};

function formatCurrencyBRL(value) {
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    return value;
}

form.onsubmit = (error) => {
    error.preventDefault();

    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amout: amout.value,
        create_at: new Date(),
    };

    expenseAdd(newExpense);
};

function expenseAdd(newExpense) {
    try {
        const expenseItem = document.createElement("li");
        expenseItem.classList.add("expense");

        const expenseIcon = document.createElement("img");
        expenseIcon.setAttribute("src", `./img/${newExpense.category_id}.svg`);
        expenseIcon.setAttribute("alt", newExpense.category_name);

        const expenseInfo = document.createElement("div");
        expenseInfo.classList.add("expense-info");
        const expenseTitle = document.createElement("strong");
        expenseTitle.textContent = newExpense.expense;
        const expenseCategory = document.createElement("span");
        expenseCategory.textContent = newExpense.category_name;

        const expenseAmount = document.createElement("span");
        expenseAmount.classList.add("expense-amount");
        expenseAmount.innerHTML = `<small>R$</small>${newExpense.amout
            .toUpperCase()
            .replace("R$", "")}`;

        const removeIcon = document.createElement("img");
        removeIcon.setAttribute("src", "./img/remove.svg");
        removeIcon.setAttribute("alt", "remover");
        removeIcon.classList.add("remove-icon");

        expenseInfo.append(expenseTitle, expenseCategory);

        expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);

        expenseList.append(expenseItem);

        updateTotals();
        clearForm();
    } catch (error) {
        alert("Não foi possivel adicionar a despesa.");
        console.log(error);
    }
}

function updateTotals() {
    try {
        const items = expenseList.children;

        expensesQuantity.textContent = `${items.length} ${
            items.length === 1 ? "Despesa" : "Despesas"
        }`;

        let total = 0;
        for (let item = 0; item < items.length; item++) {
            const itemAmount = parseFloat(
                items[item]
                    .querySelector(".expense-amount")
                    .textContent.replace("R$", "")
                    .replace(",", ".")
            );

            total += itemAmount;
        }

        const symbolBRL = document.createElement("small");
        symbolBRL.textContent = "R$";
        total = formatCurrencyBRL(total).toUpperCase().replace("R$", "");
        expenseTotal.innerHTML = "";
        expenseTotal.append(symbolBRL, total);
    } catch (error) {
        console.log(error);
        alert("Não foi possível atualizar o total.");
    }
}

expenseList.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-icon")) {
        const item = event.target.closest(".expense");
        item.remove();
    }

    updateTotals();
});

function clearForm() {
    amout.value = "";
    expense.value = "";
    category.value = "1";

	expense.focus();
}
