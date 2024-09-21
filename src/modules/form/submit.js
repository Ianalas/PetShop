import dayjs from "dayjs";
import { newTime } from "../../services/newTime";
import { showForm } from "../show-form";
import { formatarTelefone } from "./inputs";
import { loadTime } from "../time/loadTime";

const dataSelect = document.getElementById("date");

const form = document.querySelector("form");
const clientName = document.querySelector("#nameTutor");
const petName = document.querySelector("#namePet");
const telefoneInput = document.getElementById("tel");
const descInput = document.getElementById("description");
const dataInput = document.getElementById("data");
const horaInput = document.getElementById("hora");

const dataAtual = dayjs(new Date()).format("YYYY-MM-DD");
const horaAtual = dayjs(new Date()).format("HH:mm");

dataSelect.value = dataAtual;
dataInput.value = dataAtual;
dataInput.min = dataAtual;
horaInput.value = horaAtual;

telefoneInput.addEventListener("input", () => {
  telefoneInput.value = formatarTelefone(telefoneInput.value);
});

form.onsubmit = async (e) => {
  e.preventDefault();

  try {
    let nameTutor = clientName.value.trim();
    let namePet = petName.value.trim();
    let telefone = telefoneInput.value;
    const id = new Date().getTime().toString();

    if (!nameTutor || !namePet) {
      return alert("Informe o nome do tutor ou pet.");
    }

    let description = descInput.value;
    if (!description) {
      return alert("Informe o serviço que deseja na descrição.");
    }

    const data = dataInput.value;
    const hora = horaInput.value;

    await newTime({
      id,
      tutor: nameTutor,
      pet: namePet,
      telefone,
      data,
      hora,
      description,
    });
    showForm();
    form.reset();
    loadTime();
  } catch (error) {
    alert("Não foi possível realizar o agendamento, tente mais tarde.");
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  loadTime();
});

dataSelect.addEventListener("input", () => {
  loadTime();
});
