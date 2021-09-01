const $submit = document.getElementById('submit-button');
const $secret = document.querySelector('.secret-message');

$submit.addEventListener('click', () => {
  let $messagge = document.getElementById('messagge');
  if ($messagge.value == '') {
    alert('You must pass a message in the input first');
    return
  }

  $secret.innerHTML = $messagge.value
})