function obtenerTareas() {
    let tareasJSON = localStorage.getItem("tareas");
    return tareasJSON ? JSON.parse(tareasJSON) : [];
}

const manejarTareas = (function () {
    let tareas = obtenerTareas();

    function guardar() {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    function agregar(texto) {
        tareas.push(texto);
        guardar();
    }

    function eliminar(indice) {
        tareas.splice(indice, 1);
        guardar();
    }

    function obtener() {
        return tareas;
    }

    return {
        agregar,
        eliminar,
        obtener
    };
})();

function agregarTarea() {
    let tarea = document.getElementById("tarea").value.trim();

    if (tarea === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campo vacío',
            text: 'Ingrese una tarea antes de agregar'
        });
        return;
    }

    manejarTareas.agregar(tarea);
    document.getElementById("tarea").value = "";
    renderizarTareas();
}

function eliminarTarea(indice) {
    Swal.fire({
        title: '¿Eliminar tarea?',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            manejarTareas.eliminar(indice);
            renderizarTareas();
        }
    });
}

function renderizarTareas() {
    let lista = document.getElementById("listaTareas");
    lista.innerHTML = "";

    let tareas = manejarTareas.obtener();

    tareas.forEach((tarea, indice) => {
        let li = document.createElement("li");
        li.textContent = tarea;

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = () => eliminarTarea(indice);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", renderizarTareas);