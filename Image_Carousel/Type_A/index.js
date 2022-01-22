const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelectorAll('.item');
const totalImages = images.length;

let index = 0;

prev.addEventListener('click', () => {
  rotateImage('prev');
});

next.addEventListener('click', () => {
  rotateImage('next');
});

const rotateImage = (direction) => {
  if (direction == 'next') {
    index++;
    if (index == totalImages) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for (let i = 0; i < totalImages; i++) {
    images[i].classList.remove('main');
  }

  images[index].classList.add('main');
}