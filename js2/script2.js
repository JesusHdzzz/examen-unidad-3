
function contarVocales(texto) {
    var vocales = "aeiouAEIOU";
    var contadorVocales = 0;
    for (var caracter of texto) {
        if (vocales.includes(caracter)) {
            contadorVocales++;
        }
    }
    return contadorVocales;
}
var texto = prompt("Introduce un texto:");
var resultado = contarVocales(texto);
alert("El número de vocales en el texto es: " + resultado);