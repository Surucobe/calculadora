//TODO: add a way to start with a negative number
const display = document.getElementById('display');
const $buttons = document.querySelectorAll('.operation');
const result = document.querySelector('.result');
const clear = document.querySelector('.clear');
const deleteLastInput = document.querySelector('.delete-last');
let finalResult = false;

const addValueToTheInput = (input) => {
  display.value += input;
}

const checkValidInput = (btn) => {
  if(finalResult == true && !isNaN(btn.innerHTML)) return false;
  if(display.value.length < 1 && isNaN(btn.innerHTML)) return false;
  if(display.value.match(/[+-\/*]$/gm) && isNaN(btn.innerHTML)) return false;
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
  let resultToDisplay = Number(eval(display.value));
  if(resultToDisplay % 1 === 0){
    display.value = resultToDisplay;
  } else {
    display.value = resultToDisplay.toFixed(2);
  }
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