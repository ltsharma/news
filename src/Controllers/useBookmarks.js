import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToBookmark, removeBookmark } from "./BookmarkController";

const useBookmarkController = () => {
  const bookmarks = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();

  const changeBookmark = (item, bookmarked) => {
    if (!bookmarked) {
      dispatch(addToBookmark(item));
    } else {
      dispatch(removeBookmark(item));
    }
  };

  const clearAllBookmarks = () => {
    dispatch(removeBookmark(null, true));
  };

  return {
    ...bookmarks,
    changeBookmark,
    clearAllBookmarks,
  };
};

export default useBookmarkController;
