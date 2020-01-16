'use strict';

const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');
const btnEnviar = document.querySelector('#btn-enviar');
const mensajeError = document.querySelector('.mensaje-error');
const labelNombre = document.querySelector('.input-label-nombre');
const mensajeForm = document.querySelector('.mensaje-form');
const inputSolucion = document.querySelector('#input-solucion');

//ejercicio 2
function formularioEnviado(event) {
  event.preventDefault();
  // ejercicio 2 

  mensajeForm.classList.remove('oculto');



 // ejercicio 3 

  // creo elementos html
 let nombre = document.createElement('p');
 let solucion = document.createElement('p');

 // accedo al elemento padre del form porque lo necesito para usar el insertBefore
 let padreForm = formulario.parentNode;

 // Creo el texto que voy a poner dentro de los elementos que cree en nombre y solucion. Este texto es el texto que hay en los inputs
 let textoNombre = document.createTextNode('Nombre: ' + inputNombre.value);
 let textoSolucion = document.createTextNode('Solucion: ' + inputSolucion.value);


 // Le agrego el texto a  los elementos
 nombre.appendChild(textoNombre);
 solucion.appendChild(textoSolucion);

 // inserto nombre y solucion  antes de formulario
 padreForm.insertBefore(nombre, formulario);
 padreForm.insertBefore(solucion, formulario);  
 

  // vacio los inputs 
  inputNombre.value = '';
  inputSolucion.value = '';
} 


//ejercicio 1
function interceptarNombre(event) {
   let nombre = '';
   nombre += event.target.value;
   // si el nombre es menor igual a cuatro y mayor o igual a 50 el agrego el error
   if(nombre.length <= 4 || nombre.length >= 50){
     inputNombre.classList.add('input-error');
     mensajeError.classList.remove('oculto');
     labelNombre.classList.add('error');
   }else{
     // y aca le borro el error porqeu estaria en rango
     inputNombre.classList.remove('input-error');
     mensajeError.classList.add('oculto');
     labelNombre.classList.remove('error');
    
     }


     // borro el mensaje de Enviado correctamente cuando el usuario este escribiendo 
     mensajeForm.classList.add('oculto');

}                                                                                                                                                        

formulario.addEventListener('submit', formularioEnviado);
inputNombre.addEventListener('input', interceptarNombre);
                                   

