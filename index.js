let firstNum = '';
let operator = '';
let secondNum = '';

const display =  document.querySelector(".content-display");


function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

document.querySelectorAll(".number").forEach(button => {
    button.addEventListener('click', () => {
        if (operator === ''){
            firstNum += button.textContent.trim();
            display.textContent = firstNum;
            console.log(firstNum);
        }
        else {
            secondNum += button.textContent.trim();
            display.textContent = secondNum;
            console.log(secondNum)
        }
    })
})

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        if (firstNum && operator && secondNum){
            firstNum = operate(firstNum, operator, secondNum);
            display.textContent = firstNum;
            secondNum = '';
        }
        operator = button.textContent.trim()
  
    })
})


function operate(firstNum, operator, secondNum){
    const a = Number(firstNum);
    const b = Number(secondNum);
    console.log(a);
    console.log(operator);
    console.log(b)
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "Invalid Operator";
    }

}
document.querySelector(".equal").addEventListener('click', () => {
    if (firstNum && operator && secondNum){
        const result = operate(firstNum, operator, secondNum);
        display.textContent = result;
        console.log({ firstNum, operator, secondNum });

        firstNum = result.toString();
        
        operator = '';        
        secondNum = '';
    }
})

document.querySelector(".clear").addEventListener("click", () => {
    
    if (operator === '') {
        firstNum = '';
        display.textContent = '0';
    }
    
    else {
        secondNum = '';
        display.textContent = '0';
    }
});

document.querySelector(".clear-all").addEventListener("click", () => {
    firstNum = '';
    secondNum = '';
    operator = '';
    display.textContent = '0';
});
