        //dom
const resultDiv = document.getElementById('result');
const lenghtBox = document.getElementById('length');
const uppercaseChk = document.getElementById('uppercase');
const lowercaseChk = document.getElementById('lowercase');
const numbersChk = document.getElementById('numbers');
const symbolsChk = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const clipboardBtn = document.getElementById('clipboard');


const randomFunc = {
    lower: getRandomLowerCase,
    upper: getRandomUpperCase,
    number: getRandomNumbers,
    symbols: getRandomSymbols
}


//Click para gerar

generateBtn.addEventListener('click', () => {
    const length = +lenghtBox.value;
    const chkLower = lowercaseChk.checked;
    const chkUpper = uppercaseChk.checked;
    const chkNumber = numbersChk.checked;
    const chkSymbol = symbolsChk.checked;

    resultDiv.innerText = generatePassword(chkLower, chkUpper, chkNumber, chkSymbol, length);
});


// Random ?Senha? 
function generatePassword(lower, upper, number, symbols, lenght) {
    let password = '';
    const typeCount = lower + upper + number + symbols;
    const typeArray = [{ lower }, { upper }, { number }, { symbols }].filter
        (item => Object.values(item)[0]);

    if (typeCount === 0) {
        return '';
    }

    for (let i = 0; i < lenght; i += typeCount) {
        typeArray.forEach(type => {
            const funcName = Object.keys(type)[0];
            password += randomFunc[funcName]();
        });
    } 
    return password;
}

function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomSymbols() {
    const symbols = '!@#$%^&*(){}[]=<>/º¢';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandomNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}