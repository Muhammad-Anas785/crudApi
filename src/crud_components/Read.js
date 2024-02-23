import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [stdData, setStdData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const result = await axios.get(
      "https://65d6ddb4f6967ba8e3bec47d.mockapi.io/crud"
    );
    setStdData(result.data);
    console.log(result.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(
      "https://65d6ddb4f6967ba8e3bec47d.mockapi.io/crud/" + id
    );
    fetchData();
  };

  const setLocalData = (id, name, age, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("s_name", name);
    localStorage.setItem("s_age", age);
    localStorage.setItem("s_email", email);
  };
  return (
    <div className="read-container text-center">
      <div className="create-btn">
        <Link to="/create">
          <button className="bg-green-600 py-2 px-6 flex justify-start ms-40 mt-8 font-semibold text-white rounded-md">
            Create User
          </button>
        </Link>
      </div>
      <h1 className="text-3xl py-10 font-bold">Student Data</h1>
      <table className="table-auto text-sm text-left  text-black mx-auto w-3/4">
        <thead className="border-b text-center">
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center border-b">
          {stdData.map((value) => {
            const { id, std_name, std_age, std_email } = value;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{std_name}</td>
                <td>{std_age}</td>
                <td>{std_email}</td>
                <td className="py-3">
                  <Link to="/edit">
                    <button
                      className="bg-blue-800 text-white py-2 px-4 rounded-md"
                      onClick={() =>
                        setLocalData(id, std_name, std_age, std_email)
                      }
                    >
                      Edit
                    </button>
                  </Link>

                  <button
                    className="bg-red-800 text-white py-2 px-4 rounded-md ms-2"
                    onClick={() => {
                      if (window.confirm("Are you sure to delete data??")) {
                        handleDelete(id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Read;
