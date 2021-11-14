
import { processValue } from "./modules/fonctionnalités.js";
import { handleSymbol } from "./modules/fonctionnalités";
import { backSpace } from "./modules/fonctionnalités";
import { clearScreen } from "./modules/fonctionnalités";
import { handleNumber } from "./modules/fonctionnalités";
import { renderValue } from "./modules/fonctionnalités";
import { storeValue } from "./modules/fonctionnalités";
import { doMath } from "./modules/fonctionnalités";

let calculator = document.querySelector(".calculator");
let display = document.querySelector(".display");
calculator.addEventListener('click', function(e){
    value = e.target.innerText;
    console.log(value);
    processValue(value);
})

handleSymbol()
backSpace()
clearScreen()
handleNumber()
renderValue()
storeValue()
doMath()






//################## LECTURE DES TOUCHES CLIQUÉES DE LA CALCULATRICE ##########################

let value = '';
let bufferedValue = '';
let previousOperator = null;
let firstNumber = '';
let secondNumber = '';
let result = '';
