import { deleteTime } from "../../services/deleteTime";

const agenda  = document.getElementById("agenda");
const horarios = document.querySelectorAll(".horario");

agenda.addEventListener("click", ()=>{
  horarios.forEach((horarioEl) => {
    const listItems = horarioEl.querySelectorAll("li");
  
    listItems.forEach((li) => {
      li.onclick = (e) => {
        e.stopPropagation(); // Evita que o clique se propague para o pai
  
        // Seleciona a tag <a> dentro do <li> clicado
        if(e.target.tagName == "A" ){
          const {id} = li.dataset;

          if(id){
            const isConfirm = confirm("Confirma que deseja cancelar o agendamento?")
            if(isConfirm){
              console.log(id);
              deleteTime({id})
              li.remove();
            }
          }
        }
      };
    });
  });
})
