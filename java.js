const abrirmodal = document.querySelector("#open-modal");

const fecharmodal = document.querySelector("#fechar");

const modal = document.querySelector("#modal");

const fade = document.querySelector("#modal-fade");




function abrirFechar(){

   //fade.classList.toggle("show")

    modal.showModal()

  // modal.classList.remove("hide")

   //fade.classList.remove("hide")

}

fecharmodal.addEventListener("click", () => {
  modal.close();})

