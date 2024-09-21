import { apiConfig } from "./api-config.js";

export async function newTime({ id, tutor, pet, telefone, data, hora, description }) {
  try {
    await fetch(`${apiConfig.baseURL}/times`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, tutor, pet, telefone, data, hora, description}),
    });

    
    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    alert("Não foi possível solicitar o agendamento");
    console.log(error);
  }
}
