import React, { useState } from "react";
import Nav from "./Nav";
import axios from "axios";

const Home = () => {
  const [users, setUserData] = useState([]);
  const fetchValue = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((resp) => {
      //   console.log(resp)
      setUserData(resp.data);
    });
  };

  React.useEffect(() => {
    fetchValue();
  }, []);

  return (
    <div>
      <Nav />
      <h1>Dashboard</h1>
      <p>Welcome to Home Page</p>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 col-md-12">
            <h2>Dashboard</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Home;
