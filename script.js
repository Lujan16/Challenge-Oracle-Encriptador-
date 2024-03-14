// Seleccionar los botones de encriptar y desencriptar
var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");

// Seleccionar elementos del DOM
var munieco = document.querySelector(".contenedormunieco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

// Agregar event listeners a los botones
botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);

// Función para encriptar texto
function encriptar() {
    ocultarElementos();
    var cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}

// Función para desencriptar texto
function desencriptar() {
    ocultarElementos();
    var cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}

// Función para recuperar el texto del textarea
function recuperarTexto() {
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}

// Función para ocultar elementos
function ocultarElementos() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

// Función para encriptar el texto
function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal += "ai";
        } else if (texto[i] == "e") {
            textoFinal += "enter";
        } else if (texto[i] == "i") {
            textoFinal += "imes";
        } else if (texto[i] == "o") {
            textoFinal += "ober";
        } else if (texto[i] == "u") {
            textoFinal += "ufat";
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

// Función para desencriptar el texto
function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal += "a";
            i++;
        } else if (texto[i] == "e") {
            textoFinal += "e";
            i += 4;
        } else if (texto[i] == "i") {
            textoFinal += "i";
            i += 3;
        } else if (texto[i] == "o") {
            textoFinal += "o";
            i += 3;
        } else if (texto[i] == "u") {
            textoFinal += "u";
            i += 3;
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

// Función para copiar el texto encriptado/desencriptado
const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", function() {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido)
        .then(() => console.log("Texto copiado exitosamente"))
        .catch(error => console.error("Error al copiar texto:", error));
});
