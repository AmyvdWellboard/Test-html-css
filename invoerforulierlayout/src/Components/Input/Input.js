import React, { useState } from 'react';

function TodoList() {
  /* Je maakt hier een state aan met react hooks */
  const [todos, setTodos] = useState([]);

  function handleAddTodo(todo) {
    setTodos([...todos, todo]);
  }

  function handleComplete(todoIndex) {
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  return (
    /* De html die wordt geladen in de app*/
    <div className="">
      <TodoForm onAddTodo={handleAddTodo} />
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onComplete={() => handleComplete(index)}
        />
      ))}
    </div>
  );
}




/* hierin maak je de fucntie die de state bij werkt en het laat tonen */
function TodoForm({ onAddTodo }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddTodo(todo);
    setTodo("");
  }

  function handleChange(event) {
    setTodo(event.target.value);
  }

  /*De Formulier wordt dan een de form van de invulformulier Wellboard*/
  return (
    <form onSubmit={handleSubmit} className="InvoerFormulier__formulier">
      <input
        type="text"
        value={todo}
        onChange={handleChange}
        placeholder="Vul hier je waarde in..."
        className="InvoerFormulier__formulier__input"
      />
      <button type="submit" className="InvoerFormulier__formulier__button">Submit</button>
    </form>
  );
}
function TodoItem({ todo, onComplete }) {
  const [completed, setCompleted] = useState(false);

  function handleComplete() {
    setCompleted(true);
    onComplete();
  }

  /*hier returneert hij de naam van de todo item*/
  return (
    <div className={completed ? "todo-item completed" : "todo-item"}>
      <span>{todo}</span>
    </div>
  );
}

export default TodoList;
