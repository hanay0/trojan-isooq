
// create a function to show or hide the div which contains the video


let playButton = document.querySelector('.video-img'),
 videoWrapper = document.querySelector('.promo-video'),
 closeIcon = document.querySelector('.close-icon'),
 promoVideo = document.querySelector('.promo-video iframe');

playButton.addEventListener('click', function(){
    videoWrapper.classList.toggle('active');
});

var stopVideos = function () {
	var videos = document.querySelectorAll('iframe, video');
	Array.prototype.forEach.call(videos, function (video) {
		if (video.tagName.toLowerCase() === 'video') {
			video.pause();
		} else {
			var src = video.src;
			video.src = src;
		}
    });
    videoWrapper.classList.remove('active');
};


closeIcon.addEventListener('click',stopVideos)
	

 