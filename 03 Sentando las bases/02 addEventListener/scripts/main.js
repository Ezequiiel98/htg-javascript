'use strict';

const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');
const btnEnviar = document.querySelector('#btn-enviar');
const mensajeError = document.querySelector('.mensaje-error');
const labelNombre = document.querySelector('.input-label-nombre');
const mensajeForm = document.querySelector('.mensaje-form');

function formularioEnviado(event) {
  event.preventDefault();
  btnEnviar.classList.add('oculto');
  mensajeForm.classList.remove('oculto');
} 

function interceptarNombre(event) {
   let nombre = '';
   nombre += event.target.value;
   if(nombre.length <= 4 || nombre.length >= 50){
     inputNombre.classList.add('input-error');
     mensajeError.classList.remove('oculto');
     labelNombre.classList.add('error');
   }else{
     inputNombre.classList.remove('input-error');
     mensajeError.classList.add('oculto');
     labelNombre.classList.remove('error');

   }
}                                                                                                                                                        

 formulario.addEventListener('submit', formularioEnviado);
inputNombre.addEventListener('input', interceptarNombre);
                                   