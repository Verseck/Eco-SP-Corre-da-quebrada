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
const modaldois = document.querySelector("#modaldois");
const fadedois = document.querySelector("#fadedois");

const toggleModaldois = () => {
    modaldois.classList.toggle("hide");
    fadedois.classList.toggle("hide");
  };
  
  [openModalBdois, closeModalBdois, fadedois].forEach((el) => {
    el.addEventListener("click", () => toggleModaldois());
  });

  const openModalBtres = document.querySelector("#open-tres");
const closeModalBtres = document.querySelector("#close-tres");
const modaltres = document.querySelector("#modaltres");
const fadetres = document.querySelector("#fadetres");

const toggleModaltres = () => {
    modaltres.classList.toggle("hide");
    fadetres.classList.toggle("hide");
  };
  
  [openModalBtres, closeModalBtres, fadetres].forEach((el) => {
    el.addEventListener("click", () => toggleModaltres());
  });

  const openModalBquatro = document.querySelector("#open-quatro");
const closeModalBquatro = document.querySelector("#close-quatro");
const modalquatro = document.querySelector("#modalquatro");
const fadequatro = document.querySelector("#fadequatro");

const toggleModalquatro = () => {
    modalquatro.classList.toggle("hide");
    fadequatro.classList.toggle("hide");
  };
  
  [openModalBquatro, closeModalBquatro, fadequatro].forEach((el) => {
    el.addEventListener("click", () => toggleModalquatro());
  });


