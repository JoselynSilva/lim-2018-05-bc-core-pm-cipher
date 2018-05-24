let btnEncode = document.getElementById('encode');
let btnDecode = document.getElementById('decode');
let mensaje = document.getElementById('mensaje');
let numero = document.getElementById('key');
//let result = document.getElementById('resultado');

btnEncode.addEventListener('click', encode);
function encode() {
    let txtResultado = '';
    let txtMensaje = mensaje.value;
    let key = parseInt(numero.value);
    for (i=0; i < txtMensaje.length; i++){
        let toAscii = txtMensaje.charCodeAt(i);
            if (toAscii>=65 && toAscii<=90){
                txtResultado += String.fromCharCode((toAscii - 65 + key) % 26 + 65);
            }
            else if (toAscii >= 97 && toAscii <= 122){
                txtResultado += String.fromCharCode((toAscii - 97 + key) % 26 + 97);
            }
            else
            //result.innerHTML= `<p> ${txtResultado} </p>`;
            document.getElementById('solucion').value = ""+txtResultado+"";
    }
    //result.innerHTML= `<p> ${txtResultado} </p>`;
    document.getElementById('solucion').value = ""+txtResultado+"";
}

btnDecode.addEventListener('click', decode);
function decode() {
    let txtResultado = '';
    let txtMensaje = mensaje.value;
    let key = parseInt(numero.value);
    for (i=0; i < txtMensaje.length; i++){
        let toAscii = txtMensaje.charCodeAt(i);
            if (toAscii>=65 && toAscii<=90){
                txtResultado += String.fromCharCode((toAscii - 65 - key + 26 * 2) % 26 + 65);
            }
            else if (toAscii >= 97 && toAscii <= 122){
                txtResultado += String.fromCharCode((toAscii - 97 - key + 26 * 2) % 26 + 97);
            }
            else
            //result.innerHTML= `<p> ${txtResultado} </p>`;
            document.getElementById('solucion').value = ""+txtResultado+"";
    }
    //result.innerHTML= `<p> ${txtResultado} </p>`;
    document.getElementById('solucion').value = ""+txtResultado+"";
}

function clear (){
    document.getElementById("form").reset();
}

