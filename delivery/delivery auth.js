

const cartButton=document.querySelector("#cart-button");
const modal=document.querySelector(".modal");

let login =localStorage.getItem('gloDelivery');

function toggleModal () {
  modal.classList.toggle('is-open');
}
cartButton.addEventListener('click', toggleModal);



  const buttonAuth = document.querySelector('.button-auth');
  const  modalAuth = document.querySelector('.modal-auth');
 const closeAuth = document.querySelector('.close-auth');

const loginForm = document.querySelector('#loginForm');
const loginInput = document.querySelector('#login');
const userName =  document.querySelector('.user-name');
const buttonOut =  document.querySelector('.button-out');
const cardsRestorants = document.querySelector('.cards-restorants');

function toogleModalAuth () {
  modalAuth.classList.toggle("is-open");
}
 
buttonAuth.addEventListener('click', toogleModalAuth);

console.log(document);

closeAuth.addEventListener('click', toogleModalAuth);

logInForm.addEventListener('click', login);



function authorised () {
  function logout (){
    login=null;
    checkAuth();
    buttonAuth.style.display='';
  }
  console.log('Авторизован');

}



function notauthorised () {
  console.log('не авторизован');
  function logIn (event)
  {
event.preventDefault();
login = loginInput.value;

localStorage.setItem('gloDelivery', login);
toggleModalAuth();

buttonAuth.removeEventListener('click', toogleModalAuth);
  closeAuth.removeEventListener('click', toogleModalAuth);
  logInForm.removeEventListener('submit', logIn);
  logInForm.reset();
  checkAuth();
  }

  buttonAuth.addEventListener("click", toogleModalAuth);
  closeAuth.addEventListener("click", toogleModalAuth);
  logInForm.addEventListener('submit', logIn);

}

function checkAuth(){
if (login)
{
  authorised();
}
else{
  notauthorised();
}
}
checkAuth();

function createCardsRestaurant (){

  const card = ` <a href='restorants.html" class="card card-restorant"></a>
  <img src="лягушка воин.jpg" alt="Error"> </img>`
}


