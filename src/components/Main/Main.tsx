import React from "react";
import MUser from "../../interface/MUser";
import User from "../User/User";

type Props = {
  data: MUser[];
};

const Main = ({ data }: Props) => {
  return (
    <>
      <div className="userList">
        <p className="totalUser">Total Results :{data.length} </p>
        {data.length != 0 &&
          data.map((user: MUser, i: number) => (
            <React.Fragment key={i}>
              <User userName={user.login} />
            </React.Fragment>
          ))}
      </div>
    </>
  );
};

export default Main;
