export const videoPlayer = () =>
{
    const videoPlayer = document.querySelector('.video-player');
    const videoButtonPlayer = document.querySelector('.video-button__play');
    const videoButtonStop = document.querySelector('.video-button__stop');
    const videoProgress = document.querySelector('.video-progress');
    const videoTimePassed  = document.querySelector('.video-time__passed');
    const videoTimeTotal = document.querySelector('.video-time__total');


    const toggleIcon = () => {
        if(videoPlayer.paused){
             videoButtonPlayer.classList.remove('fa-pause');
             videoButtonStop.classList.add('fa-play'); 
        } else {
             videoButtonPlayer.classList.add('fa-pause');
             videoButtonStop.classList.remove('fa-play'); 
        }
    }

const togglePlay = () => {
        if (videoPlayer.paused) {
            videoplayer.play();
        } else {
            videoplayer.pause();
        }

        toggleIcon();
    };

    const stopPlay = () => {
      videoplayer.pause();
      toggleIcon();
    }
 
    const addZero = n => {
        return n < 10 ? '0' + n : n;
    };

    videoPlayer.addEventListener('click', togglePlay );
    videoButtonPlay.addEventListener('click', togglePlay );

    videoPlayer.addEventListener('play', toggleIcon );
    videoButtonPlay.addEventListener('pause', toggleIcon );


    videoButtonPlay.addEventListener('click', stopPlay );
};
    
videoPlayer.addEventListener('timeupdate', () => {
const currentTime = videoPlayer.currentTime;
const duration = videoPlayer.duration;

videoProgress.value = (currentTime/duration)*100;

let minutePassed = Math.floor(currentTime/60);
let secondPassed = Math.floor(currentTime % 60);

let minuteTotal = Math.floor(duration/60);
let secondTotal = Math.floor(duration % 60);

videoTimePassed.textContent = minutePassed + ':' + secondPassed;
videoTimeTotal.textContent = minuteTotal + ':' + secondTotal;

videoProgress.addEventListener('change', () => {
    const duration = videoPlayer.duration;

    const value = videoProgress.value;

    videoPlayer.currentTime = (value*duration)/100;
});
});