export const radioPlayerInit = () =>
{
const radio = document.querySelector('.radio');
const radioCoverImage = document.querySelector('.radio-cover__img');
const radioHeader = document.querySelector('.radio-header__big');
const radioNavigation = document.querySelector('.radio-navigation');
const radioItem = document.querySelectorAll('.radio-item');
const radioStop = document.querySelector('.radio-stop');


const audio = new Audio();

audio.type = 'audio/aac';

radioStop.disabled = true;

const changeIconPlay = () => {
    if (audio.paused){
        radio.classList.remove('play');
        radioStop.classList.add('fa-play');
         radioStop.classList.remove('fa-stop');
    } else {
        radio.classList.remove('play');
         radioStop.classList.add('fa-stop');
         radioStop.classList.remove('fa-play');
    }
};

const selectItem = elem => {
radioItem.forEach(itam => item.classList.remove('select'));
parrent.classList.add('select');
};

radioNavigation.addEventListener('change', event => {
const target = event.target;
const parrent = target.closest('.radio-item');

selectItem(parrent);

const title = parrent.querySelector('.radio-name').textContent;
radioHeader.textContent = title;

const img = parrent.querySelector('.radio-img').src;

radioCoverImage.src = urlImg;

radioStop.disabled = false;

    audio.src =target.dataset.radioStantion;

    audio.play();
    changeIconPlay();
});




radioStop.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.paused();
    }
    changeIconPlay();
});



};