import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";

const Main = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ background: "#e9ecef", padding: "0 200px 0 300px" }}>
      <p
        style={{
          textAlign: "left",
          margin: "unset",
          position: "relative",
          left: "15px",
          top: "5px",
        }}
      >
        Total Results : {users.length}
      </p>
      {Array.isArray(users) &&
        users.map((user, i) => (
          <div
            key={i}
            style={{
              background: "white",
              width: "600px",
              height: "100px",
              display: "flex",
              justifyContent: "flex-start",
              margin: "15px",
              padding: "10px",
              border: "1px solid #e9ecef",
              borderRadius: "5px",
              boxShadow: "1px 2px #ced4da",
            }}
          >
            <div>
              <img
                src={user.avatar_url}
                alt="Profile Pic"
                height={100}
                width={100}
                style={{ borderRadius: "50%" }}
              />
            </div>

            <User userName={user.login} />
          </div>
        ))}
    </div>
  );
};

export default Main;
