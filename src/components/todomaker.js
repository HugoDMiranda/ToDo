import React from "react";

function TodoMaker(props) {

  function addTodo() {
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;

    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;

    props.createTodo(title, dueDate);

    props.render();
  }

  return(
    <div>
      <input type='text' id='todo-title' />
      <input type='date' id='date-picker' />
      <button id="add" onClick={addTodo}>Add to do</button>
    </div>
    

  )
}

export default TodoMaker;