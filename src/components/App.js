import React from "react";
import Header from "./Header";
import Users from "./Users";
import UserPost from "./UserPost";
import Login from "./Login";

const App = () => {
  return (
    <div>
      <Header />
      <Users />
      {/* <Login/> */}

      <UserPost />
    </div>
  );
};

export default App;
