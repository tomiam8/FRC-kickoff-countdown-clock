var time, picture;
var pictures = [
	"https://www.firstinspires.org/sites/default/files/uploads/hero_headers/frc-hero.jpg",
	"https://i.ytimg.com/vi/MQ0VNzIvHx0/maxresdefault.jpg",
	"http://entech281.com/media/photos/robotics/frc/2012/competition/palmetto/Entech-Frc-2012-Competition-Palmetto-RobotTryingToBalance.jpg",
	"https://i.ytimg.com/vi/jZLSDGPRq54/maxresdefault.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/4/4c/FRC_Israel_2012_basketball.JPG",
	"http://www.eastcobbrobotics.org/wp/wp-content/uploads/2017/03/ECR-Columbus.jpg",
	"https://i.ytimg.com/vi/nQzIfNrbslY/maxresdefault.jpg",
	"https://static1.squarespace.com/static/562a4821e4b05e1ace333fae/t/5730b2501d07c088bf71337c/1462812765777/5+Ways+FIRST+is+More+than+Robots+-+FRC+high+school+robotics+competition"
	];

function initial() {
	document.getElementById("imgBackgroundFront").src = pictures[Math.floor(Math.random()*pictures.length)];
	picture = pictures[Math.floor(Math.random()*pictures.length)];
	console.log(picture);
	document.getElementById("imgBackgroundBack").src = picture;
	updateClock();
}

function updateClock() {
	time = 1515252600-Math.round(Date.now() / 1000);
	document.getElementById("days").innerHTML = Math.floor(time/86400);
	document.getElementById("hours").innerHTML = Math.floor((time/3600)%24);
	document.getElementById("minutes").innerHTML = Math.floor((time/60)%60);
	document.getElementById("seconds").innerHTML = Math.floor(time%60);
	
	if ((Math.floor(time%60) > 55) && (document.getElementById("imgBackgroundFront").style.opacity == 1)) {
		document.getElementById("imgBackgroundFront").style.opacity = 0;
	}
	
	setTimeout(updateClock, 1000);
}

function swapPictures() {
	document.getElementById("imgBackgroundFront").src = picture;
	document.getElementById("imgBackgroundFront").style.opacity = 1;
	picture = pictures[Math.floor(Math.random()*pictures.length)];
	setTimeout(function(){
		document.getElementById("imgBackgroundBack").src = picture;
	}, 500);
}