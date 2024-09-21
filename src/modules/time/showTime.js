import dayjs from "dayjs";
import { verifcedDate } from "../verificedDate";

const manha = document.querySelector(".manha");
const tarde = document.querySelector(".tarde");
const noite = document.querySelector(".noite");

const date = document.querySelector("#date");

export function createTime({ dailyTimes }) {
  try {
    manha.innerHTML = "";
    tarde.innerHTML = "";
    noite.innerHTML = "";

    dailyTimes.forEach((element) => {
      
      let dataSelect = verifcedDate(element.data, date.value);

      if(dataSelect){
        const time = document.createElement("li");
        const horario = document.createElement("h3");
        const paragrafo = document.createElement("p");
        const description = document.createElement("small");
        const remove = document.createElement("a");

        time.setAttribute("data-id", element.id); //Adicionará o ID do objeto para consegui-lo referenciar nos outros metodos como delete e patch

        remove.style.cursor = "pointer";
        paragrafo.innerHTML = `${element.pet} <span>/${element.tutor}</span>`;
        horario.innerText = element.hora;
        description.innerText = element.description;
        remove.innerHTML = "Remover agendamento";
        time.append(horario, paragrafo, description, remove);

        let [horaEsc,minEsc] = element.hora.split(":")
        horaEsc = Number(horaEsc);
        minEsc = Number(minEsc);

        if(horaEsc >= 9 && horaEsc < 13){
          manha.appendChild(time);
        }else if(horaEsc >= 13 && horaEsc < 18){
          tarde.appendChild(time);
        }else if( horaEsc >= 18 && horaEsc < 21 ){
          noite.appendChild(time);
        }
      }
    });
  } catch (error) {
    alert("Não conseguimos ler a nossa agenda");
    console.log(error);
  }
}
