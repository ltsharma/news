import { combineReducers } from "redux";
import BookmarksModal from "./BookmarksModal";
import NewsModel from "./NewsModel";

const combinedReducer = combineReducers({
  news: NewsModel,
  bookmarks: BookmarksModal,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer;
