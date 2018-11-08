var time, picture, pictureUpdated;
var pictures = []
var picturesURL = "https://api.backendless.com/3F7B781C-1F35-C620-FF60-5655362BFB00/C6BCA89F-18F8-4C5C-FF73-68924CB21900/data/displayPhotos?props=URL";

function initial() {
    //Gets pictures
    fetch(picturesURL).then(function(response) {
        return response.json();
    }).then(function(data) {
        pictures = data.map(picture => picture.URL);
        startSlideshow();
    });
}

function startSlideshow() {
    document.getElementById("imgBackgroundFront").src = pictures[Math.floor(Math.random()*pictures.length)];
	picture = pictures[Math.floor(Math.random()*pictures.length)];
	document.getElementById("imgBackgroundBack").src = picture;
	pictureUpdated = false;
	updateClock();
}

function updateClock() {
	time = 1546698600-Math.round(Date.now() / 1000);
	document.getElementById("days").innerHTML = Math.floor(time/86400);
	document.getElementById("hours").innerHTML = Math.floor((time/3600)%24);
	document.getElementById("minutes").innerHTML = Math.floor((time/60)%60);
	document.getElementById("seconds").innerHTML = Math.floor(time%60);
	
	if ((Math.floor(time%6) > 3) && !pictureUpdated) {
		pictureUpdated = true;
		document.getElementById("imgBackgroundFront").style.opacity = 0;
		
		setTimeout(function(){
			document.getElementById("imgBackgroundFront").src = picture;
			document.getElementById("imgBackgroundFront").style.transition = "opacity 0s ease-in-out";
			document.getElementById("imgBackgroundFront").style.opacity = 1;
			document.getElementById("imgBackgroundFront").style.transition = "opacity 1s ease-in-out";
			
			setTimeout(function(){
				picture = pictures[Math.floor(Math.random()*pictures.length)];
				document.getElementById("imgBackgroundBack").src = picture;
				pictureUpdated = false;
			}, 500);
		}, 500);
	}
	
	setTimeout(updateClock, 1000);
}
