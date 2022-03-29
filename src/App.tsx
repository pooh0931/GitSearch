import React from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import Main from "./components/Main";
import "./styles/styles.scss";

const App = () => {
  return (
    <>
      <Info message="GitHub Search App" />
      <Header />
      <Main />
    </>
  );
};

export default App;
