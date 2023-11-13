const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const initialScreen = document.querySelector('.current-operand');
const previousOperationScreen = document.querySelector('.previous-operand');
const result = document.querySelector('.result');

let input = '';

numberButtons.forEach((elm) => elm.addEventListener('click', () =>{
  console.log(elm.innerHTML);
  input += (elm.innerHTML);
  console.log(input);
  renderNumbersInScreen(elm.innerHTML);
}));

operatorButtons.forEach((elm) => elm.addEventListener('click', () => {
  console.log(elm.innerHTML);
  input += (elm.innerHTML);
  console.log(input);
  renderNumbersInScreen(elm.innerHTML);
}));

result.addEventListener('click', () => {
  renderResult(mathResult());
});

const mathResult = () => {
  let result = input + ' = ' + eval(input);
  return result;
}

const renderNumbersInScreen = (elm) => initialScreen.innerHTML += elm;
function renderResult(elm) {
  previousOperationScreen.innerHTML += input;
  initialScreen.innerHTML = '';
  initialScreen.innerHTML += elm;
}