import { useState } from "react";

const Login = () => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => {
    // console.log(e);
    setName(e.target.value);
  };
  const handleChangePassword = (e) => {
    // console.log(e);
    setPassword(e.target.value);
  };
  return (
    <div>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChangeUsername}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="password"
        value={password}
        onChange={handleChangePassword}
      />
      <button onClick={() => console.log(username, password)}>Klik</button>
    </div>
  );
};

export default Login;
