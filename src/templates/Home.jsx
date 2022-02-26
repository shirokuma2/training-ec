import React from "react";
import { useSelector } from "react-redux";
import { getUserId, getUserName } from "../reduccks/users/selectors";

const Home = () => {
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const usetname = getUserName(selector);

  return (
    <div>
      <h2>ホーム</h2>
      <p>{uid}</p>
      <p>{usetname}</p>
    </div>
  );
};

export default Home;
