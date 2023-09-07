/*TIPS: *No olvides utilizar el almacenamiento local (localStorage)
 para que las tareas queden guardadas en caso
 de que la aplicación se cierre.*/
const nuevaTarea = document.querySelector('.new-todo');
const itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : [];

function displayFooter() {
  let page = `      
     
      <footer class="footer">
       
        <span class="todo-count"><strong>${countPend()}</strong> pendiente(s)</span>
        
        <ul class="filters">
          <li>
            <a onclick="showAll() "class="selected filtro" href="#/">Todos</a>
          </li>
          <li>
            <a onclick="showPend()" class="filtro btnPend" href="#/active">Pendientes</a>
          </li>
          <li>
            <a onclick="showComp()" class="filtro btnComp" href="#/completed">Completados</a>
          </li>
        </ul>
        <button onclick="borrarCompletados()" id="clear-completed" class="clear-completed">Borrar completados</button>
      </footer>
    `
  document.querySelector('.footer').innerHTML = page
}

// Codigo DOM #1
nuevaTarea.addEventListener('keyup', (event) => {
  if (
    event.keyCode === 13 &&
    document.querySelector('.new-todo').value.length > 0
  ) {
    const item = document.querySelector('.new-todo')
    //Llamar la función que crea la tarea.**
    crearTarea(item);
  }
});

// Codigo DOM #2
// este fragmento permite conservar el estado del checkbox (true o false) en el localStorage
function activateCheckboxListeners() {
  const checkboxes = document.querySelectorAll('.toggle')
  checkboxes.forEach((ch, i) => {
    ch.addEventListener('click', () => {
      itemsArray[i].checked = ch.checked
      localStorage.setItem('items', JSON.stringify(itemsArray))
    })
  })
}

// Codigo DOM #3
// Permite que la acción eliminar impacte el DOM del HTML, acá debes agegar algoritmo de eliminar tarea
function activateDeleteListeners() {
  let deleteBtn = document.querySelectorAll('.deleteBtn')
  deleteBtn.forEach((db, i) => {
    db.addEventListener('click', () => {
      //Llamar la función que elimina la tarea
      eliminarTarea(i);
    })
  })
}

// Codigo DOM #4
/* 
Permite que la acción editar de las 2 listas desplegables "prioridad" y "categoría" 
impacte el DOM del HTML cuando cambies de opción
*/
function activateEditListeners() {
  const editBtn = document.querySelectorAll('.editBtn')
  const updateController = document.querySelectorAll('.update-controller')
  const inputs = document.querySelectorAll('.input-controller textarea')
  const prioritySelects = document.querySelectorAll(
    '.edit-controller select'
  )[0]
  const categorySelects = document.querySelectorAll(
    '.edit-controller select'
  )[1]

  editBtn.forEach((eb, i) => {
    eb.addEventListener('click', () => {
      updateController[i].style.display = 'block'
      inputs[i].disabled = false

      prioritySelects.value = itemsArray[i].priority
      categorySelects.value = itemsArray[i].category
    })
  })

  const selecPrioridad = document.querySelectorAll('#priority');
  selecPrioridad.forEach((elemento, selectedIndex) => {
    elemento.addEventListener('change', (event) => {
      itemsArray[selectedIndex].priority = event.target.value;
      localStorage.setItem('items', JSON.stringify(itemsArray));
    })
  })

  const selecCategoria = document.querySelectorAll('#category');
  selecCategoria.forEach((elemento, selectedIndex) => {
    elemento.addEventListener('change', (event) => {
      itemsArray[selectedIndex].category = event.target.value;
      localStorage.setItem('items', JSON.stringify(itemsArray));
    })
  })

  const selecColor = document.querySelectorAll('#color');
selecColor.forEach((elemento, selectedIndex) => {
  elemento.addEventListener('change', (event) => {
    const nuevoValor = event.target.value;
    if (itemsArray[selectedIndex].color !== nuevoValor) {
      itemsArray[selectedIndex].color = nuevoValor;
      localStorage.setItem('items', JSON.stringify(itemsArray));
      location.reload(); // Recarga la página solo si el color ha cambiado
    }
  });
});
}

// Codigo DOM #5
/* 
Permite que la acción guardar el nuevo nombre de la tarea cuando decides editar y 
que impacte el DOM del HTML, acá debes agegar algoritmo de actualizar tarea
*/
function activateSaveListeners() {
  const saveBtn = document.querySelectorAll('.saveBtn')
  const inputs = document.querySelectorAll('.input-controller textarea')
  saveBtn.forEach((sB, i) => {
    sB.addEventListener('click', () => {
      // Llamar la función que guarda la actualización la tarea
      actualizarTarea(inputs[i].value, i);
    })
  })
}

// Codigo DOM #6
//Esta es la lógica para el botón "cancelar" cuando presionas editar una tarea, inserta este código tal cual
function activateCancelListeners() {
  const cancelBtn = document.querySelectorAll('.cancelBtn')
  const updateController = document.querySelectorAll('.update-controller')
  const inputs = document.querySelectorAll('.input-controller textarea')
  cancelBtn.forEach((cB, i) => {
    cB.addEventListener('click', () => {
      updateController[i].style.display = 'none'
      inputs[i].disabled = true
      inputs[i].style.border = 'none'
      location.reload();
    })
  })
}

//El sistema debe permitir EDITAR o MODIFICAR una tarea.

//El sistema debe permitir ELIMINAR una tarea.

//El sistema debe permitir AGREGAR una o varias tareas tarea.

//El sistema deber permitir MARCAR una tarea como completada

//El sistema debe permitir dar diferentes PRIORIDADES a las tareas
//EJEMPLO:

//Sacar la basura - Prioridad: media

//El sistema debe permitir visualizar tareas por CATEGORÍAS o ETIQUETAS
//EJEMPLO:

/*Categorías disponibles: PENDIENTE, COMPLETADO o TODASE.T.C */

//Recordar llamar las funciones displayItems() y displayFooter() para mostrar
//las tareas en pantalla
displayFooter();
displayItems();