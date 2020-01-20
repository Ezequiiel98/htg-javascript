'use strict';


// w x h 

let ancho = document.querySelector('#ancho')
let alto = document.querySelector('#alto')


function resolucionPantalla(){
  
  ancho.innerText = window.innerWidth;
  alto.innerText = window.innerHeight;

}

//llamo a la funcion para que no quede vacio el texto si no hacen resize  


resolucionPantalla();

window.addEventListener('resize', resolucionPantalla)