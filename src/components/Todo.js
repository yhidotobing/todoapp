import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState(["Belajar React", "Belajar State"]);
  const [inputTodo, setinputTodo] = useState("");
  const addTodo = () => {
    setTodos([...todos, inputTodo]);
    // let newTodo = [...todos];
    // newTodo.push(inputTodo);
    // setTodos(newTodo);
  };
  console.log(addTodo);
  const handleChange = (e) => {
    setinputTodo(e.target.value);
  };
  console.log(setinputTodo);

  const deleteTodo = (x) => {
    console.log(deleteTodo);
    const newToDo = [...todos].filter((_, i) => i !== x);
    setTodos(newToDo);
  };

  const editTodo = (x) => {
    const nilaiPromp = prompt("Ganti Apa?");
    const updateToDo = todos.map((_, i) => (i == x ? nilaiPromp : _));
    setTodos(updateToDo);
  };

  console.log(inputTodo);
  return (
    <div class="container py-5 h-100">
      <div class="mb-3">
        <input
          class="me-3"
          type="text"
          onChange={handleChange}
          placeholder="Enter To Do"
        />
        <button type="button" onClick={addTodo}>
          +
        </button>
      </div>
      {todos.map((x, index) => (
        <div class="container d-flex align-items-center justify-content-center">
          <ul class="container">
            <li class="list-group-item" key={index}>
              {x}
            </li>
          </ul>
          <ul class="container list-group list-group-horizontal mb-3">
            <tr class="">
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </tr>
            <tr class="">
              <button
                type="button"
                class="btn btn-success"
                onClick={() => editTodo(index)}
              >
                Edit
              </button>
            </tr>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Todo;
