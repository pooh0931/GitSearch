import React from "react";
// import "../styles/header.scss";

const Header = () => {
  return (
    <div className="git-header">
      <form>
        <select
          name="sort"
          id="sort"
          style={{ height: "30px", width: "200px" }}
        >
          <option value="byName">Sort By Name(A-Z)</option>
          <option value="byName">Sort By Name(Z-A)</option>
          <option value="byRank">Sort By Rank</option>
          <option value="byRank">Sort By Rank</option>
        </select>
        <input
          style={{ height: "25px", width: "300px", marginLeft: "100px" }}
          type="text"
          name="search"
          id="search"
          placeholder="Search User"
        />
      </form>
    </div>
  );
};

export default Header;
