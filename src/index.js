//Boton para desplegar cipherArea y ocultar cipherInformation
    document.getElementById('buttonPrincipal').addEventListener('click', () => {
    //Desplegando cipherArea
    document.getElementById('areaCipherMe').style.display = '';
    //Ocultando cipherInformation
    document.getElementById('infoCipherMe').style.display = 'none';
});
//Boton para volver al incio de la pagina
    document.getElementById('linkLogo').addEventListener('click', () => {
    //Ocultando cipherArea
    document.getElementById('areaCipherMe').style.display = 'none';
    //Ocultando cipherSteps
    document.getElementById('stepCipherMe').style.display = 'none';
    //Desplegando cipherInformation
    document.getElementById('infoCipherMe').style.display = '';
});
//1.Evento: BOTON CIFRAR
document.getElementById('cipher').addEventListener('click', () => {
    const string = document.getElementById('inputMensaje').value;
    const offset = parseInt(document.getElementById('numeroKey').value)%26;
    const outputCifrado = document.getElementById('outputCifrado');
    outputCifrado.innerHTML = cipher.encode(offset, string);
});

//2.Evento: BOTON DESCIFRAR
document.getElementById('descipher').addEventListener('click',() => {
    const string = document.getElementById('inputMensaje').value;
    const offset = parseInt(document.getElementById('numeroKey').value)%26;
    const outputDescifrado = document.getElementById('outputDescifrado');
    outputDescifrado.innerHTML = cipher.decode(offset, string);
});

//COPIAR TEXTO CIFRADO
document.getElementById('copyCipher').addEventListener('click', () => {
    // Crea un campo de texto "oculto"
    var aux = document.createElement('input');
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute('value', document.getElementById('outputCifrado').innerHTML);
    // Añade el campo a la página
    document.body.appendChild(aux);
    // Selecciona el contenido del campo
    aux.select();
    // Copia el texto seleccionado
    document.execCommand('copy');
    // Elimina el campo de la página
    document.body.removeChild(aux);
});

//COPIAR TEXTO DESCIFRADO
document.getElementById('copyDescipher').addEventListener('click', () =>{
    // Crea un campo de texto "oculto"
    var aux = document.createElement('input');
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute('value', document.getElementById('outputDescifrado').innerHTML);
    // Añade el campo a la página
    document.body.appendChild(aux);
    // Selecciona el contenido del campo
    aux.select();
    // Copia el texto seleccionado
    document.execCommand('copy');
    // Elimina el campo de la página
    document.body.removeChild(aux);
});

//LIMPIAR INPUT MENSAJE
document.getElementById('clean').addEventListener('click', () =>{
    document.getElementById('inputMensaje').value = "";
});

//RESETEAR TODO
document.getElementById('refresh').addEventListener('click', () =>{
    window.location.reload();
});

//SALIR
document.getElementById('salir').addEventListener('click', () =>{
    window.close();
});