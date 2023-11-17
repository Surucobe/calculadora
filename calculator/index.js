//Variables
const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const initialScreen = document.querySelector('.current-operand');
const previousOperationScreen = document.querySelector('.previous-operand');

const deleteButton = document.querySelector('.delete-button');
const cleanScreen = document.querySelector('.clear');
const result = document.querySelector('.result');

let input = '';

//functions
numberButtons.forEach((elm) => elm.addEventListener('click', () =>{
  input += (elm.innerHTML);
  console.log(input);
  renderChangesInScreen(initialScreen, elm.innerHTML);
}));

operatorButtons.forEach((elm) => elm.addEventListener('click', () => {
  input += (elm.innerHTML);
  console.log(input);
  renderChangesInScreen(initialScreen, elm.innerHTML);
}));

cleanScreen.addEventListener('click', () =>{
  input = '';
  renderChangesInScreen(previousOperationScreen);
  renderChangesInScreen(initialScreen);
});

deleteButton.addEventListener('click', () =>{
  input = input.slice(0, -1);
  renderChangesInScreen(initialScreen);
  renderChangesInScreen(initialScreen, input);
});

result.addEventListener('click', () => {
  renderResult(mathResult());
});

const mathResult = () => {
  let result = input + ' = ' + eval(input);
  return result;
}

const renderChangesInScreen = (container, elm) => {
  elm ? container.innerHTML += elm : container.innerHTML = '';
}

function renderResult(elm) {
  previousOperationScreen.innerHTML += input;
  initialScreen.innerHTML = '';
  initialScreen.innerHTML += elm;
}