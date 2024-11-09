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
var field = document.getElementById("field");
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
} function Base(num = Num['a'], base = Num['b']) {
	return BaseComp(math.re(num)) + " + " + BaseComp(math.im(num)) + "i";
} function BaseComp(num = Num['a'], base = Num['b']) {
	if (num == 0) {
		return num
	}
	temp = num;
	diff = num;
	res = "";
	magnitude = math.floor(math.log(num, base));
	total = 0;
	while (diff != 0) {
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
	console.log(res)
	return res
} function Dec(num, base) {
	return DecComp(math.re(num), base) + " + " + DecComp(math.im(num), base) + "i";
} function DecComp(num, base) {
	if (num == 0) {
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


//Function Handler
function Fn(op, num = Num['a'], op2) {
	try {
		ans = op(num);
		if (op2 != null) {
			ans = op2(ans)
		}
		Dyn.alert(ans);
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
		field.value = Num[num];
		field.select();
	}
}
function Input(value = field.value) {
	if (value == "debug") {
		Debug.state = !Debug.state;
		if (Debug.state) {
			Dyn.alert("Debug Mode enabled.");
		} else {
			Dyn.alert("Debug Mode disabled.");
		}
		return;
	}
	try {
		Num.set(Request.num, value);
		if (Request.op) {
			ans = math.complex(Request.op(Num['a'], Num['b']));
			console.log(Request.op.name + "(" + Num['a'] + ", " + Num['b'] + ") = " + ans)
			Dyn.alert(ans);
			Num.set();
		} else {
			Dyn.alert(Request.num + " set to " + Num[Request.num]);
		}
	} catch (error) {
		Dyn.alert(error);
		console.log(error);
	}
	Mode.set(Mode.outputOptions);
}

//Startup
Request.send('a');