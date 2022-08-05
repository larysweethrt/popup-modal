const modalBox = document.querySelector(".modal-box");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener('click', () =>{
    modalBox.classList.add("show");
});

close.addEventListener('click', () =>{
    modalBox.classList.remove("show");
});