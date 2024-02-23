import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Edit = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("s_name"));
    setAge(localStorage.getItem("s_age"));
    setEmail(localStorage.getItem("s_email"));
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    await axios.put("https://65d6ddb4f6967ba8e3bec47d.mockapi.io/crud/" + id, {
      std_name: name,
      std_age: age,
      std_email: email,
    });
    navigate("/");
  };
  return (
    <>
      <div className="read-btn">
        <Link to="/" className="flex justify-center">
          <button className="bg-green-600 py-2 px-6 mt-8 font-semibold text-white rounded-md">
            Read Users
          </button>
        </Link>
      </div>
      <div className="edit-container p-10 flex justify-center">
        <form onSubmit={handleUpdate}>
          <div className="heading w-96 bg-green-500 rounded-lg">
            <h1 className="text-2xl text-center my-2 py-4 text-white">
              Update Data
            </h1>
          </div>
          <div className="name">
            <label className="text-lg font-bold">Name: </label> <br />
            <input
              type="text"
              placeholder="Name Here..."
              className="border-2 border-gray-200 my-2 px-3 py-2 rounded-lg w-96"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="age">
            <label className="text-lg font-bold">Age: </label> <br />
            <input
              type="text"
              placeholder="Age Here..."
              className="border-2 border-gray-200 my-2 px-3 py-2 rounded-lg w-96"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <div className="email">
            <label className="text-lg font-bold">Email: </label> <br />
            <input
              type="text"
              placeholder="Email Here..."
              className="border-2 border-gray-200 my-2 px-3 py-2 rounded-lg w-96"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <input
            type="submit"
            value="Update"
            className="px-4 py-2 mt-2 rounded-lg text-white bg-green-600 cursor-pointer hover:bg-green-500 "
          />
        </form>
      </div>
    </>
  );
};
export default Edit;
