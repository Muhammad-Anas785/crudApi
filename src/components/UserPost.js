import axios from "axios";
import { useState } from "react";

const UserPost = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      {
        firstName,
        lastName,
      }
    );
  };

  const handlePut = async (e) => {
    e.preventDefault();

    const data = await axios.put(
      "https://jsonplaceholder.typicode.com/users/2",
      { firstName, lastName }
    );
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const data = await axios.delete(
      "https://jsonplaceholder.typicode.com/users/1"
    );
  };
  return (
    <div className="user-post py-10 text-center">
      <h1 className="text-2xl">POST Data</h1>
      <div className="first-name py-3">
        <label className="text-xl">First Name: </label>
        <input
          type="text"
          name="fname"
          placeholder="first name..."
          className="border-2 border-gray-500 py-1 px-2 w-60 rounded-lg"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div className="last-name">
        <label className="text-xl">Last Name: </label>
        <input
          type="text"
          name="lname"
          placeholder="last name..."
          className="border-2 border-gray-500 py-1 px-2 w-60 rounded-lg"
          value={lastName}
          onChange={(e) => {
            setLasttName(e.target.value);
          }}
        />
      </div>
      <button
        className="border-2 border-black py-2 px-4 my-2 bg-black text-white rounded-md"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <button
        className="border-2 border-black py-2 px-4 my-2 bg-black text-white rounded-md mx-3"
        onClick={handlePut}
      >
        Update
      </button>

      <button
        className="border-2 border-black py-2 px-4 my-2 bg-black text-white rounded-md mx-3"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};
export default UserPost;
