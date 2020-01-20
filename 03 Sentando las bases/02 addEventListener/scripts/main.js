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
  let hr = document.createElement('hr');


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
  padreForm.insertBefore(hr, formulario);


  // vacio los inputs 
  inputNombre.value = '';
  inputSolucion.value = '';
}



// deshabilito el boton para enviar
btnEnviar.disabled = true;

//ejercicio 1
function interceptarNombre(event) {
  let nombre = '';
  nombre += event.target.value;
  // si el nombre es menor igual a cuatro y mayor o igual a 50 el agrego el error
  if (nombre.length < 4 || nombre.length > 50) {
    inputNombre.classList.add('input-error');
    mensajeError.classList.remove('oculto');
    labelNombre.classList.add('error');

    // deshabilito el boton para enviar
    btnEnviar.disabled = true;

  } else {
    // y aca le borro el error porqeu estaria en rango
    inputNombre.classList.remove('input-error');
    mensajeError.classList.add('oculto');
    labelNombre.classList.remove('error');

    // habilito el botton  
    btnEnviar.disabled = false;

  }


  // borro el mensaje de Enviado correctamente cuando el usuario este escribiendo 
  mensajeForm.classList.add('oculto');

}

formulario.addEventListener('submit', formularioEnviado);
inputNombre.addEventListener('input', interceptarNombre);



let cursor = document.querySelector('#cursor');
let cursorDos = document.querySelector('#cursor-2');
let cursorTres = document.querySelector('#cursor-3');



function mouse(event) {
  let top = event.y + 13;
  let left = event.x + 8;

  cursor.style.left = left + 'px';
  cursor.style.top = top + 'px';

  cursorDos.style.top = (top + 12) + 'px';
  cursorDos.style.left = (left + 10) +'px';

  cursorTres.style.top = (top + 20) + 'px';
  cursorTres.style.left = (left + 18) +'px';
}



let colores = ['red', 'green', 'blue', 'cyan', 'blueviolet', 'salmon', 'purple'];


function mouseClick(event) {

  // let anchoYAltura = parseInt(cursor.style.width.substr(0, 2));
  /*   let  topCursor = parseInt(cursor.style.top.substr(0, cursor.style.top.length - 2));  
  */
  let opacity = .6;
  
  cursor.style.backgroundColor =  colores[numRandomArray(colores)];
  cursorDos.style.backgroundColor = colores[numRandomArray(colores)];
  cursorTres.style.backgroundColor = colores[numRandomArray(colores)];


  cursor.style.opacity = opacity;
  cursorDos.style.opacity = opacity;
  cursorTres.style.opacity = opacity;


 /*  cursor.style.width = anchoYAltura + 5 + 'px';
  cursor.style.height = anchoYAltura + 5 + 'px'; */

  /*       cursor.style.top = topCursor + 30 + 'px';
   */

}

function numRandomArray(lista){
  return Math.floor(Math.random() * lista.length)
}
document.addEventListener("mousemove", mouse);
document.addEventListener("mousedown", mouseClick)