import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {
  userName: string;
};

interface Repos {
  id: number;
  name: string;
  language: string;
}

const Repository = ({ userName }: Props) => {
  const [reposDetail, setReposDetail] = useState<Repos[] | null>(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then((res) => {
        console.log(res.data);

        setReposDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userName]);
  return (
    <div className="reposData">
      {reposDetail &&
        reposDetail.map((repo) => (
          <pre key={repo.id} className="repoItem">
            {`
          ${repo.name}  :  ${repo.language}`}
          </pre>
        ))}
    </div>
  );
};

export default Repository;
