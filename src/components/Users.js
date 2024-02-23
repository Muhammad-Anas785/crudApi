import userFetchData from "../utils/useFetchData";

const Users = () => {
  const userData = userFetchData();

  return (
    <div className="users-container text-justify text-xl px-6">
      <h1 className="text-5xl py-5">Users Name:</h1>
      {userData.map((value, index) => {
        return (
          <h1 key={value.id}>
            {index + 1} : {value.name}
          </h1>
        );
      })}
    </div>
  );
};
export default Users;
