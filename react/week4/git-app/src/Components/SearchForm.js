import React, { useContext } from "react";
import { ApiData } from "./FetchUsers";
import RenderUsers from "./RenderUsers";

function SearchForm() {
  const { fetchUserswithApi } = useContext(ApiData);

  return (
      <div>
    <input
      type="text"
      placeholder="Search for user"
      onChange={(e) => fetchUserswithApi(e.target.value)}
    />
    <RenderUsers />
    
    </div>
  );
}
export default SearchForm;
