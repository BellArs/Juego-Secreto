let numeroSecreto = 0;
let intentos = 0;
let numereoSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
}

function verificarIntento(){
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
      
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p',`Acertaste al número en ${intentos} ${(intentos ===1)? 'vez': 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }else{
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p','El numero Secreto es menor');
    }else{
    asignarTextoElemento('p','El numero secreto es mayor');
  }
  intentos++;
   limpiarCaja();
  
  }
  return;
}

function limpiarCaja() {
  document.querySelector('#valorUsuario').value = "";
}


function reiniciarJuego() {
  // limpiar la caja
   limpiarCaja();
  // Indicar mensje de intervlo de nuemeros
  //Generar numero aleatorio
  //iniciar numero de intentos
  condicionesIniciales();
  //deshabilitar el boton de nuevo juego
  document.getElementById('reiniciar').setAttribute('disabled','true');
  
}


function condicionesIniciales(){  

  asignarTextoElemento('h1','Juego del Número Secreto');

  asignarTextoElemento('p',`Indique un número del 1 al ${numeroMaximo}`); 

  numeroSecreto = generarNumeroSecreto();

  intentos = 1; 
}

function generarNumeroSecreto() {
  let numeroGenerado  =  Math.floor(Math.random()*numeroMaximo)+1;
   

  if (numereoSorteados.length == numeroMaximo) {
     asignarTextoElemento('p','Ya se hicieron todos los intentos posibles')
     

  }else{

  if(numereoSorteados.includes(numeroGenerado)){
    return numeroGenerado;
    
  }else{

    numereoSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}
}

condicionesIniciales();