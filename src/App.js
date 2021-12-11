import "./styles.css";
import React, { useState, useEffect } from "react";
import Web from "./Components/Web/Web";
import User from "./Components/User/User";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [click, setclick] = useState(0);
  const [page, setpage] = useState(null);

  const getUsers = () => {
    Axios.get("https://reqres.in/api/users?page=1").then((response) => {
      setpage(response.data.data);
    });
  };
  useEffect(() => {
    click && getUsers();
  }, [click]);

  return (
    <div className="App">
      <Web buttonclicked={setclick} />
      <div className="app-row">
        {page &&
          page.map((val) => {
            return (
              <User
                id={val.id}
                first_name={val.first_name}
                last_name={val.last_name}
                email={val.email}
                image={val.avatar}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
