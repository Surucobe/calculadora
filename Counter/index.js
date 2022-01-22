const $plus = document.getElementById('plus');
const $minus = document.getElementById('minus');
const $reset = document.querySelector('.reset');
let $counter = document.querySelector('.counter')


//Decided to use closures 
let Counter = (function () {
  var count = 0;

  function modifyCount(value) {
    count += value;
  }

  function reset() {
    count = 0;
  }

  return {
    increment: function plus() {
      modifyCount(1);
    },

    decrement: function minus() {
      modifyCount(-1);
    },
    value: function () {
      return count;
    },
    restart: function () {
      reset();
    }
  }
})();

$plus.addEventListener('click', () => {
  Counter.increment()
  $counter.innerHTML = Counter.value();
})

$minus.addEventListener('click', () => {
  Counter.decrement();
  $counter.innerHTML = Counter.value();
})

$reset.addEventListener('click', () => {
  Counter.restart();
  $counter.innerHTML = Counter.value();
})