
// create a function to show or hide the div which contains the video
let videoWrapper = document.querySelector('.promo-video');
let promoVideo = document.querySelector('.promo-video video');
let playButton = document.querySelector('.video-img');
let closeIcon = document.querySelector('.close-icon');


// event to show the div which contains the video
playButton.addEventListener('click', function(){
    videoWrapper.classList.toggle('active');
});

// another event to hide that div by removing active class
closeIcon.addEventListener('click',function(){
    videoWrapper.classList.remove('active');
    promoVideo.pause();
    promoVideo.currentTime = 0;
});



