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
} function Base(a, b) {
	switch (b) {
		case 2:
			return math.bin(a, b);
		case 8:
			return math.oct(a, b);
		case 16:
			return math.hex(a, b);
	}
	return math.re(a).toString(b) + " + " + math.im(a).toString(b) + "i";
} function Dec(a, b) {
	return parseInt(math.re(a), b) + " + " + parseInt(math.im(a), b) + "i";
}

var Angle = {
	button: document.getElementById("angleModeToggle"),
	unit: 'rad',
	flag: false,
	mode: function() {
		if(this.unit == 'rad') {
			this.unit = 'deg'
			if (this.flag) {
				Fn(Rad2Deg)
			}
		} else {
			this.unit = 'rad'
			if (this.flag) {
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
		this.flag = true;
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
	Angle.flag = false;
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
		debug = true;
		Dyn.alert("Debug Mode enabled.");
		return;
	}
	try {
		Num.set(Request.num, value);
		if (Request.op != undefined) {
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