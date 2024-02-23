import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginData = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
     
      console.log(loginData);
    } catch {
      alert("Service Error");
    }
  };

  return (
    <div>
      <div className="user-post py-10 text-center">
        <h1 className="text-2xl">Login Form</h1>
        <div className="email py-3">
          <label className="text-xl">Email: </label>
          <input
            type="email"
            className="border-2 border-gray-500 py-1 px-2 w-60 rounded-lg"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="password">
          <label className="text-xl">Password: </label>
          <input
            type="password"
            className="border-2 border-gray-500 py-1 px-2 w-60 rounded-lg"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          className="border-2 border-black py-2 px-4 my-2 bg-black text-white rounded-md"
          onClick={handleLogin}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
