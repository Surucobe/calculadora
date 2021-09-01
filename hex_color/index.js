const $button = document.getElementById('button');

function randomHex() {
  let num1 = (Math.random() * 0xfffff * 1000000).toString(16);
  return `#${num1.slice(0, 6)}`;
}

$button.addEventListener('click', () => {
  const $body = document.querySelector('body');
  const $text = $body.querySelector('.container p')
  const hex1 = randomHex();
  const hex2 = randomHex();

  $body.style.backgroundImage = `linear-gradient(${Math.round(Math.random() * 360)}deg, ${hex1}, ${hex2})`
  $text.innerHTML = `background: linear-gradient(${Math.round(Math.random() * 360)} deg, ${hex1}, ${hex2})`
})