//################# CLASSE CALCULATRICE ##########################

//  let calculator = document.querySelector(".calculator");
// let display = document.querySelector(".display");
// calculator.addEventListener('click', function(e){
//     value = e.target.innerText;
//     console.log(value);
//     processValue(value);
// })



export function processValue(value){
if (isNaN(parseInt(value))){
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
}


//#################### INITIALISATION DES SYMBOLE "C", "DEL", "=" ################

export function handleSymbol(value){
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

export function backSpace(){
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
export function clearScreen(){
    console.log('clearScreen');
    display.innerText = '0';
    bufferedValue = '';
}

//##################### AFFICHAGE DES NOMBRES DANS L'ÉCRAN ###########################
export function handleNumber(value){
    bufferedValue += value;
    console.log(bufferedValue);
    renderValue(bufferedValue);
}

export function renderValue(bufferedValue){
    display.innerText = bufferedValue;
}

//############ FONCTIONs QUI DÉCLENCHE LES DIFFÉRENTES OPÉRATIONS "+", "-", "*", "/" ########################

export function storeValue(value){
    previousOperator = value;
    firstNumber = parseInt(bufferedValue);
    bufferedValue = '';
    console.log(firstNumber);
    console.log(previousOperator);
}

export function doMath(firstNumber){
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