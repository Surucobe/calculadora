//TODO: add a way to start with a negative number
//TODO: create functions that pushes either number or operator and changes the last input
const display = document.getElementById('display');
const $buttons = document.querySelectorAll('.operation');
const result = document.querySelector('.result');
const clear = document.querySelector('.clear');
const deleteLastInput = document.querySelector('.delete-last');
const negativeNumber = document.querySelector('.negative');
let finalResult = false;
let lastInput = true;
let currentValue = '';
let operation = '';
let nextValue = '';

//function to check if an input is a number or a dot
function isNumberOrDot(elm){
  if(!isNaN(elm) || elm == '.'){
    return true;
  } else {
    return false;
  }
}

function toggleLastInput(elm){
  lastInput = isNumberOrDot(elm)
}

const addValueToInput = (input) => {
  debugger
  //TODO: improve the code to make it more clean
  //this one evaluate when the input is a number or a dot
  if(isNumberOrDot(input)){
    if(lastInput == false && operation.length < 1){
      operation = display.value;
      display.value = ''
      toggleLastInput(input)
    }else if(finalResult == true && lastInput == false){
      display.value = '';
      toggleLastInput(input);
    }
  } else {
    //this one evaluates when the input is not a number or a dot
    if(lastInput == true){
      if(!currentValue){
        currentValue = display.value;
      }
      //TODO: work on the behavior once a new operator is asign and there currently is a final result
      if(currentValue && operation){
        operate();
        operation = input;
        toggleLastInput(input);
        return;
      }
      display.value = '';
      toggleLastInput(input)
    }
  }

  //TODO: work on where and when to display (?)
  display.value += input;
}

//TODO: figure if i will fraction this onto multiple functions to work as one
const checkValidInput = (btn) => {
  const input = btn.innerHTML;
  //prevents the user from pushing a number or a dot input if there is a current final result
  if(finalResult == true && input == '.') return false;
  //prevents the user from input a operator or a dot before a number if there are no numbers yet
  if(display.value.length < 1 && isNaN(input)) return false;
  //prevents the user from pushin an operator input such as +-/* if there is already one
  if(display.value.match(/[+-\/*]$/gm) && isNaN(input)) return false;
  //prevents the user from adding a second dot if there is already a number with a dot on it, meaning a float or decimal
  if(display.value.includes('.') && input == '.'){
    return false;
  } else {
    //TODO: figure out why i did this
    // finalResult = false;
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

function transformNumber() {
  let valueReturned;
  if(currentValue % 1 === 0){
    valueReturned = currentValue;
  } else {
    valueReturned = currentValue.toFixed(2);
  }
  return valueReturned;
}

const operate = () => {
  nextValue = display.value;
  debugger
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
  
  if(finalResult == false){
    display.value = transformNumber();
    operation = '';
    finalResult = true;
  }else{
    display.value = transformNumber();
    toggleLastInput();
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