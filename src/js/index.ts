import "../styles.css";

const countDownDate = new Date("Jan 1, 2022 00:00:01").getTime();
const numberOfDays = <HTMLElement>document.querySelector('.days')
const numberOfHours = <HTMLElement>document.querySelector('.hours')
const numberOfMinutes = <HTMLElement>document.querySelector('.minutes')
const numberOfSeconds = <HTMLElement>document.querySelector('.seconds')


setInterval(() => {
  const dateNow = new Date().getTime();
  const timeLeft =   countDownDate - dateNow;
  numberOfDays.innerHTML = Math.floor(timeLeft / (1000 * 60 * 60 * 24)).toString();
  numberOfHours.innerHTML = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
  numberOfMinutes.innerHTML = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)).toString();
  numberOfSeconds.innerHTML = Math.floor((timeLeft % (1000 * 60)) / 1000).toString();
}, 1000);