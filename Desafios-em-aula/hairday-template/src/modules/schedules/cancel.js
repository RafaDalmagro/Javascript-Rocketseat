import { schedulesDay } from "./load";
import { scheduleCancel } from "../../services/schedule-cancel";

const periods = document.querySelectorAll(".period");

console.log(periods);

periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        const isCancel = event.target.classList.contains("cancel-icon");
        if (isCancel) {
            const item = event.target.closest("li");
            const { id } = item.dataset;

            if (id) {
                const confirmation = confirm(
                    "Você tem certeza que deseja cancelar este agendamento?"
                );
                if (confirmation) {
                    await scheduleCancel({ id });
                    schedulesDay();
                }
            }
        }
    });
});
