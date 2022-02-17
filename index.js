function verificar(){
    const valorInput = document.getElementById('dateInput').value;
    console.log('valor input', valorInput)
    if(!valorInput){
        alert("Colocar a data correta")
    }else{        
        localStorage.setItem("dateInput", valorInput);
        window.location = "contador.html"
    }
   
}



