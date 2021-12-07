function funcionPadre(callback){
  console.log('Voy a ejecutar la funcion que me pasaste')
  callback()
  console.log('Ejecute la funcion hijo')
}

const funcionMenor = () => {
  console.log('Soy la funcion menor')
}

const suma2mas2 = () => {
  console.log('2+2', 2+2)
}

funcionPadre(funcionMenor)

funcionPadre(suma2mas2)