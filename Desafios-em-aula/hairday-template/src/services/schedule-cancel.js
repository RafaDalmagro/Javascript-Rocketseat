import { apiConfig } from "./api-config";

export async function scheduleCancel({ id }) {
    try {
        await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
            method: "DELETE",
        });

        alert("Agendamento cancelado!");
    } catch (error) {
        alert("Ocorreu um erro ao cancelar o agendamento.");
        console.error("Erro ao cancelar o agendamento:", error);
    }
}
