const tbody = document.querySelector("tbody");
const btn = document.querySelector("button");
const input = document.querySelector("input");
let tareasTotal = document.getElementById("totalTareas");
let tareasRealizadas = document.getElementById("tareasRealizadas");
let nuevoID = 4;
let disable = "";

const tareas = [
{ id: 1, tarea: "Hacer mercado", completado: "false" },
{ id: 2, tarea: "Hielo 1kg", completado: "false" },
{ id: 3, tarea: "Agua 1.5L", completado: "false" }
];

/* Funcion que renderisa las tareas en el DOM */

function renderTareas(tareas) {

    let contadorTareasListas = 0;
    tareasTotal.innerHTML = tareas.length;
    tbody.innerHTML = "";

    tareas.forEach((tarea) => {

        if(tarea.completado == "true"){

            checked = "checked disabled";
            contadorTareasListas ++

        }else{

            checked = "";

        }

    tbody.innerHTML += `
    <tr>
    <td>${tarea.id}</td>
    <td>${tarea.tarea}</td>
    <td><input class= "form-check-input" type="checkbox" ${checked} onclick="checkearTarea(${tarea.id})"></td>
    <td><button class="btn-close" onclick="borrarTarea(${tarea.id})"></button></td>
    </tr>`;
    });

    tareasRealizadas.innerHTML = contadorTareasListas;
}

/* Funcion que borra tareas */

function borrarTarea(id){

    const indiceBorrar = tareas.findIndex(tarea => tarea.id == id)
    tareas.splice(indiceBorrar, 1)
    renderTareas(tareas)

}

/* Funcion que activa check a las tareas y cambia estatus a completado True */

function checkearTarea(id){

const indiceMarcar = tareas.findIndex(tarea => tarea.id == id)

tareas[indiceMarcar].completado = "true"
tareas[indiceMarcar].tarea = tareas[indiceMarcar].tarea + "(Completada)"
renderTareas(tareas)

} 


/* Funcion que agrega tareas a la lista*/

btn.addEventListener("click", () => {

    const nuevatarea = { id: nuevoID, tarea: input.value, completado: "false" }
    tareas.push(nuevatarea)
    input.value = ""
    nuevoID ++
    renderTareas(tareas)
    });

    renderTareas(tareas)

