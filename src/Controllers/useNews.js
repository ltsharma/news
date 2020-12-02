import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookmarks } from "./BookmarkController";
import { getNews } from "./NewsController";

const useNewsController = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const news = useSelector((state) => state.news);
  useEffect(() => {
    dispatch(getNews());
    dispatch(getAllBookmarks());
  }, []);

  const onPress = (props, index) => {
    navigate("Details", { ...props, id: index });
  };

  return {
    ...news,
    onPress,
  };
};

export default useNewsController;
