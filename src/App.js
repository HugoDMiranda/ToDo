import './App.css';
import TodoMaker from './components/todomaker';

function App() {

  let todos ;

  function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos))     
  }

  
  const savedTodos  = JSON.parse(localStorage.getItem('todos'));

  if (Array.isArray(savedTodos)) {
    todos = savedTodos;
  } else {
      todos = [];
  }

  function createTodo(title, dueDate) {
    const id = '' + new Date().getTime();

    todos.push({
      title: title,
      dueDate: dueDate,
      id: id
    });

    saveTodos();
  }

  function removeTodo(idToDelete) {
    todos = todos.filter(function(todo) {
    if (todo.id === idToDelete) {
      return false;
    } else  {
      return true;
    }
  });

  saveTodos();
}

  function deleteTodo(event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;

    removeTodo(idToDelete); 
  
    render();
  }

  function render() {
    document.getElementById('todo-list').innerHTML = '';

    todos.forEach(function(todo) {
      const element = document.createElement('div');
      element.innerText = todo.title + ' ' + todo.dueDate;

      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.style = 'margin-left: 12px;';
      deleteButton.onclick = deleteTodo;
      deleteButton.id = todo.id;
      element.appendChild(deleteButton);

      const todoList = document.getElementById('todo-list');
      todoList.appendChild(element);
    })
  }


  return (
    <div className="App">
      <div className='todoContainer'>
        <h1>ToDo List</h1>
        <TodoMaker createTodo={createTodo} render={render}/>
        <div id='todo-list'>
           
        </div> 
      </div>
    </div>
  );
}

export default App;
