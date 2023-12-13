var num = [0,0,0,0];
var result;
var originalBase;
var tempNum;
var dyn = document.getElementById("dyn");
var field = document.getElementById("field");
var confirmButton = document.getElementById("confirmButton");
var numRequested;
var opRequested;
function DoAlert(q) {
	dyn.innerHTML = "<b>Calculator Experiment v6.0.0</b><br>" + q;
} function DoPrompt(q) {
	DoAlert(q);
	return field.value;
} function GetOperation(op) {
    if (op == "+") {
	    result = Number(num[0])+Number(num[1]);
    } else if (op == "−") {
		result = Number(num[0])-Number(num[1]);
    } else if (op == "*") {
		result = Number(num[0])*Number(num[1]);
    } else if (op == "/") {
		result = Number(num[0])/Number(num[1]);
    } else if (op == "%") {
		result = Number(num[0])%Number(num[1]);
    } else if (op == "^") {
		result = Number(num[0])**Number(num[1]);
    } else if (op == "sqrt") {
		result = Number(num[0])**(1 / (Number(num[1])));
    } else if (op == "log") {
		result = Math.log(num[0]) / Math.log(num[1]);
    } else if (op == "%") {
		result = Number(num[0])%Number(num[1]);
    } else if (op == "hyp") {
		result = Math.hypot(num[0], num[1]);
    } else if (op == "average") {
		result = (Number(num[0]) + Number(num[1]))/2;
    } else if (op == "base") {
		result = Number(num[0]).toString(num[1]);
	} else if (op == "dec") {
		result = parseInt(num[0], num[1]);
	} else {
		DoAlert("Error: Unknown Operation");
	} DoAlert(result);
	num[0] = result;
	//DoAlert("You can now do math with the result or press a blue button to start a new calculation");
} function GetFactorial() {
	tempNum = Number(num[0]);
	for(i = tempNum - 1; i >= 1; i--) {
		tempNum = tempNum * i;
	}
	DoAlert(num[0] + "! = " + tempNum);
	return tempNum
} function GetTriangle() {
	tempNum = Number(num[0]);
	for(i = tempNum - 1; i >= 1; i--) {
		tempNum = tempNum + i;
	}
	return tempNum
} function DegreesToRadians() {
	return num[0] * (Math.PI / 180);
} function RadiansToDegrees() {
	return num[0] / (Math.PI / 180);
} function RandomInteger() {
	return Math.round(Math.random() * num[0]);
} function CoTangent() {
	return 1 / Math.tan(num[0]);
} function HyperbolicCoTangent() {
	return 1 / Math.tanh(num[0]);
} function ArcCoTangent() {
	return Math.PI / 2 - Math.atan(num[0]);
} function HyperbolicArcCoTangent() {
	return (Math.log((1/num[0])+1) - Math.log(1-(1/num[0]))) / 2
} function Secant() {
	return 1 / Math.cos(num[0]);
} function HyperbolicSecant() {
	return 1 / Math.cosh(num[0]);
} function CoSecant() {
	return 1 / Math.sin(num[0]);
} function HyperbolicCoSecant() {
	return 1 / Math.sinh(num[0]);
} var functions = {
	"!": GetFactorial,
	"triangle": GetTriangle,
	"abs": Math.abs,
	"sign": Math.sign,
	"ln": Math.log,
	"e ^": Math.exp,
	"round": Math.round,
	"rng": RandomInteger,
	"sin": Math.sin,
	"asin": Math.asin,
	"tan": Math.tan,
	"atan": Math.atan,
	"sec": Secant,
	"rad": DegreesToRadians,
	"hyp": Math.hypot,
	"sinh": Math.sinh,
	"asinh": Math.asinh,
	"tanh": Math.tanh,
	"atanh": Math.atanh,
	"sech": HyperbolicSecant,
	"cosh": Math.cos,
	"acosh": Math.acos,
	"cot": CoTangent,
	"acot": ArcCoTangent,
	"csc": CoSecant,
	"deg": RadiansToDegrees,
	"cosh": Math.cosh,
	"acosh": Math.acosh,
	"coth": HyperbolicCoTangent,
	"acoth": HyperbolicArcCoTangent,
	"csch": HyperbolicCoSecant,
}
function GetFunction(op) {
	if(num[0] == null) {
		return
	}
	result = functions[op](num[0]);
	DoAlert(result)
	num[0] = result;
}
function RequestInput(numID, op) {
	field.style.display = "block";
	confirmButton.style.display = "block";
	numRequested = numID;
	opRequested = op;
	DoAlert("Please input a value for Number " + numRequested);
}
function DoInput(type, value) {
	if(num[0] == null) {
		return
	}
	if (type == "c") {
		num[numRequested] = value;
	} else if (type == "f") {
		num[numRequested] = field.value;
	} else if (type == "v") {
		num[numRequested] = num[value];
	} else {
		num[numRequested] = "ERROR"
	}
	//console.log(numRequested + " -> " + num[numRequested]);
	if (opRequested != null) {
		GetOperation(opRequested);
	} else {
		DoAlert("Number " + numRequested + " set to " + num[0]);
	}
	field.style.display = "none";
	confirmButton.style.display = "none";
}
RequestInput(0);