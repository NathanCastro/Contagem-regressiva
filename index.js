
const valorInput = document.getElementById('dateInput').value;
function verificar(){
    if(valorInput){
        alert("Coloca a data correta")
    }else{
        var dateStorage = JSON.stringify(new Date(valorInput).value);
        sessionStorage.setItem("dateInput", dateStorage);
        window.location = "contador.html"
    }
    console.log('teste')
}

verificar()