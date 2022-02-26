import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signIn } from "../reduccks/users/operations";

const Login = () => {
  const dispatch = useDispatch();
  //   const selector = useSelector((state) => state);

  //   console.log(selector);
  const usersData = {
    uid: "003",
    username: "mo",
  };

  return (
    <div>
      <h2>ログイン</h2>
      <button
        onClick={() => {
          dispatch(signIn());
        }}
      >
        ログインする
      </button>
    </div>
  );
};

export default Login;
