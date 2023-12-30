var num = [0,0,0,0];
var result;
var originalBase;
var tempNum;
var dyn = document.getElementById("dyn");
var numRequested;
var opRequested;

var field = document.getElementById("field");
var inputOptions = document.getElementById("inputOptions");
var outputOptions = document.getElementById("outputOptions");

function DoAlert(q) {
	dyn.innerHTML = q;
} function DoPrompt(q) {
	DoAlert(q);
	return field.value;
} function GetOperation(op) {
	switch (op) {
		case "+":
			result = Number(num[0]) + Number(num[1]);
			break;
		case "-":
			result = Number(num[0]) - Number(num[1]);
			break;
		case "*":
			result = Number(num[0]) * Number(num[1]);
			break;
		case "/":
			result = Number(num[0]) / Number(num[1]);
			break;
		case "%":
			result = Number(num[0]) % Number(num[1]);
			break;
		case "^":
			result = Number(num[0]) ** Number(num[1]);
			break;
		case "sqrt":
			result = Number(num[0]) ** (1 / (Number(num[1])));
			break;
		case "log":
			result = Math.log(num[0]) / Math.log(num[1]);
			break;
		case "%":
			result = Number(num[0])%Number(num[1]);
			break;
		case "hyp":
			result = Math.hypot(num[0], num[1]);
			break;
		case "average":
			result = (Number(num[0]) + Number(num[1]))/2;
			break;
		case "base":
			result = Number(num[0]).toString(num[1]);
			break;
		case "dec":
			result = parseInt(num[0], num[1]);
			break;
		default:
			DoAlert("Error: Unknown Operation");
			return;
	}
	DoAlert(result);
	num[0] = result;
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
	inputOptions.style.display = "block";
	outputOptions.style.display = "none";
	field.select();
	numRequested = numID;
	opRequested = op;
	DoAlert("Please input a value for Number " + (numRequested + 1));
}
function DoInput(type, value) {
	if(num[0] == null) {
		return
	}
	switch (type) {
		case "c":
			num[numRequested] = value;
			break;
		case "f":
			num[numRequested] = field.value;
			break;
		case "v":
			num[numRequested] = num[value];
			break;
		default:
			DoAlert("Error: Unknown Input Type");
			return;
	}
	if (opRequested != null) {
		GetOperation(opRequested);
	} else {
		DoAlert("Number " + (numRequested + 1) + " set to " + num[0]);
	}
	inputOptions.style.display = "none";
	outputOptions.style.display = "block";
}
RequestInput(0);