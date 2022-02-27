import React from "react";
import { useSelector } from "react-redux";
import { getUserId, getUserName } from "../reduccks/users/selectors";

const Home = () => {
  // 頻繁に利用するステートの情報はselectorで関数を作ると便利
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const username = getUserName(selector);

  return (
    <div>
      <h2>ホーム</h2>
      <p>{uid}</p>
      <p>{username}</p>
    </div>
  );
};

export default Home;
