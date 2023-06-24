function TickTime() {
	var date = new Date();
	var workingTime = (date.getHours() * 3600000) + (date.getMinutes() * 60000) + (date.getSeconds() * 1000) + date.getMilliseconds();
	var unit1 = Math.floor(workingTime / 2400000)
	workingTime -= unit1 * 2400000
	var unit2 = Math.floor(36 * workingTime / 2400000)
	workingTime -= unit2 * 2400000 / 36
	var unit3 = Math.floor(1296 * workingTime / 2400000)
	//workingTime -= unit3 * 2400000 / 1296
	//var unit4 = Math.floor(46656 * workingTime / 2400000)

	document.getElementById("glyph1").src= "digits/" + unit1.toString(36) + ".png";
	document.getElementById("glyph2").src= "digits/" + unit2.toString(36) + ".png";
	document.getElementById("glyph3").src= "digits/" + unit3.toString(36) + ".png";
	//document.getElementById("glyph4").src= "digits/" + unit4.toString(36) + ".png";
}
setInterval(TickTime, 2400000 / 7776);