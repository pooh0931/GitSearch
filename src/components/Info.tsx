import React from "react";

type Props = {
  message: string;
};

const Info = ({ message }: Props) => {
  return (
    <>
      <h1>{message}</h1>
    </>
  );
};

export default Info;
