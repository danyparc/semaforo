const titulo = document.getElementById('titulo')
const parrafos = document.getElementsByClassName('parrafo')

function cambiarEstilos(){
  for (let i = 0; i < parrafos.length; i++) {
    const element = parrafos[i];
    element.style.color='red'
  }
  titulo.style.fontFamily = 'Arial';
  titulo.style.border = 'blue solid 2px';
}


const boton = document.getElementById('btn-cambiar')

boton.addEventListener('click', cambiarEstilos)

parrafos[2].addEventListener('click', function(){
  alert('Diste click en el parrafo 3')
})
parrafos[3].addEventListener('click', () => {
  alert('Haz dado click en el parrafo 4')
})
parrafos[4].addEventListener('click', () => alert('Haz dado click en el parrafo 5'))