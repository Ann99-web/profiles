const cardButton=document.querySelector('#корзина');
const modal=document.querySelector(".modal");
const close=document.querySelector(".close");

cardButton.addEventListener("click", toggleModal);

close.addEventListener("click", toggleModal);

function toggleModal(){
    modal.classList.toggle("is-open");
}


new Wow().init();