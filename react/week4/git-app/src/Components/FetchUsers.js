import React, { useState, useEffect} from "react";
import SearchForm from "./SearchForm";
export const ApiData = React.createContext();
function FetchUsers() {
  const [users, setUsers] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const fetchUserswithApi = async (user) => {
    if (user!=='') {
      const api = `https://api.github.com/search/users?q=${user}`;

    try {
      const response = await fetch(api);
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw Error(message);
      }
      const data = await response.json();
      setIsLoaded(true);
      setUsers(data.items);
     
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
      
    }
    
    
  };

  useEffect(() => {
    fetchUserswithApi();
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <ApiData.Provider value={{ users, fetchUserswithApi }}>
          <SearchForm/>
        </ApiData.Provider>
      </div>
    );
  }
}

export default FetchUsers;
