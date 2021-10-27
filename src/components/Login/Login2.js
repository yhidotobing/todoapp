import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login2 = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChangeUser = (e) => {
    console.log(e.target.name, e.target.value);
    setUser((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    history.push("/");
  };
  return (
    <div>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChangeUser}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="password"
        value={user.password}
        onChange={handleChangeUser}
      />
      <button onClick={handleLogin}>Klik</button>
    </div>
  );
};

export default Login2;
