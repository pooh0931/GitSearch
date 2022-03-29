import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {
  userName: string;
};

interface GUser {
  id: number;
  name: string;
  login: string;
  url: string;
  location: string;
}

const User = ({ userName }: Props) => {
  const [person, setPerson] = useState<GUser | null>(null);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then((res) => {
        // console.log(res.data);

        setPerson(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div style={{ padding: "10px", fontSize: "12px", width: "300px" }}>
        <h3 style={{ margin: "unset", textAlign: "left" }}>
          {person && `${person.name}`}
        </h3>
        <pre style={{ textAlign: "left", margin: "unset" }}>
          {person &&
            `
Profile URL: ${person.url} 
Location: ${person.location}`}
        </pre>
      </div>
      <div>
        <button
          style={{
            color: "#0081a7",
            background: "white",
            border: "solid 1.5px #0081a7",
            padding: "5px 20px",
            borderRadius: "5px",
            position: "relative",
            left: "90px",
            top: "70px",
          }}
        >
          Details
        </button>
      </div>
    </>
  );
};

export default User;
