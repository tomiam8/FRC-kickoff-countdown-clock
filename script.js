var time;
function updateClock() {
	time = 1515252600-Math.round(Date.now() / 1000);
	document.getElementById("days").innerHTML = Math.floor(time/86400);
	document.getElementById("hours").innerHTML = Math.floor((time/3600)%24);
	document.getElementById("minutes").innerHTML = Math.floor((time/60)%60);
	document.getElementById("seconds").innerHTML = Math.floor(time%60);
	
	setTimeout(updateClock, 1000);
}