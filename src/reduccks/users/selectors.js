import { createSelector } from "reselect";

const userSelector = (state) => state.users;

// 指定したstateの値を各コンポーネントで利用できる
export const getUserId = createSelector([userSelector], (state) => state.uid);
export const getUserName = createSelector(
  [userSelector],
  (state) => state.username
);
