const display = document.getElementById('display');
const $buttons = document.querySelectorAll('.operation');
const result = document.querySelector('.result');
const clear = document.querySelector('.clear');
const deleteLastInput = document.querySelector('.delete-last');
const negativeNumber = document.querySelector('.negative');
let finalResult = false;
//the following is just purely cause i wanted to add this
const $date = document.querySelector('.date');
//true for numbers and false for operations
let lastInput = true;
let currentValue = '';
let operation = '';
let nextValue = '';
let isNegative = false;

//function to check if an input is a number or a dot
function isNumberOrDot(elm){
  if(!isNaN(elm) || elm == '.'){
    return true;
  } else {
    return false;
  }
};

//function to handle the toggle of the last input
function toggleLastInput(elm){
  lastInput = isNumberOrDot(elm)
};

const addValueToInput = (input) => {
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
  //this section evaluates when the input is not a number or a dot
  } else {
    //asign the current value on display to the current value variable
    if(lastInput == true){
      if(!currentValue){
        currentValue = display.value;
      }
      //section in charge to handle if a new operator has been pass and there is a pending operation
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
  display.value += input;
}

//TODO: figure if i will fraction this onto multiple functions to work as one
const checkValidInput = (btn) => {
  const input = btn.innerHTML;
  //prevents the user from pushing a number or a dot input if there is a current final result
  if(finalResult == true && input == '.') {
    return false;
  } else if(finalResult == true && isNumberOrDot(input) && display.value === '0'){
    return false;
  }
  //prevents the user from input a operator or a dot before a number if there are no numbers yet
  if(display.value.length < 1 && isNaN(input)) return false;
  //prevents the user from pushin an operator input such as +-/* if there is already one
  if(display.value.match(/[+-\/*]$/gm) && isNaN(input)) return false;
  //prevents the user from adding a second dot if there is already a number with a dot on it, meaning a float or decimal
  if(display.value.includes('.') && input == '.') return false;
  return true;
};

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

function handleResult() {
  let returnedValue;
  if(currentValue % 1 === 0){
    returnedValue = currentValue;
  } else {
    returnedValue = currentValue.toFixed(2);
  }
  return returnedValue;
};

const operate = () => {
  nextValue = display.value;
  if(operation == '/' && nextValue === '0'){
    display.value = 'Syntax Error'
    setTimeout(() => alert(`Attempt to divide by ${nextValue}`), '100')
    return
  }
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
      alert('Operation is not complete');
      return;
  }

  nextValue = '';
  operation = '';
  
  if(finalResult == false){
    display.value = handleResult();
    finalResult = true;
  }else{
    display.value = handleResult();
    toggleLastInput(display.value);
  }
  
};

const deleteLastInputInDisplay = () => {
  if(finalResult == true){
    clearDisplay();
  }else{
    display.value = display.value.slice(0, -1);
  }
};

result.addEventListener('click', operate);

function clearDisplay() {
  finalResult = false;
  currentValue = '';
  operation = '';
  nextValue = '';
  display.value = '';
};

function handleNegativeOpetion() {
  if(finalResult == true) return;
  if(display.value.length < 1) return;

  if(!isNegative){
    isNegative = !isNegative;
    display.value = '-' + display.value.slice(0);
  }else{
    isNegative = !isNegative;
    display.value = display.value.slice(1);
  }
}

negativeNumber.addEventListener('click', handleNegativeOpetion)
clear.addEventListener('click', clearDisplay);

deleteLastInput.addEventListener('click', deleteLastInputInDisplay);

function displayDate(){}

$date.addEventListener('click', displayDate)