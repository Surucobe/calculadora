const $DateContainer = document.querySelector('p');

function setDate() {
  let Fecha = new Date;
  let Year = Fecha.getFullYear();
  let Day = Fecha.getDay();
  let Month = Fecha.getMonth();
  let MonthDay = Fecha.getDate();
  let Hour = Fecha.getHours();
  let Minutes = Fecha.getMinutes();

  return `${weekday(Day)} ${MonthDay} ${setMonth(Month)} ${Year}, ${fixHours(Hour)}:${fixMinutes(Minutes)} ${dayState(Hour)}`;
}

function weekday(n) {
  switch (n) {
    case 0:
      return 'Sunday'
      break;
    case 1:
      return 'Monday'
      break;
    case 2:
      return 'Tuesday'
      break;
    case 3:
      return 'Wednesday'
      break;
    case 4:
      return 'Thursday'
      break;
    case 5:
      return 'Friday'
      break;
    case 6:
      return 'Saturday'
      break;
    default:
      break;
  }
}

function setMonth(number) {
  switch (number) {
    case 0:
      return 'January'
      break;
    case 1:
      return 'February'
      break;
    case 2:
      return 'Mars'
      break;
    case 3:
      return 'April'
      break;
    case 4:
      return 'May'
      break;
    case 5:
      return 'June'
      break;
    case 6:
      return 'July'
      break;
    case 7:
      return 'Agosto'
      break;
    case 8:
      return 'September'
      break;
    case 9:
      return 'October'
      break;
    case 10:
      return 'November'
      break;
    case 11:
      return 'December'
      break;
    default:
      break;
  }
}

function fixHours(number) {
  if (number > 12) {
    return number - 12;
  }
}

const dayState = (number) => {
  if (number < 12) {
    return 'AM';
  } else {
    return 'PM';
  }
}

const fixMinutes = number => {
  if (number.toString().length < 2) {
    return `0${number}`;
  }
}

function setTime() {
  $DateContainer.innerHTML = setDate();
}

setTime();
setInterval(setTime, 10000);