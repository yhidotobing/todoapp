import { useState } from "react";
const Login2 = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChangeUser = (e) => {
    setUser((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
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
      <button onClick={() => console.log(user)}>Klik</button>
    </div>
  );
};

export default Login2;
