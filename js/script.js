function calificar() {
    var nota = parseFloat(document.getElementById('notaInput').value);

    if (typeof nota !== 'number' || nota < 0 || nota > 10) {
        alert('Ingrese una nota válida entre 0 y 10.');
        return;
    }

    var calificacion;
    if (nota < 3) calificacion = 'Muy pobre';
    else if (nota < 5) calificacion = 'Insuficiente';
    else if (nota < 6) calificacion = 'Suficiente';
    else if (nota < 7) calificacion = 'Está bien';
    else if (nota < 9) calificacion = 'Notable';
    else calificacion = 'Sobresaliente +';

    alert('Calificación: ' + calificacion);
}