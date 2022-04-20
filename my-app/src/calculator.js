let operand0 = "";
let operand1 = "";

let operandNum = 0; // 0 is show 1st operand, 1 is show 2nd operand
let currOperation = "noOperation";

let result = 0;

// function Redfunc(){
//     document.querySelector('body').style.background=red;
//     textbox.value=5;
// }

function addDecimalPoint() {
    if (!operandNum) {
        operand0 = operand0 + "."
        DisplayValue(operand0)
    }
    else {
        operand1 = operand1 + "."
        DisplayValue(operand1)
    }
}

function changeOperand(operation) {
    if(operand0 === "") {
        operand0 = "0"
        DisplayValue(0)
    }
    operandNum = !operandNum;
    currOperation = operation;
    // DisplayValue(0)
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
    if(currOperation !== "noOperation" && operand0 !== "" && operand1 !== "") {
        switch (currOperation) {
            case "add":
                result = parseFloat(operand0) + parseFloat(operand1);
                break;
            case "subtract":
                result = parseFloat(operand0) - parseFloat(operand1);
                break;
            case "multiply":
                result = parseFloat(operand0) * parseFloat(operand1);
                break;
            case "divide":
                    result = parseFloat(operand0) / parseFloat(operand1); // check for 0 divison later
                    break;
            case "noOperation":
                break;
            default:
                break;
        }
        DisplayValue(result.toString());
        ResetCalculation();
    }
    else {
        console.log("No operation/operands selected");
    }
}

function ResetCalculation() {
    changeOperand("noOperation");
    operand0 = "";
    operand1 = "";
    operandNum = 0;
}

function ResetDisplay() {
    ResetCalculation()
    DisplayValue(0)
}

function insertValue(number) {
    let operand;
    if(operandNum === 0) { // if in 1st operand
        if(operand0 === "0") {
            if(number === 0) {
                return;
            }
            else {
                operand0 = number.toString();
                operand = operand0;
            }
        }
        else {
            operand0 = operand0 + number.toString();
            operand = operand0;
        }
    }
    else {
        if(operand1 === "0") {
            if(number === 0) {
                return;
            }
            else {
                operand1 = number.toString();
                //operand1 = operand1;
            }
        }
        else {
            operand1 = operand1 + number.toString();
            operand = operand1;
        }
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
    console.log(`Operand 2: ${operand1}\n`);
    console.log(`currOperand: ${operandNum}`)
}


//alert("hello");
module.exports = {addDecimalPoint, 
    changeOperand, 
    deleteLSD, 
    peformCalculation, 
    ResetCalculation, 
    ResetDisplay, 
    insertValue, 
    DisplayValue
};