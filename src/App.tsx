import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Info from "./components/Info";
import Main from "./components/Main/Main";
import MUser from "./interface/MUser";

const App = () => {
  const [users, setUsers] = useState<MUser[] | null>([]);
  const [searchWord, setSearchWord] = useState("");
  const [sortBy, setSortBy] = useState("byNameA");

  useEffect(() => {
    const sortUsers = (sortBy: string) => {
      let sorted;
      console.log("In Sort User", sortBy);

      switch (sortBy) {
        case "byNameA":
          sorted = [...users].sort((a, b) => a.login.localeCompare(b.login));
          break;
        case "byNameD":
          sorted = [...users].sort((a, b) => b.login.localeCompare(a.login));
          break;
        case "byRankA":
          sorted = [...users].sort((a, b) => a.id - b.id);
        case "byRankD":
          sorted = [...users].sort((a, b) => b.id - a.id);
      }

      console.log("Sorted:", sorted);
      setUsers(sorted);
    };
    axios
      .get(`https://api.github.com/search/users?q=${searchWord}`)
      .then((res) => {
        console.log("fetched one", res.data.items);
        setUsers(res.data.items);

        // sortUsers(sortBy);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchWord, sortBy]);

  return (
    <>
      <Info message="GitHub Search App" />
      <Header setSearchWord={setSearchWord} setSortBy={setSortBy} />
      <Main data={users} />
    </>
  );
};

export default App;
