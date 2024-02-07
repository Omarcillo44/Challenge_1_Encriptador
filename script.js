alert("Usa los botones para seleccionar un modo. El resultado se reflejará automáticamente :)");

let textArea_destino = '';
let textArea_origen = '';
let boton_origen = '';
let boton_destino = '';
let modo = '';
let texto_encriptado = '';

function desencriptar(cadena) {
    let nueva_cadena = "";

    for (let i = 0; i < cadena.length; i++) {
        switch (cadena[i]) {
            case 'a':
                nueva_cadena += 'a';
                i += 1;
                break;

            case 'e':
                nueva_cadena += 'e';
                i += 4;
                break;

            case 'i':
                nueva_cadena += 'i';
                i += 3;
                break;

            case 'o':
                nueva_cadena += 'o';
                i += 3;
                break;

            case 'u':
                nueva_cadena += 'u';
                i += 3;
                break;

            default:
                nueva_cadena += cadena[i];
                break;
        }
    }

    return nueva_cadena;
}

function encriptar(cadena) {
    let nueva_cadena = "";

    for (let i = 0; i < cadena.length; i++) {
        switch (cadena[i]) {
            case 'a':
                nueva_cadena += 'ai';
                break;

            case 'e':
                nueva_cadena += 'enter';
                break;

            case 'i':
                nueva_cadena += 'imes';
                break;

            case 'o':
                nueva_cadena += 'ober';
                break;

            case 'u':
                nueva_cadena += 'ufat';
                break;

            default:
                nueva_cadena += cadena[i];
                break;
        }
    }

    return nueva_cadena;
}

function inicializar() {
    deshabilitar(boton_origen);
    habilitar(boton_destino);

    document.getElementById(textArea_origen).removeAttribute('readonly');
    document.getElementById(textArea_destino).setAttribute('readonly', 'true');

    document.getElementById(textArea_origen).removeAttribute('onclick');
    document.getElementById(textArea_origen).setAttribute('oninput', 'pasarTexto();');
    document.getElementById(textArea_destino).setAttribute('onclick', 'copiarAlPortapapeles();');

    document.getElementById(textArea_destino).style.cursor='copy';
    document.getElementById(textArea_origen).style.cursor='text';

}

function pasarTexto() {
    if (modo === 'encriptar') {
        texto_encriptado = encriptar(document.getElementById(textArea_origen).value);
    } else if (modo === 'desencriptar') {
        texto_encriptado = desencriptar(document.getElementById(textArea_origen).value);
    }

    document.getElementById(textArea_destino).value = texto_encriptado;
    console.log('Le estoy asignando el texto: "' + texto_encriptado + '", al elemento: "' + textArea_destino + '"');
}

function iniciar_encriptacion() {
    modo = 'encriptar';
    boton_origen = 'btn_encriptar';
    boton_destino = 'btn_desencriptar';
    textArea_destino = 'txt_desencriptar';
    textArea_origen = 'txt_encriptar';
    inicializar();
}

function iniciar_desencriptacion() {
    modo = 'desencriptar';
    boton_origen = 'btn_desencriptar';
    boton_destino = 'btn_encriptar';
    textArea_destino = 'txt_encriptar';
    textArea_origen = 'txt_desencriptar';

    inicializar();
}

function habilitar(id_elemento) {
    document.getElementById(id_elemento).removeAttribute('disabled');
}

function deshabilitar(id_elemento) {
    document.getElementById(id_elemento).setAttribute('disabled', 'true');
}

function copiarAlPortapapeles() {
    let inputElement = document.getElementById(textArea_destino);
    inputElement.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Texto copiado al portapapeles');
}
