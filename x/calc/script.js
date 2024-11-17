const digitSet = [
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
	'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
	'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
	'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
	'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
	'Y', 'Z', '!', '@', '#', '$', '%', '^', '&', '*',
	':', ';'
]

//Values
var a_input = 0;
var ans = 0;
var Num = {
	a: 0,
	b: 0,
	x: 0,
	y: 0,
	set: function(key = 'a', value = ans) {
		value = math.complex(value);
		if (math.re(math.im(value)) == 0) {
			this[key] = math.re(value);
		} else {
			this[key] = value;
		}
		if (key == 'a' && Request.op == undefined) {
			a_input = this[key];
		}
		Debug.msg(Num);
	}
}

//System Functions
var Field = {
	element: document.getElementById("field"),
	set: function(num) {
		this.element.value = num;
		this.element.select();
	}, get: function() {
		value = this.element.value
		if (value == "debug") {
			return value
		}
		return Dec(value)
	}
}
var Dyn = {
	element: document.getElementById("dyn"),
	alert: function(q) {
		this.element.innerHTML = q;
	}
}
var Mode = {
	inputOptions: document.getElementById("inputOptions"),
	outputOptions: document.getElementById("outputOptions"),
	set: function(newMode) {
		inputOptions.style.display = "none";
		outputOptions.style.display = "none";
		newMode.style.display = "block";
	}
}
var Debug = {
	state: false,
	msg: function(q) {
		if (this.state == true) {
			console.log(q);
		}
	}
}


//Function/Operation Library
function Factorial(num = Num['a']) {
	return math.gamma(math.add(num,1));
} function Triangle(num = Num['a']) {
	return math.divide(math.add(math.square(num),num), 2)
} function Deg2Rad(num = Num['a']) {
	return math.multiply(num, math.divide(Math.PI, 180));
} function Rad2Deg(num = Num['a']) {
	return math.multiply(num, math.divide(180, Math.PI));
} function RandomInteger(num = Num['a']) {
	return math.randomInt(0, Number(num));
} function Base(num = Num['a'], base = Radix.value) {
	if (base == 10) {
		return num
	}
	reComp = math.re(num)
	imComp = math.im(num)
	if (reComp && imComp) {
		return Radix.base(reComp) + " + " + Radix.base(imComp) + "i";
	} else if (imComp) {
		return Radix.base(imComp) + "i";
	} else if (reComp) {
		return Radix.base(reComp);
	} else {
		return "0"
	}
} function Dec(num = Num['a'], base = Radix.value) {
	if (num == 0 || base == 10) {
		return num
	}
	components = num.split("+")
	reComp = components[0].split(" ")[0];
	try {
		imComp = components[1].split("i")[0].split(" ")[0];
	} catch {
		imComp = 0
	}
	return Radix.dec(reComp, base) + " + " + Radix.dec(imComp, base) + "i"
}
var Angle = {
	button: document.getElementById("angleModeToggle"),
	unit: 'rad',
	mode: function(event) {
		if(this.unit == 'rad') {
			this.unit = 'deg'
			if (event.shiftKey) {
				Fn(Rad2Deg)
			}
		} else {
			this.unit = 'rad'
			if (event.shiftKey) {
				Fn(Deg2Rad)
			}
		}
		this.button.innerHTML = this.unit
		Debug.msg(this);
	},
	fn: function(op, num = Num['a']) {
		Fn(op, math.unit(Num['a'], this.unit))
	},
	afn: function(op, num = Num['a']) {
		if (this.unit == 'deg') {
			Fn(op, num, Rad2Deg)
		} else {
			Fn(op)
		}
	}
}
var Radix = {
	button: document.getElementById("baseSetter"),
	value: 10,
	set: function(base) {
		if (this.value == 10) {
			if (Num['a'] >= 2 && Num['a'] <= 72) {
				this.value = Num['a'];
				this.button.innerHTML = "dec"
			} else {
				Dyn.alert("Base must be between 2 and 72.")
				return
			}
		} else {
			this.value = 10;
			this.button.innerHTML = "bse"
		}
		Dyn.alert("Base set to " + this.value)
		Debug.msg(this)
	}, base: function(num, base = this.value) {
		temp = num;
		diff = num;
		res = "";
		magnitude = math.floor(math.log(num, base));
		total = 0;
		while (magnitude >= 0 || diff != 0) {
			if (magnitude == -1) {
				res = res + ".";
			}
			factor = math.floor(temp / math.pow(base, magnitude));
			temp = temp % math.pow(base, magnitude);
			total += factor * math.pow(base, magnitude);
			magnitude -= 1;
			diff = num - total;
			res = res + digitSet[factor];
		}
		//console.log(res)
		return res
	}, dec: function(num, base = this.value) {
		if (num == 0 || base == 10) {
			return num;
		}
		sections = (num + "").split(".")
		highDigits = sections[0].split("");
		total = 0;
		highMagnitude = highDigits.length - 1;
		magnitude = highMagnitude;
		digit = 0;
		while (digit <= highMagnitude) {
			total += digitSet.indexOf(highDigits[digit]) * math.pow(base, magnitude);
			magnitude -= 1;
			digit += 1;
		}
		if (sections[1] != undefined) {
			lowDigits = sections[1].split("");
			lowMagnitude = lowDigits.length
			magnitude = -1 * lowMagnitude
			digit = 0
			while (digit < lowMagnitude) {
				total += digitSet.indexOf(lowDigits[digit]) * math.pow(base, magnitude);
				magnitude -= 1;
				digit += 1;
			}
		}
		return total
	}
}


//Function Handler
function Fn(op, num = Num['a'], op2) {
	try {
		ans = op(num);
		if (op2 != null) {
			ans = op2(ans)
		}
		Dyn.alert(Base(ans));
		console.log(op.name + "(" + num + ") = " + ans)
		Num.set();
	} catch (error) {
		Dyn.alert(error);
		console.log(error);
	}
}

//Input System
var Request = {
	num: undefined,
	op: undefined,
	send: function(num, op) {
		this.num = num;
		this.op = op;
		Debug.msg(Request);
		Dyn.alert("Please input a value for " + Request.num);
		Mode.set(Mode.inputOptions);
		Field.set(Base(Num[num]));
	}
}
function Input(value = Field.get()) {
	if (value == "debug") {
		Debug.state = !Debug.state;
		if (Debug.state) {
			Dyn.alert("Debug Mode enabled.");
		} else {
			Dyn.alert("Debug Mode disabled.");
		}
		return;
	} else if (value == "") {return}
	try {
		Num.set(Request.num, value);
		if (Request.op) {
			ans = math.complex(Request.op(Num['a'], Num['b']));
			console.log(Request.op.name + "(" + Num['a'] + ", " + Num['b'] + ") = " + ans)
			Dyn.alert(Base(ans));
			Num.set();
		} else {
			Dyn.alert(Request.num + " set to " + Base(Num[Request.num]));
		}
	} catch (error) {
		Dyn.alert(error);
		console.log(error);
	}
	Mode.set(Mode.outputOptions);
}

//Startup
Request.send('a');