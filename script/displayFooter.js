/* 
El siguiente código lo podrás usar para renderizar en tu front el footer 
donde están ubicados los botones de filtro, de tu aplicación
*/
function displayFooter() {
  let page = `

      <footer class="footer">

        <span class="todo-count"><strong>${countPend()}</strong> pendiente(s)</span>

        <ul class="filters">
          <li>
            <a class="selected filtro" href="#/" onclick="showAll()">Todos</a>
          </li>
          <li>
            <a class="filtro" href="#/active" onclick="showPend()">Pendientes</a>
          </li>
          <li>
            <a class="filtro" href="#/completed" onclick="showComp()">Completados</a>
          </li>
        </ul>
        <button class="clear-completed" onclick="borrarCompletados()" id="clear-completed">Borrar completados</button>
      </footer>
    `
  document.querySelector('.footer').innerHTML = page
}
