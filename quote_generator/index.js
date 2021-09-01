const $button = document.getElementById('button');
const $Container = document.querySelector('.quote');

const url = 'https://type.fit/api/quotes';

let quotes = [];

async function fetchy() {
  let response = await fetch(url)
  let data = await response.json()
  quotes = [...data]
}

fetchy();

$button.addEventListener('click', () => {
  const quoteNum = quotes[Math.round(Math.random() * 1643)]

  $Container.innerHTML = `<p>"${quoteNum.text}"</p> <h3>-<em>${quoteNum.author}</em></h3>`
})