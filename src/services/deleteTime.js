import { apiConfig } from "./api-config";

export async function deleteTime({id}){
  try {
    await fetch(`${apiConfig.baseURL}/times/${id}`, {
      method: "DELETE",
    })
  } catch (error) {
    alert("Não foi possível cancelar o agendamento.");
    console.log(error);
  }
}