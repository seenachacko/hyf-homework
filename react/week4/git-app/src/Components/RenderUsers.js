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
          console.log(user)
          return <li key={user.id}><img src={user.avatar_url} alt='avathar' width={50} height={50}/><br></br><a target="_blank" href={user.html_url}>{user.login}</a>
          </li>;
        })
      )}
    </ul>
  );
}
export default RenderUsers;
