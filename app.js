const valorInput = document.getElementById('dateInput').value;
function verificar(){
   
    if(valorInput){
        alert("Coloca a data correta")
    }else{
        var dateStorage = JSON.stringify(new Date(valorInput).value);
        sessionStorage.setItem("dateInput", dateStorage);
        window.location = "contador.html"
    }
}


const daysRow = document.querySelector("#days");
const hourRow = document.querySelector("#hours");
const minutesRow = document.querySelector("#minutes");
const secondsRow = document.querySelector("#seconds");
 

const updateCountdown = () => {
    const newYearTime = new Date(JSON.parse(sessionStorage.getItem('dateInput')))
    const currentTime = new Date();
    const difference = newYearTime.getTime() - currentTime.getTime();

    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24;
    const minutes = Math.floor(difference / 1000 / 60 ) % 60;
    const seconds = Math.floor(difference / 1000) % 60;
    
    daysRow.textContent = days < 10 ? '0' + days : days;
    hourRow.textContent = hours < 10 ? '0' + hours : hours;
    minutesRow.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsRow.textContent = seconds < 10 ? '0' + seconds : seconds;
}

setInterval(updateCountdown,1000)