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
function Factorial() {
	return math.gamma(math.add(Num['a'],1));
} function Triangle() {
	return math.divide(math.add(math.square(Num['a']),Num['a']), 2)
} function Deg2Rad() {
	return math.multiply(Num['a'], math.divide(Math.PI, 180));
} function Rad2Deg() {
	return math.multiply(Num['a'], math.divide(180, Math.PI));
} function RandomInteger() {
	return math.randomInt(0, Number(Num['a']));
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

/* WIP: Switching between degree mode and radian mode
and being able to use all trig functions properly

var Angle = {
	unit: 'rad',
	Mode: function(newMode) {
		Dyn.alert("[deg] and [rad] are currently disabled.");
		this.unit = newMode;
		Debug.msg(this);
	},
	fn: function(op) {
		try {
			ans = op(math.unit(Num['a'], this.unit));
			Dyn.alert(ans);
			console.log(op.name + "(" + Num['a'] + ") = " + ans)
			Num.set();
		} catch (error) {
			Dyn.alert(error);
			console.log(error);
		}
	},
	afn: function(op) {
		try {
			ans = op(math.unit(Num['a'], this.unit));
			Dyn.alert(ans);
			console.log(op.name + "(" + Num['a'] + ") = " + ans)
			Num.set();
		} catch (error) {
			Dyn.alert(error);
			console.log(error);
		}
	}
}
*/

//Function Handler
function Fn(op, num = Num['a']) {
	try {
		ans = op(Num['a']);
		Dyn.alert(ans);
		console.log(op.name + "(" + Num['a'] + ") = " + ans)
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