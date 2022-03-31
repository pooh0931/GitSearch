import axios from "axios";
import React, { useEffect, useState } from "react";
import GUser from "../../interface/GUser";
import Repository from "../Repository/Repository";

type Props = {
  userName: string;
};

const User = ({ userName }: Props) => {
  const [person, setPerson] = useState<GUser | null>(null);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then((res) => {
        console.log("User", res.data);

        setPerson(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userName]);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div id="myDiv" className="singleUser">
        <div>
          <img
            src={
              person &&
              `https://avatars.githubusercontent.com/u/${person.id}?v=4`
            }
            alt=" Pic"
            className="profileImg"
          />
        </div>
        <div className="userDetail">
          <h3>{person && `${person.name}`}</h3>
          <pre>
            {person &&
              `
Profile URL: ${person.url} 
Location: ${person.location}`}
          </pre>
        </div>
        <div>
          <button className="btn-detail" onClick={toggleHandler}>
            {toggle ? "Collapse" : "Details"}
          </button>
        </div>
      </div>
      {toggle != false && (
        <div>
          <Repository userName={userName} />
        </div>
      )}
    </>
  );
};

export default User;
