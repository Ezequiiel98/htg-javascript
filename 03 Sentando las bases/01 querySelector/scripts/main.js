console.info('Cuando veas éste mensaje en consola, ya habrás terminado ésta parte del ejercicio. Borra ésta línea cuando ya la hayas visto alguna vez en la consola al acceder a ésta página.');


/* EJERCICIO 1 */
const comentario = document.querySelector('.comment:nth-child(3) p');

comentario.classList.add('comment-fav'); 

/* EJERCICIO 2 */

const hrs = document.querySelectorAll('hr');

for(let i=0; i < hrs.length; i++){
    hrs[i].classList.add('new-hr');
}


/* EJERCICIO 4 */

const comentarios  = document.querySelectorAll('.comment--text');

function comentarioMasLargo(listaElementos){

    let comentarioMasLargo = listaElementos[0];


 for(let i = 0; i < listaElementos.length; i++){
    
    if(comentarioMasLargo.textContent.length < listaElementos[i].textContent.length){

        comentarioMasLargo = listaElementos[i]
    }

 }

  return comentarioMasLargo

}




