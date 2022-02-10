const daysRow = document.querySelector("#days");
const hourRow = document.querySelector("#hours");
const minutesRow = document.querySelector("#minutes");
const secondsRow = document.querySelector("#seconds");


const endYear = new Date().getFullYear() +1 ;
//const dateNow = document.querySelector('#dataCompleta');
const newYearTime = new Date(`January 01 ${endYear} 00:00:00 `);

const updateCountdown = () => {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24;
    const minutes = Math.floor(difference / 1000 / 60 ) % 60;
    const seconds = Math.floor(difference / 1000) % 60;
    
    secondsRow.textContent = seconds < 10 ? '0' + seconds : seconds;
    minutesRow.textContent = minutes < 10 ? '0' + minutes : minutes;
    hourRow.textContent = hours < 10 ? '0' + hours : hours;
    daysRow.textContent = days < 10 ? '0' + days : days;
}

setInterval(updateCountdown,1000)