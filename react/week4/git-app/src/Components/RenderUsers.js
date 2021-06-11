import React, { useContext } from "react";
import "../App.css";
import { ApiData } from "./FetchUsers";
function RenderUsers() {
  const { users } = useContext(ApiData);
  return (
    <ul>
      {users.length === 0 ? (
        <h3>No result</h3>
      ) : (
        users.map((user) => {
          return <li key={user.id}>{user.login}</li>;
        })
      )}
    </ul>
  );
}
export default RenderUsers;
