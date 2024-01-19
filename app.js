//Variables
let numeroMaximoPosible = 100
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabrasVeces = 'vez';
let maximosIntento = 3;
console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor:`));
    console.log(typeof(numeroUsuario));
    /* Este codigo compara las numero (la diagonal y el asterisco se utilizan para saltos de renglon
    y se consideran texto)
    */
    if (numeroUsuario == numeroSecreto) {
        //Cuando es correcta la prediccion
        alert(`Acertaste, el numero es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos ==1 ? 'vez' : 'Veces'}`);
        //Cuando no es correcta
    } else{
        if(numeroUsuario > numeroSecreto) {
            alert ('El Numero Secreto es menor');
        } else {
            alert ('El numero secreto es mayor');
        }
        intentos++;
        //palabrasVeces = 'veces';
        if (intentos > maximosIntento) {
            alert (`Llegaste al numero maximo de ${maximosIntento} intentos`);
            break;
        }
    }

    //{alert('Incorrecto, no es el numero secreto')};
}