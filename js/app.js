//################## LECTURE DES TOUCHES CLIQUÉES DE LA CALCULATRICE ##########################

let value = '';
let bufferedValue = '';
let previousOperator = null;
let firstNumber = '';
let secondNumber = '';
let result = '';

//################# CLASSE CALCULATRICE ##########################

let calculator = document.querySelector(".calculator");
let display = document.querySelector(".display");
calculator.addEventListener('click', function(e){
    value = e.target.innerText;
    console.log(value);
    processValue(value);
})

function processValue(value){
    if (isNaN(parseInt(value))){
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
}


//#################### INITIALISATION DES SYMBOLE "C", "DEL", "=" ################

function handleSymbol(value){
    switch (value){
        case 'C':
            clearScreen();
        break;
        case 'del':
            backSpace();
        break;
        case '=':
            if (previousOperator === null){
                return;
            } else {
                doMath(firstNumber);
            }
        break;
      default:
            storeValue(value);
    }
}

//######### FONCTION DES SYMBOLE "C", "DEL", "=" ############

function backSpace(){
    if (display.innerText === '0'){
        clearScreen();
    }
    else if (Number.isInteger(bufferedValue) ){
        return;
    } else {
        bufferedValue = bufferedValue.substring(0, bufferedValue.length-1);
        console.log(bufferedValue);
        display.innerText = bufferedValue;
        if (bufferedValue === ''){
            clearScreen();
        }
    }
}

//################" NETTOIE L'ÉCRAN EN UN COUP AVEC LA TOUCHE "C" ##############################
function clearScreen(){
    console.log('clearScreen');
    display.innerText = '0';
    bufferedValue = '';
}

//##################### AFFICHAGE DES NOMBRES DANS L'ÉCRAN ###########################
function handleNumber(value){
    bufferedValue += value;
    console.log(bufferedValue);
    renderValue(bufferedValue);
}

function renderValue(bufferedValue){
    display.innerText = bufferedValue;
}

//############ FONCTIONs QUI DÉCLENCHE LES DIFFÉRENTES OPÉRATIONS "+", "-", "*", "/" ########################

function storeValue(value){
    previousOperator = value;
    firstNumber = parseInt(bufferedValue);
    bufferedValue = '';
    console.log(firstNumber);
    console.log(previousOperator);
}

function doMath(firstNumber){
    console.log(firstNumber);
    secondNumber = parseInt(bufferedValue);
    console.log(secondNumber);
    if (previousOperator === '+'){
        bufferedValue = firstNumber + secondNumber;
        console.log(bufferedValue);
    }
    if (previousOperator === '-'){
        bufferedValue = firstNumber - secondNumber;
        console.log(result);
    }
    if (previousOperator === '×'){
        bufferedValue = firstNumber * secondNumber;
        console.log(result);
    }
    if (previousOperator === ':'){
        bufferedValue = firstNumber / secondNumber;
        console.log(result);
    }
    display.innerHTML = bufferedValue;
}
