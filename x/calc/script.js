var num1
var result
var originalBase
var tempNum
function Reset() {
    num1 = prompt("First Number", "2");
} 
Reset();
function GetOperation(op) {
    var num2 = prompt("Second Number", "2");
    if (op == "+") {
	    result = Number(num1)+Number(num2);
    } else if (op == "−") {
		result = Number(num1)-Number(num2);
    } else if (op == "×") {
		result = Number(num1)*Number(num2);
    } else if (op == "÷") {
		result = Number(num1)/Number(num2);
    } else if (op == "%") {
		result = Number(num1)%Number(num2);
    } else if (op == "^") {
		result = Number(num1)**Number(num2);
    } else if (op == "√") {
		result = Number(num1)**(1 / (Number(num2)));
    } else if (op == "log") {
		result = Math.log(num1) / Math.log(num2);
    } else if (op == "%") {
		result = Number(num1)%Number(num2);
    } else if (op == "hyp") {
		result = Math.hypot(num1, num2);
    } else if (op == "average") {
		result = (Number(num1) + Number(num2))/2;
    } else if (op == "in base") {
		if (num2 == "10") {
			originalBase = prompt("Original Base", "10");
			result = parseInt(num1, originalBase);
		} else {
		result = Number(num1).toString(num2);
		}
	} else {
		window.alert("Error: Unknown Operation");
	} window.alert(num1 + " " + op + " " + num2 + " = " + result);
	num1 = result;
	window.alert("You can now do math with the result or press a blue button to start a new calculation");
}
function GetFactorial() {
	tempNum = Number(num1);
	for(i = tempNum - 1; i >= 1; i--) {
		tempNum = tempNum * i;
	}
	window.alert(num1 + "! = " + tempNum);
	return tempNum
} function GetTriangle() {
	tempNum = Number(num1);
	for(i = tempNum - 1; i >= 1; i--) {
		tempNum = tempNum + i;
	}
	return tempNum
} function DegreesToRadians() {
	return num1 * (Math.PI / 180);
} function RadiansToDegrees() {
	return num1 / (Math.PI / 180);
} function RandomInteger() {
	return Math.round(Math.random() * num1);
} function CoTangent() {
	return 1 / Math.tan(num1);
} function HyperbolicCoTangent() {
	return 1 / Math.tanh(num1);
} function ArcCoTangent() {
	return Math.PI / 2 - Math.atan(num1);
} function HyperbolicArcCoTangent() {
	return (Math.log((1/num1)+1) - Math.log(1-(1/num1))) / 2
} function Secant() {
	return 1 / Math.cos(num1);
} function HyperbolicSecant() {
	return 1 / Math.cosh(num1);
} function CoSecant() {
	return 1 / Math.sin(num1);
} function HyperbolicCoSecant() {
	return 1 / Math.sinh(num1);
} var functions = {
	"!": GetFactorial,
	"triangle": GetTriangle,
	"abs": Math.abs,
	"sign": Math.sign,
	"ln": Math.log,
	"e ^": Math.exp,
	"round": Math.round,
	"random number between 0 and": RandomInteger,
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
	result = functions[op](num1);
	if (op != "!" && op != "abs") {
		window.alert(op + " " + num1 + " = " + result);
	} else if (op == "abs") {
		window.alert("|" + op + "| = " + result)
	} num1 = result;
	window.alert("You can now do math with the result or press a blue button to start a new calculation");
}
var constants = {
	"π": Math.PI,
	"e": Math.E,
	"φ": 1.61803398874989484820,
}
function GetConstant(op) {
	num1 = constants[op]
	if (op == "?") {
		num1 = Math.random();
	}
	window.alert("First Number is Set to " + num1);
}