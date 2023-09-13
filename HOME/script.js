const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("show");
  fade.classList.toggle("show");
};

openModalButton.addEventListener("click", () => toggleModal());
closeModalButton.addEventListener("click", () => toggleModal());

const nono = document.querySelector("#nono");

function mostrar() {
  alert(nono.value + "     Sua mensagem foi enviada");
}
