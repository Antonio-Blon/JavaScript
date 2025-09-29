
function cambiarTexto() {
    //Asi se obtiene el elemento H1 por su ID
    let titulo = document.getElementById("titulo");
    //Cambio de Texto !Hola Mundo!
    titulo.innerHTML = "Hola,warrior!"

}


const btnCal = document.getElementById("btnCalcular");
btnCal.addEventListener("click",function(){
    let n1 = 10;
    let n2 = 20;
    let suma = n1 + n2;
    console.log(suma);
    //Pop Up - Alert, Confirm
    alert("Suma es: "+suma)
    confirm("Confirmar para el siguiente paso");
})