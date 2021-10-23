
// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
});

const regExpValidEmail = /^\w+@\w+\.\w{2,}$/; //регулярное выражение

const loginElem = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector(".login-email");
const passwordInput = document.querySelector(".login-password");
const loginSignup = document.querySelector(".login-signup");

const userElem = document.querySelector(".user");
const userNameElem = document.querySelector(".user-name");

const exitElem = document.querySelector(".exit");
const editElem = document.querySelector(".edit");
const editContainer = document.querySelector(".edit-container");

const editUsername = document.querySelector(".edit-username");
const editPhotoURL = document.querySelector(".edit-photo");
const userAvatarElem = document.querySelector(".user-avatar");

const postWrapper = document.querySelector(".post");




const listUsers = [
{
  email: 'as@mail.ru',
  password: 'dkdfkfdk',
  displayName:'Igor'
},
{
 email: 'dsdfsf@.gg',
  password: 'dkd',
  displayName:'Kate'
}
];

const setUsers = {
  user: null,
  //handler просто функция или действие
  logIn(email, password, handler){
    if (!regExpValidEmail.test(email)) return alert('майл не валиден') //поиск совпадений
    const user = this.getUser(email);
    //сравнение паролей
    if(user && user.password === password){
      //авторизация
      this.authorizedUser(user);
      handler();
    } else{
      //неверный пароль
      alert('Пользователь с такими данными не найден');
    }

  },
  logOut(handler){
this.user = nall;
handler(); 
  },


  signUp(email, password, handler){
  //если не введен маил или пароль
  if( !email.trim() || !password.trim()){
    alert ('Введите данные');
    return;
  }
  //если пользователь не найден
if (!this.getUser(email) ){
  //добавление пользователя
  const user = {email, password, displayName: email.substring(0, email.indexOf('@'))};  //обрезка до собаки
  listUsers.push(user);
  //фвторизация при регистрации. нужно убрать.
  this.authorizedUser(user);
  //ракировка блока
  handler();
  
}
else {
  alert('Пользователь с таким именем уже существует')
}
},
editUser(userName, userPhoto, handler){
  if(userName){
    this.user.displayName = userName;
  }
  if(userPhoto){
    this.user.photo = userPhoto;
  }
handler();
},
//совпадение email из списка
getUser(email) {

  return listUsers.find(item =>  item.email === email)
  //аналогичный код только длиннее
//let user = null;
//for (let i=0; i<listUsers.length; i++){
 // if (listUsers[i].email === email){
   // user=listUsers[i];
   // break;
  //}
//}
//return user;
},
authorizedUser(user){
  this.user = user;
}
};


const setPosts = {
allPosts : [
  {
    title: 'Заголовок поста',
    text: 'djdsjdfjdfjdfjd',
    teg:[ 'hdhd', 'jdjds', 'djdsjds'],
    autor: 'mmff@djdk.ty',
    date:'33.44.33',
    like: 7,
    comments: 47
  },
   {
    title: 'Заголовок поста',
    text: 'djdsjdfjdfjdfjd',
    teg:[ 'hdhd', 'jdjds', 'djdsjds'],
    autor: 'mmff@djdk.ty',
    date:'33.44.33',
    like: 7,
    comments: 47
  }
]
};
const toggleAuthDom = () => {
  const user = setUsers.user;

  if (user) {
    loginElem.style.display = 'none';
       userElem.style.display = '';
          userNameElem.textContent = user.displayName;
          userAvatarElem.src = user.photo ? user.photo : userAvatarElem.src; //тернарный оператор
 }
 else {
 loginElem.style.display = '';
       userElem.style.display = 'none';
 }
};



loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
  loginForm.reset();
  
  toggleAuthDom();
});


loginSignup.addEventListener('click', event => {
  event.preventDefault();
const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  setUsers.signUp(emailValue, passwordValue,toggleAuthDom);
//toggleAuthDom callback function
   setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
    loginForm.reset();
   toggleAuthDom();
  
});

exitElem.addEventListener('click', event => {
event.preventDefault();
setUsers.logOut(toggleAuthDom);
});

editElem.addEventListener('click', event => {
event.preventDefault();
editContainer.classList.toggle('visible');
editUsername.value = setUsers.user.displayName;
});

editContainer.addEventListener('submit', event => {
  event.preventDefault();

  setUsers.editUser(editUsername.value, editPhotoURL.value, toggleAuthDom);
  editContainer.classList.remove('.visible');
});


const showAllPosts = () => {

  let postsHTML = '';

  setPosts.allPosts.forEach ( ({title, text, date}) => {
    postsHTML += `
     <section class="post">
        <div class="post-body">
          <h2 class="post-title">${title}</h2>
          <p class="post-text">${text} </p>
          <p class="post-text">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот
            маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему
            букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его
            снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую
            подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что
            вопроса ведущими о решила одна алфавит! </p>
          <p class="post-text">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот
            маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему
            букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его
            снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую
            подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что
            вопроса ведущими о решила одна алфавит! </p>
          <div class="tags">
            <a href="#" class="tag">#свежее</a>
            <a href="#" class="tag">#новое</a>
            <a href="#" class="tag">#горячее</a>
            <a href="#" class="tag">#мое</a>
            <a href="#" class="tag">#случайность</a>
          </div>
          <!-- /.tags -->
        </div>
        <!-- /.post-body -->
        <div class="post-footer">
          <div class="post-buttons">
            <button class="post-button likes">
              <svg width="19" height="20" class="icon icon-like">
                <!--<use xlink:href="img/icons.svg#like"></use>-->
              </svg>
              <span class="likes-counter">26</span>
            </button>
            <button class="post-button comments">
              <svg width="21" height="21" class="icon icon-comment">
               <!--- <use xlink:href="img/icons.svg#comment"></use>-->
              </svg>
              <span class="comments-counter">157</span>
            </button>
            <button class="post-button save">
              <svg width="19" height="19" class="icon icon-save">
                <!--<use xlink:href="img/icons.svg#save"></use>-->
              </svg>
            </button>
            <button class="post-button share">
              <svg width="17" height="19" class="icon icon-share">
                <!--<use xlink:href="img/icons.svg#share"></use>-->
              </svg>
            </button>
          </div>
          <!-- /.post-buttons -->
          <div class="post-author">
            <div class="author-about">
              <a href="#" class="author-username">arteislamov</a>
              <span class="post-time">${date}</span>
            </div>
            <a href="#" class="author-link"><img src="img/avatar.jpeg" alt="avatar" class="author-avatar"></a>
          </div>
          <!-- /.post-author -->
        </div>
        <!-- /.post-footer -->
      </section>
    `;
  });

  pastWrapper.innerHTML = postsHTML;

};

const init = () => {
  showAllPosts(); 
toggleAuthDom();
};


document.addEventListener('DOMContentLoaded', init);


