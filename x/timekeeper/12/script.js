function TickTime() {
	var date = new Date();
	var year = date.getFullYear()
	var workingTime = (date.getHours() * 3600000) + (date.getMinutes() * 60000) + (date.getSeconds() * 1000) + date.getMilliseconds();
	unciadays = Math.floor(workingTime / 7200000)
	workingTime -= unciadays * 7200000
	biciadays = Math.floor(workingTime / 600000)
	workingTime -= biciadays * 600000
	triciadays = Math.floor(workingTime / 50000)
	workingTime -= triciadays * 50000
	quadciadays = Math.floor(workingTime / (50000 / 12))
	workingTime -= quadciadays * (50000 / 12)
	pentciadays = Math.floor(workingTime / (50000 / 144))

	if(unciadays == 10) {
	unciadays = "X"
	} else if (unciadays == 11) {
		unciadays = "E"
	}

	if(biciadays == 10) {
		biciadays = "X"
	} else if (biciadays == 11) {
		biciadays = "E"
	}

	if(triciadays == 10) {
		triciadays = "X"
	} else if (triciadays == 11) {
		triciadays = "E"
	}

	if(quadciadays == 10) {
		quadciadays = "X"
	} else if (quadciadays == 11) {
		quadciadays = "E"
	}

	if(pentciadays == 10) {
		pentciadays = "X"
	} else if (pentciadays == 11) {
		pentciadays = "E"
	}

	document.getElementById("clock").innerText = date.getFullYear() + "." + date.getMonth() + "/" + date.getDate() + "." + unciadays + "" + biciadays + "" + triciadays + "" + quadciadays + "" + pentciadays;
}
setInterval(TickTime, 100);