import {radioPlayerInit} from './radioplayer.js';
import {videoPlayer} from './videoplayer.js';
import {musicPlayerInit} from './musicplayer.js'


const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const deactivationPlayer = () => {
    temp.style.display = 'none';
    playerBtn.forEach((item) => item.classList.remove('active'));
    playerBlock.forEach((item) => item.classList.remove('active'));
};

playerBtn.forEach((btn, i) => {
     deactivationPlayer();
   btn.addEventListener('click', () => {
       btn.classList.add('active');
       playerBlock[i].classList.add('active');

   });
  
});

radioPlayerInit();