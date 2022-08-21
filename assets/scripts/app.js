
const defaultResult =0;
let currentResult = defaultResult;

function add(){
    const enterNumber = parseInt(userInput.value);
    const calDescription = `${currentResult} + ${enterNumber}`;
    currentResult += enterNumber ;
    outputResult(currentResult,calDescription);
}

function substract() {
    const enterNumber = parseInt(userInput.value);
    const calDescription = `${currentResult} - ${enterNumber}`;
    currentResult -=  enterNumber ;
    outputResult(currentResult,calDescription);
}

function mutiply() {
    const enterNumber = parseInt(userInput.value);
    const calDescription = `${currentResult} * ${enterNumber}`;
    currentResult *= enterNumber ;
    outputResult(currentResult,calDescription);
}

function divide() {
    const enterNumber = parseInt(userInput.value);
    const calDescription = `${currentResult} / ${enterNumber}`;
    currentResult /= enterNumber ;
    outputResult(currentResult,calDescription);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',substract);
multiplyBtn.addEventListener('click',mutiply);
divideBtn.addEventListener('click',divide);

