import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import games from "./store/games";
import singleGame from "./store/singleGame";
import reviews from "./store/review";
import user from "./store/users";

const reducer = combineReducers({
  games,
  singleGame,
  reviews,
  user,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
