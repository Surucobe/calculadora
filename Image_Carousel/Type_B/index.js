$container = document.querySelector('.main_container');
$left = document.querySelector('.left');
$right = document.querySelector('.right');
$dots = document.querySelectorAll('.dot')
let current_position = 0;

const MoveScroll = (n) => {
  console.log(n)
  switch (n) {
    case '0':
      current_position = 0;
      $container.scrollTo(current_position, 0);
      break;
    case '960':
      current_position = 960;
      $container.scrollTo(current_position, 0);
      break;
    case '1920':
      current_position = 1920;
      $container.scrollTo(current_position, 0);
      break;
    case '2880':
      current_position = 2880;
      $container.scrollTo(current_position, 0);
      break;
    case '3840':
      current_position = 3840;
      $container.scrollTo(current_position, 0);
      break;
    case 'next':
      current_position += 960;
      $container.scrollTo(current_position, 0);
      break;
    case 'back':
      current_position -= 960;
      $container.scrollTo(current_position, 0);
      break;

    default:
      break;
  }
}

$dots.forEach(dot => {
  dot.addEventListener('click', event => {
    MoveScroll(event.target.dataset.number)
  })
});

$left.addEventListener('click', () => {
  if (current_position != 0) {
    MoveScroll('back');
  } else {
    MoveScroll('3840');
  }
});

$right.addEventListener('click', () => {
  if (current_position < 3500) {
    MoveScroll('next');
  } else {
    MoveScroll('0');
  }
});

function scrolling_right() {
  if (current_position < 3500) {
    MoveScroll('next')
  } else {
    MoveScroll(0)
  }
}

setInterval(scrolling_right, 5000)