var num1
function Reset() {
    num1 = prompt("First Number", "2");
} 
Reset();
var result
var originalBase
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
var tempNum
function GetFunction(op) {
	if (op == "!") {
		tempNum = Number(num1);
		for(i = tempNum - 1; i >= 1; i--) {
			tempNum = tempNum * i;
		}
		window.alert(num1 + "! = " + tempNum);
	} else if (op == "sin") {
		tempNum = Math.sin(num1);
	} else if (op == "asin") {
		tempNum = Math.asin(num1);
	} else if (op == "cos") {
		tempNum = Math.cos(num1);
	} else if (op == "acos") {
		tempNum = Math.acos(num1);
	} else if (op == "tan") {
		tempNum = Math.tan(num1);
	} else if (op == "atan") {
		tempNum = Math.atan(num1);
	} else if (op == "abs") {
		tempNum = Math.abs(num1);
	} else if (op == "ln") {
		tempNum = Math.log(num1);
	} else if (op == "round") {
		tempNum = Math.round(num1);
	} else if (op == "triangle") {
		tempNum = Number(num1);
		for(i = tempNum - 1; i >= 1; i--) {
			tempNum = tempNum + i;
		}
	} else if (op == "sign") {
		tempNum = Math.sign(num1);
	} else if (op == "e ^") {
		tempNum = Math.exp(num1);
	} else if (op == "sinh") {
		tempNum = Math.sinh(num1);
	} else if (op == "asinh") {
		tempNum = Math.asinh(num1);
	} else if (op == "cosh") {
		tempNum = Math.cosh(num1);
	} else if (op == "acosh") {
		tempNum = Math.acosh(num1);
	} else if (op == "tanh") {
		tempNum = Math.tanh(num1);
	} else if (op == "rad") {
		tempNum = num1 * (Math.PI / 180);
	} else if (op == "deg") {
		tempNum = num1 / (Math.PI / 180);
	} else if (op == "random number between 0 and") {
		tempNum = Math.round(Math.random() * num1);
	} else if (op == "cot") {
		tempNum = 1 / Math.tan(num1);
	} else if (op == "coth") {
		tempNum = 1 / Math.tanh(num1);
	} else if (op == "acot") {
		tempNum = Math.PI / 2 - Math.atan(num1);
	} else if (op == "acoth") {
		tempNum = (Math.log((1/num1)+1) - Math.log(1-(1/num1))) / 2
	} else if (op == "sec") {
		tempNum = 1 / Math.cos(num1);
	} else if (op == "sech") {
		tempNum = 1 / Math.cosh(num1);
	} else if (op == "csc") {
		tempNum = 1 / Math.sin(num1);
	} else if (op == "csch") {
		tempNum = 1 / Math.sinh(num1);
	} else {
		window.alert("Error: Unknown Function");
	} if (op != "!" && op != "abs") { window.alert(op + " " + num1 + " = " + tempNum); } num1 = tempNum;
	window.alert("You can now do math with the result or press a blue button to start a new calculation");
}
function GetConstant(op) {
	if (op == "π") {
		num1 = Math.PI;
	} else if (op == "e") {
		num1 = Math.E;
	} else if (op == "?") {
		num1 = Math.random();
	} else if (op == "φ") {
		num1 = 1.61803398874989484820
	} else {
		window.alert("Error: Unknown Constant");
	} window.alert("First Number is Set to " + num1);
}