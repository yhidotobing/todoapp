import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState(["Belajar React", "Belajar State"]);
  const [inputTodo, setinputTodo] = useState("");
  const [temporaryTodo, setTemporaryTodo] = useState("");
  const [temporaryEdit, setTemporaryEdit] = useState("");
  const addTodo = () => {
    setTodos([...todos, inputTodo]);
    setinputTodo("");
    // let newTodo = [...todos];
    // newTodo.push(inputTodo);
    // setTodos(newTodo);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const modalDelete = (todo) => {
    setTemporaryTodo(todo);
    handleShow();
  };

  const modalEdit = (todo) => {
    setTemporaryEdit(todo);
    handleShow2();
  };

  // console.log(addTodo);
  const handleChange = (e) => {
    setinputTodo(e.target.value);
  };
  // console.log(setinputTodo);

  const handleEdit = (e) => {
    setTemporaryEdit(e.target.value);
    console.log(temporaryEdit);
  };
  // console.log(setTemporaryEdit);

  const deleteTodo = (x) => {
    console.log(deleteTodo);
    // const newToDo = [...todos].filter((_, i) => i !== x);
    const newToDo = [...todos].filter((item) => item !== x);
    setTodos(newToDo);
    handleClose();
  };

  const editTodo = (e) => {
    console.log(e);
    // const nilai = prompt("edit apa?");
    const updateToDo = todos.map((item) => (item == e ? temporaryEdit : item));
    console.log(updateToDo);
    console.log(temporaryEdit);
    setTodos(updateToDo);
    handleClose2();
  };

  console.log(inputTodo);
  // console.log(temporaryEdit);
  return (
    <div class="container py-5 h-100">
      <div class="mb-3">
        <input
          class="me-3"
          type="text"
          onChange={handleChange}
          placeholder="Enter To Do"
          value={inputTodo}
        />
        <button type="button" onClick={addTodo}>
          +
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li>
            <span key={index}>{todo}</span>

            <button
              type="button"
              class="btn btn-danger"
              onClick={() => modalDelete(todo)}
              // onClick={() => deleteTodo(todo)}
            >
              Delete
            </button>

            <button
              type="button"
              class="btn btn-success"
              onClick={() => modalEdit(todo)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hapus Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Apakah ada yakin ingin menghapus {temporaryTodo} ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Batalkan
          </Button>
          <Button variant="primary" onClick={() => deleteTodo(temporaryTodo)}>
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="edit">Edit Value </label>
          <input
            class="me-3"
            type="text"
            name="edit"
            onChange={handleEdit}
            placeholder="Enter To Do"
            value={temporaryEdit}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Batalkan
          </Button>
          <Button variant="primary" onClick={() => editTodo(temporaryEdit)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Todo;
