//TODO: add a way to start with a negative number
const display = document.getElementById('display');
const $buttons = document.querySelectorAll('.operation');
const result = document.querySelector('.result');
const clear = document.querySelector('.clear');
const deleteLastInput = document.querySelector('.delete-last');
const negativeNumber = document.querySelector('.negative');
let finalResult = false;
//TODO: change the whole behavior of the calculator, only a number can be on display at the time, same goes for the mathematical operaator
//creation of new variables where we will store the values
//there must be a difference between the button that push operators and numbers in order to overwrite the current values being display on screen
let lastInput = 'operator';
let currentValue = '';
let operation = '';
let nextValue = '';

const addValueToTheInput = (input) => {
  //TODO: add the logic to evaluate and asign the corresponding values to each variable and reste the input
  if(!isNaN(input) || input == '.'){
    if(lastInput == 'operator'){
      display.value = ''
      lastInput = 'number';
    }
    console.log(`${input} is a number... or a dot idk man\nwe are using ${lastInput}!`)
    //display.value += input;
  } else {
    if(lastInput == 'number'){
      display.value = ''
      lastInput = 'operator'
    }
    console.log(`${input} is not a number\nwe are using ${lastInput}!`)
    // display.value += input;
  }
  display.value += input;
}

//TODO: readjust in order to work with a single string, which is the way it will be operate later on
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
    addValueToTheInput(btn.innerHTML)
  } else {
    return
  }
}));

//TODO: change in order to make sure to not use the eval function, must create the proper functions to evaluate and make the corresponding operations
const operate = () => {
  finalResult = true;
  let resultToDisplay = eval(display.value);
  resultToDisplay % 1 === 0 ? display.value = resultToDisplay : display.value = resultToDisplay.toFixed(2);
}

const deleteLastInputInDisplay = () => {
  display.value = display.value.slice(0, -1)
}

result.addEventListener('click', operate);

clear.addEventListener('click', () => {
  finalResult = false;
  display.value = '';
})

deleteLastInput.addEventListener('click', () => deleteLastInputInDisplay())