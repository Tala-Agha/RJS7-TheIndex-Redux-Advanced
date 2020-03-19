import { combineReducers } from "redux";

import authorsReducer from "./authors";
import booksReducer from "./books";

const rootReducer = combineReducers({
  authorState: authorsReducer,
  bookState: booksReducer
});

export default rootReducer;
