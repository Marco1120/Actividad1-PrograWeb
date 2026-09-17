let estudiantes = [];

function agregarEstudiante() {
    let nombre = document.getElementById("nombre").value;
    let calificacion = document.getElementById("calificacion").value;

    if (nombre === "" || calificacion === "" || isNaN(calificacion)) {
        alert("Ingrese un nombre y una calificación válida");
        return;
    }

    let estudiante = {
        nombre: nombre,
        calificacion: Number(calificacion)
    };

    estudiantes.push(estudiante);

    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
}

function calcular() {
    if (estudiantes.length === 0) {
        document.getElementById("promedio").value = "Agregue estudiantes";
        document.getElementById("mayor").value = "Agregue estudiantes";
        document.getElementById("menor").value = "Agregue estudiantes";
        return;
    }

    let promedio = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0) / estudiantes.length;

    let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    let estudianteMayor = estudiantes.find(e => e.calificacion === calificacionMaxima);
    let estudianteMenor = estudiantes.find(e => e.calificacion === calificacionMinima);

    document.getElementById("promedio").value = promedio;
    document.getElementById("mayor").value = estudianteMayor.nombre;
    document.getElementById("menor").value = estudianteMenor.nombre;
}