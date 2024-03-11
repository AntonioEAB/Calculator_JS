/*
Developer: Antonio Aviles
Date: 04/03/2024
Github: AntonioEAB
*/
let inputs = document.querySelectorAll("input[type='button']");

inputs.forEach(input => {
    input.addEventListener("click", event => {
        let display = document.getElementById('number');
        let opt = event.target.value;
        // Concatenar el valor del botón al valor actual del display
        
        if (opt === "=" ){
            if (String(display).match(/\d$/)) {

            }
            display.value= eval(display.value);
        } else {
            display.value += opt;
        }
    });
});



