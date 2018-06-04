//Todos los objetos del DOM terminan de cargarse.
window.onload = window.cipher;
//Crear los 2 metodos dentro del Window.cipher
window.cipher = {
    // Creando la funcion Encode para cifrar el texto
    encode : (offset, string) => {
        //Creamos una nueva variable para el cifrado
        let cipher = '';
        offset = offset % 26;
        //Creamos el bucle for para la iteracion
        for (let i = 0; i < string.length; i++){
            // Creamos la variable codeAscii para obtener la posicion del codigo ascii del mensaje ingresado
            let codeAscii = string.charCodeAt(i);
            let formulaAscii;
            //Condicion Codigo Ascii - Letra Mayuscula: Se pone la condicion mayor que 65 y menor que 90,
            //Porque en esa posicion se encuentra las letras mayusculas del ABC en ascii.
            if (codeAscii >= 65 && codeAscii <=90){
                //1) Creo la variable para la letra mayuscula = mayusAscii
                formulaAscii = (codeAscii - 65 + offset) % 26 + 65;
            }
            //Condicion Codigo Ascii - Letra Minuscula: Se pone la condicion mayor que 97 y menor que 122,
            //Porque en esa posicion se encuentra las letras minusculas del ABC en ascii.
            else if (codeAscii >=97 && codeAscii <=122) {
                //1) Creo la variable para la letra minuscula = minusAscii
                formulaAscii = (codeAscii - 97 + offset) % 26 + 97;
            }
            //Condicion para el espacio en blanco: Se iguala a  32
            //Porque en esa posicion se encuentra el espacio en ascii
            else {
                formulaAscii = codeAscii;
            }
            cipher += String.fromCharCode(formulaAscii);
        }
        //Retorna el texto cifrado de la funcion Encode
        return cipher;
    },

    //Creando la funcion Decode para descifrar el texto
    decode : (offset, string) =>{
        //Creamos una nueva variable para el descifrado
        let descipher = '';
        offset = offset % 26;
        //Creamos el bucle for para la iteracion
        for (let i=0; i<string.length; i++){
            // Creamos la variable codeAscii para obtener el codigo ascii del mensaje ingresado
            let codeAscii = string.charCodeAt(i);
            let formulaAscii;
            if (codeAscii >= 65 && codeAscii <= 90){
                //1) Creo la variable para la letra mayuscula = mayusAscii
                formulaAscii = (codeAscii - 65 - offset + 26) % 26 + 65;
            }
            //Condicion Codigo Ascii - Letra Minuscula: Se pone la condicion mayor que 97 y menor que 122
            //Porque en esa posicion se encuentra las letras minusculas del ABC en ascii.
            else if (codeAscii >=97 && codeAscii <=122){
                //1) Creo la variable para la letra minuscula = minusAscii
                formulaAscii = (codeAscii - 97 - offset + 26) % 26 + 97;
            }
            else {
                formulaAscii = codeAscii;
            }
            descipher += String.fromCharCode(formulaAscii);
        }
        //Retorna el texto cifrado de la funcion Encode
        return descipher;
    },

    //Creando la funcion CipherWithOfsset
    createCipherWithOffset : (offset) => {
        return {
            encode : (string) => {
                //Llamando a encode
                return cipher.encode(offset, string);
            },
            decode : (string) => {
                //Llamando a decode
                return cipher.decode(offset, string);
            }
        };
    }
};