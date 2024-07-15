//Cálculos
var aha = document.getElementById('ahan')

var firstNumber = document.getElementById('numero1')
var secondNumber = document.getElementById('numero2')

//sla prr
var ForFirst = true;
var maisOuMenos = document.getElementById('slamais')

//Add Functions
function applySom() {
    ForFirst = false;
    maisOuMenos.innerHTML = "+"
}

function applySub() {
    ForFirst = false;
    maisOuMenos.innerHTML = "-"
}

function applyMul() {
    ForFirst = false;
    maisOuMenos.innerHTML = "x"
}

function applyDiv() {
    ForFirst = false;
    maisOuMenos.innerHTML = ":"
}

function applyPot() {
    ForFirst = false;
    maisOuMenos.innerHTML = "^"
}

function add1() {
    if (ForFirst) {
        firstNumber.innerHTML += "1";
        } else if (!ForFirst) {
        secondNumber.innerHTML += "1";
        }
        aha.innerHTML = null;   
}

function add2() {
    if (ForFirst) {
        firstNumber.innerHTML += "2";
        } else if (!ForFirst) {
        secondNumber.innerHTML += "2";
        }
        aha.innerHTML = null;   
}

function add3() {
    if (ForFirst) {
        firstNumber.innerHTML += "3";
        } else if (!ForFirst) {
        secondNumber.innerHTML += "3";
        }
        aha.innerHTML = null;   
}

function add4() {
    if (ForFirst) {
        firstNumber.innerHTML += "4";
        } else if (!ForFirst) {
        secondNumber.innerHTML += "4";
        }
        aha.innerHTML = null;
}

function add5() {
    if (ForFirst) {
        firstNumber.innerHTML += "5";
        } else if (!ForFirst) {
        secondNumber.innerHTML += "5";
        }
        aha.innerHTML = null;   
}

function add6() {
    if (ForFirst) {
        firstNumber.innerHTML += "6";
        } else if (!ForFirst) {
        secondNumber.innerHTML += "6";
        }
        aha.innerHTML = null;   
}

function add7() {
    if (ForFirst) {
        firstNumber.innerHTML += "7";
        } else if (!ForFirst) {
        secondNumber.innerHTML += "7";
        }
        aha.innerHTML = null;   
}

function add8() {
    if (ForFirst) {
        firstNumber.innerHTML += "8";
        } else if (!ForFirst) {
        secondNumber.innerHTML += "8";
        }
        aha.innerHTML = null;   
}

function add9() {
    if (ForFirst) {
        firstNumber.innerHTML += "9";
        } else if (!ForFirst) {
        secondNumber.innerHTML += "9";
        }
        aha.innerHTML = null;   
}

function add0() {
    if (ForFirst) {
        firstNumber.innerHTML += "0";
        } else if (!ForFirst) {
        secondNumber.innerHTML += "0";
        }
        aha.innerHTML = null;   
}

//Cálculos - Function
function calc(){
//Adição    
   if (maisOuMenos.innerHTML === "+") {
    var valor1 = firstNumber.innerText;
    var valor2 = secondNumber.innerText;

    var resultadoSoma = Number(valor1) + Number(valor2)
    aha.innerHTML = `= ${resultadoSoma}`;
//Subtração
   } else if (maisOuMenos.innerHTML === "-") {
    var valor1 = firstNumber.innerText;
    var valor2 = secondNumber.innerText;
  
    var resultadoSubs = Number(valor1) - Number(valor2)
    aha.innerHTML = `= ${resultadoSubs}`;
//Multiplicação    
   } else if (maisOuMenos.innerHTML === "x") {
    var valor1 = firstNumber.innerText;
    var valor2 = secondNumber.innerText;
  
    var resultadoMult = Number(valor1) * Number(valor2)
    aha.innerHTML = `= ${resultadoMult}`;
//Divisão
   } else if (maisOuMenos.innerHTML === ":") {
    var valor1 = firstNumber.innerText;
    var valor2 = secondNumber.innerText;
  
    var resultadoDivs = Number(valor1) / Number(valor2)
    aha.innerHTML = `= ${resultadoDivs}`;
//Potência    
   } else if (maisOuMenos.innerHTML === "^") {
    var valor1 = firstNumber.innerText;
    var valor2 = secondNumber.innerText;

    var resultadoPot = Number(valor1) ** Number(valor2)
    aha.innerHTML = `= ${resultadoPot}`;
   }
   
}

function clearRes() {
    aha.innerHTML = "";
    firstNumber.innerText = "";
    secondNumber.innerText = "";
    ForFirst = true;
    maisOuMenos.innerHTML = "";
}