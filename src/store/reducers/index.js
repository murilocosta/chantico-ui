import { combineReducers } from "redux";

import navigationReducer from "./navigation";
import searchReducer from "./search";
import categoryReducer from "./category";

export default combineReducers({
  navigation: navigationReducer,
  search: searchReducer,
  category: categoryReducer
});
