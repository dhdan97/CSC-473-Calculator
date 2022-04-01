let divBtn=document.getElementById("div");
let multBtn=document.getElementById("mult");
let addBtn=document.getElementById("add");
let subBtn=document.getElementById("minus");
let dotBtn=document.getElementById("dot");
let eqBtn=document.getElementById("equals");

let n1=document.getElementById("one");
let n2=document.getElementById("two");
let n3=document.getElementById("three");
let n4=document.getElementById("four");
let n5=document.getElementById("five");
let n6=document.getElementById("six");
let n7=document.getElementById("seven");
let n8=document.getElementById("eight");
let n9=document.getElementById("nine");
let n0=document.getElementById("zero");
let textbox=document.getElementById("text-input");

let operand0 = "";
let operand1 = "";

let operandNum = 0; // 0 is show 1st operand, 1 is show 2nd operand
let currOperation = "noOperation";

let result = 0;

// function Redfunc(){
//     document.querySelector('body').style.background=red;
//     textbox.value=5;
// }

function changeOperand(operation) {
    operandNum = !operandNum;
    currOperation = operation;
}

function deleteLSD() {
    if (!operandNum) {
        operand0 = operand0.substring(0, operand0.length-1);
        DisplayValue(operand0)
    }
    else {
        operand1 = operand1.substring(0, operand1.length-1);
        DisplayValue(operand1)
    }
}

function peformCalculation() {
    switch (currOperation) {
        case "add":
            result = parseInt(operand0) + parseInt(operand1);
            break;
        case "subtract":
            result = parseInt(operand0) - parseInt(operand1);
            break;
        case "multiply":
            result = parseInt(operand0) * parseInt(operand1);
            break;
        case "divide":
                result = parseInt(operand0) / parseInt(operand1); // check for 0 divison later
                break;
        case "noOperation":
            break;
    }
    DisplayValue(result.toString());
    ResetCalculation();
}

function ResetCalculation() {
    changeOperand("noOperation");
    operand0 = "";
    operand1 = "";
}

function insertValue(number) {
    let operand;
    if(operandNum == 0) { // if in 1st operand
        operand0 = operand0 + number.toString();
        operand = operand0;
    }
    else {
        operand1 = operand1 + number.toString();
        operand = operand1;
    }
    DisplayValue(operand)
    //DisplayValue();
    //operand0 = operand0 + number.toString();
    //console.log(operand0);
}

function DisplayValue(value){
    //console.log("Displayvalue");
    document.getElementById("tb").value = value.toString();
    console.log(`\n\ncurrOperation: ${currOperation}\n`);
    console.log(`Operand 1: ${operand0}\n`);
    console.log(`Operand 2: ${operand1}`);
}


//alert("hello");