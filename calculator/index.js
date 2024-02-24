//TODO: add a way to start with a negative number
const display = document.getElementById('display');
const $buttons = document.querySelectorAll('.operation');
const result = document.querySelector('.result');
const clear = document.querySelector('.clear');
const deleteLastInput = document.querySelector('.delete-last');
const negativeNumber = document.querySelector('.negative');
let finalResult = false;
let lastInput = 'operator';
let currentValue = '';
let operation = '';
let nextValue = '';

const addValueToInput = (input) => {
  //TODO: improve the code tomake it more clean
  if(!isNaN(input) || input == '.'){
    if(lastInput == 'operator' && operation.length < 1){
      operation = display.value;
      display.value = ''
      lastInput = 'number';
    }
  } else {
    debugger
    if(lastInput == 'number' && !nextValue){
      if(!currentValue){
        currentValue = display.value;
      }
      //TODO: work on the behavior once a new operator is asign and there currently is a final result
      if(currentValue && operation){
        operate();
        return
      }
      display.value = ''
      lastInput = 'operator'
    }
  }

  //TODO: work on where and when to display (?)
  display.value += input;
}

//function to check if an input is a number or a dot
function isNumberOrDot(elm){
  if(!isNaN(elm) || elm == '.'){
    return true;
  } else {
    return false;
  }
}

//TODO: figure if i will fraction this onto multiple functions to work as one
const checkValidInput = (btn) => {
  const input = btn.innerHTML;
  //prevents the user from pushing a number or a dot input if there is a current final result
  //FIX: allows user to put a dot in the final result
  if(finalResult == true && isNumberOrDot(input)) return false;
  //prevents the user from input a operator or a dot before a number if there are no numbers yet
  if(display.value.length < 1 && isNaN(input)) return false;
  //prevents the user from pushin an operator input such as +-/* if there is already one
  if(display.value.match(/[+-\/*]$/gm) && isNaN(input)) return false;
  //prevents the user from adding a second dot if there is already a number with a dot on it, meaning a float or decimal
  if(display.value.includes('.') && input == '.'){
    return false;
  } else {
    finalResult = false;
  }
  return true;
}

$buttons.forEach(btn => btn.addEventListener('click', () => {
  if(checkValidInput(btn)){
    addValueToInput(btn.innerHTML)
  } else {
    return
  }
}));

const sum = () => {
  return Number(currentValue) + Number(nextValue);
}
const substract = () => {
  return Number(currentValue) - Number(nextValue);
}
const multiply = () => {
  return Number(currentValue) * Number(nextValue);
}
const divide = () => {
  return Number(currentValue) / Number(nextValue);
}

const operate = () => {
  finalResult = true;
  nextValue = display.value;

  switch (operation) {
    case '+':
      currentValue = sum();
      break;
    case '-':
      currentValue = substract();
      break
    case '*':
      currentValue = multiply();
      break
    case '/':
      currentValue = divide();
      break
  
    default:
      break;
  }

  nextValue = '';
  operation = '';

  if(currentValue % 1 === 0){
    display.value = currentValue;
  } else {
    display.value = currentValue.toFixed(2);
  }
}

const deleteLastInputInDisplay = () => {
  if(finalResult == true){
    clearDisplay();
  }else{
    display.value = display.value.slice(0, -1);
  }
}

result.addEventListener('click', operate);

function clearDisplay() {
  finalResult = false;
  currentValue = '';
  operation = '';
  nextValue = '';
  display.value = '';
}

clear.addEventListener('click', clearDisplay)

deleteLastInput.addEventListener('click', deleteLastInputInDisplay)