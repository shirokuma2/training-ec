// initialStateとセット利用
// Reducerのcaseではなく関数を作ったら追加する

import { createStore as reduxCreateStore, combineReducers } from "redux";
// import { ProductReducer } from "../products/reducers";
import { UserReducer } from "../users/reducers";

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      //   products: ProductsReducer,
      users: UserReducer,
    })
  );
}
