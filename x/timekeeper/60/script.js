function TickTime() {
	var date = new Date();
	var workingTime = (date.getHours() * 3600000) + (date.getMinutes() * 60000) + (date.getSeconds() * 1000) + date.getMilliseconds();
	minutesOfDay = Math.floor(workingTime / 1440000)
	workingTime -= minutesOfDay * 1440000
	secondsOfDay = Math.floor(workingTime / 24000)
	workingTime -= secondsOfDay * 24000
	tiercesOfDay = Math.floor(workingTime / 400)

	minutesOfDay = (minutesOfDay < 10) ? "0" + minutesOfDay : minutesOfDay;
	secondsOfDay = (secondsOfDay < 10) ? "0" + secondsOfDay : secondsOfDay;
	tiercesOfDay = (tiercesOfDay < 10) ? "0" + tiercesOfDay : tiercesOfDay;

	document.getElementById("clock").innerText = minutesOfDay + ":" + secondsOfDay + ":" + tiercesOfDay;
}
setInterval(TickTime, 400);