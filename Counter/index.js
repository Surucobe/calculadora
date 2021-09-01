const $plus = document.getElementById('plus');
const $minus = document.getElementById('minus');

let count = 0;

$plus.addEventListener('click', () => {
  let $counter = document.querySelector('.counter')

  count++;
  $counter.innerHTML = count;

})

$minus.addEventListener('click', () => {
  let $counter = document.querySelector('.counter')

  count--;
  $counter.innerHTML = count;
})