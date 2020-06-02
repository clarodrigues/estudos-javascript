//selecionando os elementos
let cards = document.querySelectorAll(".card");
let dropzones = document.querySelectorAll(".dropzone");

//adicionando os eventos
cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragend);
});

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragenter);
  dropzone.addEventListener("dragover", dragover);
  dropzone.addEventListener("dragleave", dragleave);
  dropzone.addEventListener("drop", drop);
});

//Funcionalidades
function dragstart() {
  // log("dragstart");

  //Adicionando classe para o background marrom
  dropzones.forEach((dropzone) => {
    dropzone.classList.add("highlight");
  });
  
  //Adicionando classe para a opacidade do card que está sendo arrastado
  this.classList.add("is-dragging");
}

function drag() {
  // log("drag");
}

function dragend() {
  // log("dragend");

  //removendo a classe do background marrom
  dropzones.forEach((dropzone) => {
    dropzone.classList.remove("highlight");
  });

  //removendo a classe de opacidade do card
  this.classList.remove("is-dragging");
}

function dragenter() {
  // log("dragenter");
}

function dragover() {
  // log("dragover");
  //dropzone
  //adicionando a classe de background verde para o dropzone que estiver com o card
  this.classList.add("over");

  //selecionando o card que está sendo arrastado e adicionando na dropzone
  let cardBeingDragged = document.querySelector(".is-dragging");
  this.appendChild(cardBeingDragged);
}

function dragleave() {
  // log("dragleave");
  //dropzone
  //retirando a classe de background verde para o dropzone que estiver com o card
  this.classList.remove("over");
}

function drop() {
  // log("drop");
}

//Utils
function log(message) {
  return console.log(`LOG >> ${message}`);
}
