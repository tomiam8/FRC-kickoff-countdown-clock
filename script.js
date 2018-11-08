var time, picture, pictureUpdated;
var runSlideshow = false; //Don't start the slideshow intill runSlideshow true i.e. pictures list filled
var pictures = []
var picturesURL = "https://api.backendless.com/3F7B781C-1F35-C620-FF60-5655362BFB00/C6BCA89F-18F8-4C5C-FF73-68924CB21900/data/displayPhotos?props=URL";

function initial() {
    updateClock(); //Start clock - slideshow won't start as pictureUpdater false 
    //Check if picture list has been cached locally, and isnt > week old (This way I don't use up as many of my free API calls for backendless)
    if (Math.round(Date.now()/86400000) - parseInt(localStorage.getItem("cacheDate")) < 7) {
        pictures = JSON.parse(localStorage.getItem("picturesCache"));
        //Check can read from pictures (ie cache isnt bad or empty or something)
        try {
            console.log("Loaded " + pictures.length + " pictures from cache");
        }
        catch(TypeError) {
            localStorage.clear();
            location.reload();
        }
        if (!(pictures.length > 0)) {
            //Something must be wrong with the cache (import to use not so things like nulls also cause it to reset)
            localStorage.clear();
            location.reload();
        }
        runSlideshow = true;
        updater();
    }
    else {
        //Gets pictures
        fetch(picturesURL).then(function(response) {
            return response.json();
        }).then(function(data) {
            pictures = data.map(picture => picture.URL);
            localStorage.setItem("picturesCache", JSON.stringify(pictures));
            localStorage.setItem("cacheDate", Math.round(Date.now()/86400000)); //86400000 is days
            runSlideshow = true;
            updater();
        });
    }
}

function changePicture() {
    //Set background picture, give it 2 seconds to load
    picture = pictures[Math.floor(Math.random()*pictures.length)];
    document.getElementById("imgBackgroundBack").src = picture;
    
    setTimeout(function() {
        //Hide front picture, give a second for transition
        document.getElementById("imgBackgroundFront").style.opacity = 0;
        
        setTimeout(function() {
            //Make front picture same as back picture, cover up back picture
            document.getElementById("imgBackgroundFront").src = picture;
            document.getElementById("imgBackgroundFront").style.transition = "opacity 0s ease-in-out";
            document.getElementById("imgBackgroundFront").style.opacity = 1;
        document.getElementById("imgBackgroundFront").style.transition = "opacity 1s ease-in-out";
        }, 1000);
        
    }, 2000);
}

function updater() {
	if (runSlideshow) {
        changePicture();
    }
    setTimeout(updater, 6000);
}

function updateClock() {
    time = 1546698600-Math.round(Date.now() / 1000);
	document.getElementById("days").innerHTML = Math.floor(time/86400);
	document.getElementById("hours").innerHTML = Math.floor((time/3600)%24);
	document.getElementById("minutes").innerHTML = Math.floor((time/60)%60);
	document.getElementById("seconds").innerHTML = Math.floor(time%60);
    setTimeout(updateClock, 1000);
}

initial();