const $button = document.getElementById('button');

function randomHex() {
  let num = (Math.random() * 0xfffff * 1000000).toString(16);
  return `#${num.slice(0, 6)}`;
}

$button.addEventListener('click', () => {
  const $body = document.querySelector('body');
  $body.style.background = randomHex();
})