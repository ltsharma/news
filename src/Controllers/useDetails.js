import React, { useEffect, useState } from "react";
import useBookmarkController from "./useBookmarks";

const useDetails = (params) => {
  const { changeBookmark, data: bookmarks } = useBookmarkController();
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const bookmarked = bookmarks.some((data) => {
      return data.uniqueId.trim() === `${params.publishedAt}`.trim();
    });
    setBookmarked(bookmarked);
  }, [bookmarks]);

  const onBookmarkPress = () => {
    changeBookmark(params, bookmarked);
  };

  return {
    onBookmarkPress,
    bookmarked,
  };
};

export default useDetails;
