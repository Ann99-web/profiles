export const musicPlayerInit = () =>
{
const audio = document.querySelector('.audio');
const audioImg = document.querySelector('.audio-img');
const audioHeader = document.querySelector('.audio-header');
const audioPlayer = document.querySelector('.audio-player');
const audioNavigation = document.querySelector('.audio-navigation');
const audioButtonPlay= document.querySelector('.audio-button__play');
const audioProgress = document.querySelector('.audio-progress');
const audioProgressTiming = document.querySelector('.audio-progress__timing');
const audioTimePassed = document.querySelector('.audio-time__passed');
const audioTimeTotal = document.querySelector('.audio-time__total');

const playList = ['hello', 'flow', 'speed'];

let treckIndex = 0;

const loadTreck = () => {
    const isPlayed = audioPlayer.paused;
    const track = playlist [trackIndex];
audioImg.src= `./audio/${track}.jpg`;
audioHeader.textContent = track.toUpperCase();
    audioPlayer.src = `./audio/${track}.mp3`;

    if (isPlayed) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }
};

audioNavigation.addEventListener('click', event => {

    const target = event.target;

    if(target.classList.contains('audio-button__play')) {
        audio.classList.toggle('play');
        audioButtonPlay.classList.toggle('fa-play');
        audioButtonPlay.classList.toggle('fa-pause');
    };

    if (audioPlayer.paused){
        audioPlayer.play();
    } else {
        audioPlayer.pause()};    

        const nextTreck = () =>{

         if (trackIndex === playlist - 1) {
             trackIndex = 0;
         } else {
             treckIndex ++;
         };
         loadTreck();
     
        };
     
        const prevTrack = () => {    
         if (trackIndex !== 0) {
             trackIndex--;
         } else {
             trackIndex = playList.length - 1;
         
     }  ; 

loadTreck();
};

const addZero = n => n < 10 ? '0' + n : n;

if(target.classList.contains('audio-button__next')){ 
    nextTreck();
};
 if(target.classList.contains('audio-button__prev')){
prevTrack();
 };

  audioPlayer.addEventListener('ended', () => {
nextTreck();
audioPlayer.play();
  });

  audioPlayer.addEventListener('timeupdate', () => {
      const duration = audioPlayer.duration;
      const currentTime = audioPlayer.currentTime;
      const progress = (currentTime/duration)*100;

      audioProgressTiming.style.width = progress + '%';

      const minutesPassed = Math.floor(currentTime/60) || '0';
      const secondPassed = Math.floor(currentTime%60) || '0';


       const minutesTotal = Math.floor(duration/60) || '0';
      const secondTotal = Math.floor(duration%60) || '0' ;


      audioTimePassed.textContent = `${addZero(minutesPassed)}:${addZero(secondPassed)}`;
      audioTimeTotal.textContent = `${addZero(minutesTotal)}:${addZero(secondTotal)}`;
  });

  audioProgress.addEventListener('click', event => {
      const x = event.offsetX;
      const allWidth = audioProgress.clientWidth;
      const progress = (x/allWidth)*audioPlayer.duration;
      audioPlayer.currentTime = progress;
  });
};
