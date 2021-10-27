import "./App.css";
import Login from "./components/Login/Login";
import Login2 from "./components/Login/Login2";
import Todo from "./components/Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import About from "./components/About";
import { useEffect, useState } from "react";
import Blog from "./components/Blog";

function App() {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {}, [isLogin]);

  const user = {
    nama: "Skilvul",
    alamat: "Jakarta",
  };
  console.log(user);
  // cara untuk merubah js object menjadi JSON
  // bisa menggunakan JSON.stringify

  // untuk memasukan data ke local storage
  // kita bisa menggunakan localStorage.setItem
  const userJSON = JSON.stringify(user);
  console.log(userJSON);
  localStorage.setItem("user", userJSON);

  return (
    //3. Bungkus
    <Router>
      {/* <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul> */}
      {/* 5. membuat navigasi */}
      <div className="d-flex">
        <ul>
          <li>
            <Link to="/javascript">Javascript</Link>
          </li>
          <li>
            <Link to="/css">CSS</Link>
          </li>
        </ul>
        <h1 className="me-5">Logo</h1>
        <Link to="/" className="me-3">
          Home
        </Link>
        <br />
        <Link to="/about" className="me-3">
          About
        </Link>
        <br />
        <Link to="/todo" className="me-3">
          Todo
        </Link>
        <br />
        <Link to="/login" className="me-3">
          Login
        </Link>
        <br />
      </div>

      {/* <Login />
      <Login2 /> */}
      {/* 4. membuat rute */}
      <Switch>
        <Route exact path="/">
          <h1>Selamat datang di halaman home</h1>
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/login">
          <Login2 />
        </Route>
        <Route path="/register">
          <Login2 />
        </Route>

        <Route path="/todo">
          <Todo />
          {/* {isLogin ? <Todo /> : <Redirect to="/login" />} */}
        </Route>

        <Route path="/:namaBlog">
          <Blog />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
