const newTime = document.querySelector(".new-time");
const modalForm = document.querySelector(".modal");

export function showForm(){
  const atualDisplay = window.getComputedStyle(modalForm).display; //Pega o estado do display (visibilidade ou não)

  if (atualDisplay == "none") {
    modalForm.style.display = "grid";
  }else{
    modalForm.style.display = "none";
  }
}

newTime.addEventListener("click", showForm);

modalForm.addEventListener("click", (e) => {
  if( e.target == document.querySelector(".modal small")){
    modalForm.style.display = "none"; 
  }
});
