//Variables
let numeroMaxioPosible = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMaxioPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximoIntentos = 5;


while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un numero 1 y ${numeroMaxioPosible} por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste, el numero es ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    }else{
        if(numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        }else{
            alert('el número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if(intentos > maximoIntentos){
            alert(`Llegaste al número máximo de ${maximoIntentos} intentos`);
            break;
        }
        //La condicion no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}