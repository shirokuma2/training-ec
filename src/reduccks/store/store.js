// initialStateとセット利用
// Reducerのcaseではなく関数自体を作ったら追加する
import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
// Reduxで非同期処理を行うために必要なライブラリ
import thunk from "redux-thunk";

// import { ProductReducer } from "../products/reducers";
import { UserReducer } from "../users/reducers";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      // 移動元のパスを保持
      router: connectRouter(history),
      //   products: ProductsReducer,
      users: UserReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
