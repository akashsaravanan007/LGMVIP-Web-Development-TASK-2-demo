import React, { useState } from "react";
import Avatar from "./components/avatar";
import "./index.css";

const App = () => {
  const [users, setUser] = useState([]);
  const loadUsers = async () => {
   
    const response = await fetch("https://api.github.com/users");
    const jsonresponse = await response.json();
    setUser(jsonresponse);
  };

  return (
    <div className="App">
      <h1>ZIPPY Users</h1>
      <h2>Hello All, Click Get users button to get user and their details</h2>
      <button className="btn-user" onClick={loadUsers}>Get Users</button>
      <h2>Users will appear below:</h2>
      
      
        <div className = "user-row">
        {users.map(({ id, login, avatar_url }) => {
          
                      return (
                        
              <div className="user-card user-column" key={id}>
                <img src={avatar_url} className="uppercard" alt="..." />
                <div className="card-body">
                  <h3 className="title-card-user">
                    {login}
                  </h3>
                  <h4 className="user-text"></h4>
                </div>
              </div>
            );
            
                      })}
      </div>
      </div>
    
  );
};
export default App;
