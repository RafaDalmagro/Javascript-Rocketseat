import { apiConfig } from "./api-config";
import dayjs from "dayjs";

export async function scheduleFetchByDay({ date }) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules`);

        const data = await response.json();

        const dailySchedules = data.filter((schedule) =>
            dayjs(schedule.when).isSame(dayjs(date), "day")
        );

        return dailySchedules;
    } catch (error) {
        alert("Erro ao buscar agendamentos para o dia selecionado.");
        console.error("Erro ao buscar agendamentos:", error);
    }
}
