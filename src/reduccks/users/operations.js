import { signInAction } from "./actions";
import { push } from "connected-react-router";

export const signIn = () => {
  return async (dispatch, getState) => {
    // 現在のステート状態を取得
    const state = getState();
    const isSignedIn = state.users.isSignedIn;

    // ログインズ済みの場合は何もしない
    if (isSignedIn) return;

    const url = "https://api.github.com/users/shirokuma2";
    const response = await fetch(url)
      .then((res) => res.json())
      .catch(() => null);

    const username = response.login;

    dispatch(
      signInAction({
        isSignedIn: true,
        uid: "001",
        username,
      })
    );
    dispatch(push("/"));
  };
};
