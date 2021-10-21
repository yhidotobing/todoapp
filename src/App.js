import "./App.css";
import Login from "./components/Login";
import Login2 from "./components/Login2";
import Todo from "./components/Todo";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      {/* <Login />
      <Login2 /> */}
      <Todo />
    </div>
  );
}

export default App;
