//Funciones principales:

//Funcion para agregar una nueva tarea.
function crearTarea(item){
    const nuevoItem = {
        thing: item.value,
        checked: false,
        disabled: true,
        priority: "Alta",
        category: "Casa",
        color: "#94D8F6"
    };


    // Agrega el nuevo elemento al arreglo 'itemsArray'.
    itemsArray.push(nuevoItem);

    // Almacena el arreglo 'itemsArray' en el 'localStorage' como una cadena de texto.
    localStorage.setItem('items', JSON.stringify(itemsArray));

    // Recarga la página actual para reflejar los cambios en la lista de elementos.
    location.reload();
}


//Funcion para eliminar una tarea.
function eliminarTarea(item){
    itemsArray.splice(item, 1); //Eliminar el objeto dentro del array.
    localStorage.setItem("items", JSON.stringify(itemsArray));
    // Recarga la página actual para reflejar los cambios en la lista de elementos.
    location.reload();
}

//Funcion que contará la cantidad de tareas pendientes.
function countPend(){
    let cant = 0;

    for(let i = 0; i < itemsArray.length; i++){
        if (!itemsArray[i].checked) {
            cant++;
        }else  {
            cant--;
    }
                       
    }
    

    localStorage.setItem("items", JSON.stringify(itemsArray));
    return cant;
}


//Funcion para el boton de mostrar todas las tareas.
function showAll(){
    const verTodos = document.querySelectorAll(".input-controller");

    verTodos.forEach((element) => {
        const marcado = element.querySelector(".toggle");
        element.style.display = "";
    });
    
    localStorage.setItem("items", JSON.stringify(itemsArray));
}

//Funcion para filtar (que se vea solamente) las tareas pendientes.
function showPend(){
    const tareasPend = document.querySelectorAll(".input-controller");

    tareasPend.forEach((element) => {
        const marcado = element.querySelector(".toggle");

        //Instrucion que ocultará la tarea si está marcada.
        if(marcado.checked){
            element.style.display = "none";
        }else if(!marcado.checked){ //Sino no se ocultará.
            element.style.display = "";
        }
    });

    localStorage.setItem("items", JSON.stringify(itemsArray));
}

//Funcion para filtar (que se vea solamente) las tareas completadas.
function showComp(){
    const tareasComp = document.querySelectorAll(".input-controller");

    tareasComp.forEach((element) => {
        const marcado = element.querySelector(".toggle");

        //Instrucion que ocultará la tarea no está marcada.
        if(!marcado.checked) {
            element.style.display = "none";
        }else if(marcado.checked){//Sino se ocultará.
            element.style.display = "";
        }
    });

    localStorage.setItem("items", JSON.stringify(itemsArray));
}

//Funcion para el boton de eliminar tareas completadas.

function borrarCompletados(){
    //Variable para filtar las tareas marcadas.
    const tareasCompretadas = itemsArray.filter((item) => item.checked == false);

    localStorage.setItem("items", JSON.stringify(tareasCompretadas));
    location.reload();
}

//funcion para guargar la actualizacion de la tarea.
function actualizarTarea(text, item){
    itemsArray[item].thing = text; //Editar el texto de la tarea.
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
}

// const countPend = () => {
//     return nuevoItem.filter(nuevoItem=>nuevoItem.checked).length 
// }