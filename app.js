function verificar(){    
    let dataInput = document.getElementById('dataCompleta');
    let resultInput = dataInput.value;
    console.log('aqui tem que aparecer a data =>', resultInput);
    
   

    
}
/* 

function contador(){

    let dataInput = document.getElementById('date');
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let countDown = new Date('04/10/2022').getTime();
    let x = setInterval(() => contador(), second);
    
    let now = new Date(Date.now()).getTime();
    let diff = countDown - now;

    document.getElementById('days').innerText = Math.floor(diff / day);
    document.getElementById('hours').innerText = Math.floor(diff % day / hour);
    document.getElementById('minutes').innerText = Math.floor(diff % hour / minute);
    document.getElementById('seconds').innerText = Math.floor(diff % minute / second);
}

 */