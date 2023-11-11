const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const result = document.querySelector('.result');

let input = '';

numberButtons.forEach((elm) => elm.addEventListener('click', () =>{
  console.log(elm.innerHTML);
  input += (elm.innerHTML);
  console.log(input);
}));

operatorButtons.forEach((elm) => elm.addEventListener('click', () => {
  console.log(elm.innerHTML);
  input += (elm.innerHTML);
  console.log(input);
}));

result.addEventListener('click', () => {
  console.log(eval(input));
});