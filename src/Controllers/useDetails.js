import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
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

  const onSharePress = () => {};
  return {
    onBookmarkPress,
    onSharePress,
    bookmarked,
  };
};

export default useDetails;
