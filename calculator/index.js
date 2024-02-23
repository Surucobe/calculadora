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
  //TODO: add the logic to evaluate and asign the corresponding values to each variable and reset the input
  if(!isNaN(input) || input == '.'){
    //FIX
    if(lastInput == 'operator' && operation.length < 1){
      operation = display.value;
      display.value = ''
      lastInput = 'number';
    }
  } else {
    if(lastInput == 'number' && !nextValue){
      if(!currentValue){
        currentValue = display.value;
      }
      display.value = ''
      lastInput = 'operator'
      //TODO: work on the behaviour of this funtion in order to better manipulate the results on screen
      if(currentValue && operation) operate()
    }
  }

  //TODO: work on where and when to display
  display.value += input;
}

//TODO: readjust in order to work with a single string, which is the way it will be operate later on
//figure if i will fraction this onto multiple functions to work as one
const checkValidInput = (btn) => {
  //prevents the user from pushing a number or a dot input if there is a current final result
  //FIX: allows user to put a dot in the final result
  if(finalResult == true && !isNaN(btn.innerHTML)) return false;
  //prevents the user from input a operator or a dot before a number if there are no numbers yet
  if(display.value.length < 1 && isNaN(btn.innerHTML)) return false;
  //prevents the user from pushin an operator input such as +-/* if there is already one
  if(display.value.match(/[+-\/*]$/gm) && isNaN(btn.innerHTML)) return false;
  //prevents the user from adding a second dot if there is already a number with a dot on it, meaning a float or decimal
  if(display.value.split(/[^0-9.]/).slice(-1)[0].includes('.') && btn.innerHTML == '.'){
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

//TODO: change in order to make sure to not use the eval function, must create the proper functions to evaluate and make the corresponding operations
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

  if(currentValue % 1 === 0){
    display.value = currentValue;
    nextValue = ''
    operation = ''
  } else {
    display.value = currentValue.toFixed(2);
    nextValue = '';
    operation = '';
  }
}

const deleteLastInputInDisplay = () => {
  //TODO: agregar condicional para manejar el comportamiento en caso de que haya habido un resultado final
  display.value = display.value.slice(0, -1);
}

result.addEventListener('click', operate);

clear.addEventListener('click', () => {
  finalResult = false;
  display.value = '';
})

deleteLastInput.addEventListener('click', () => deleteLastInputInDisplay())