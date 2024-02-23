import axios from "axios";
import { useEffect, useState } from "react";

const userFetchData = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUserData(result.data);
  };
  return userData;
};
export default userFetchData;
