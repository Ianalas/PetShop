import { apiConfig } from "./api-config";
import dayjs from "dayjs";

export async function fetchByDay() {
  try {
    // Fazendo a requisição para buscar o agendamento
    const response = await fetch(`${apiConfig.baseURL}/times`);

    const dailySchedules = await response.json();

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi póssível buscar os agendamentos dos dias!");
  }
}
