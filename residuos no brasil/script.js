const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");


const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

const openModalBdois = document.querySelector("#open-dois");
const closeModalBdois = document.querySelector("#close-dois");
const modaldois = document.querySelector("#modal");
const fadedois = document.querySelector("#fade");

const toggleModaldois = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
  };
  
  [openModalBdois, closeModalBdois, fadedois].forEach((el) => {
    el.addEventListener("click", () => toggleModaldois());
  });


