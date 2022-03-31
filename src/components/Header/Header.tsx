import React from "react";
import GUser from "../../interface/GUser";

interface IUser {
  setSearchWord: (arg: string) => void;
  setSortBy: (arg: string) => void;
}

const Header: React.FC<IUser> = ({ setSearchWord, setSortBy }) => {
  const filterHandler = (e: any): void => {
    console.log(e.target.value);
    setSearchWord(e.target.value);
  };

  const sortHandler = (e: any): void => {
    console.log(e.target.value);
    setSortBy(e.target.value);
  };
  return (
    <div className="git-header">
      <form>
        <select
          name="sort"
          id="sort"
          className="sortUser"
          onChange={sortHandler}
        >
          <option value="byNameA">Sort By Name(A-Z)</option>
          <option value="byNameD">Sort By Name(Z-A)</option>
          <option value="byRankA">Sort By Rank</option>
          <option value="byRankD">Sort By Rank</option>
        </select>
        <input
          className="searchUser"
          type="text"
          name="search"
          id="search"
          placeholder="Search User"
          onChange={filterHandler}
        />
      </form>
    </div>
  );
};

export default Header;
