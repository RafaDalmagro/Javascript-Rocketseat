import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";
const form = document.querySelector("form");
const selectedDate = document.querySelector("#date");
const clientName = document.querySelector("#client");
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
    event.preventDefault();

    try {
        const name = clientName.value.trim();

        if (!name) {
            return alert("Por favor, preencha o nome do cliente.");
        }

        const hourSelected = document.querySelector(".hour-selected");

        if (!hourSelected) {
            return alert("Por favor, selecione um horário.");
        }

        const [hour] = hourSelected.innerText.split(":");

        const when = dayjs(selectedDate.value).add(hour, "hour");

        const id = new Date().getTime();

        scheduleNew({
            id,
            name,
            when,
        });
        clientName.value = "";
        await schedulesDay();
    } catch (error) {
        alert("Ocorreu um erro ao enviar o formulário.");
        console.error("Erro ao enviar o formulário:", error);
    }
};
