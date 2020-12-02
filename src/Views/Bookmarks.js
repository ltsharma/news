import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Octicons } from "@expo/vector-icons";
import useBookmarkController from "../Controllers/useBookmarks";
import useNewsController from "../Controllers/useNews";
import NewsCard from "./Components/NewsCard";
import { colors } from "../Config/theme";
import ListEmpty from "./Components/ListEmpty";

const Bookmarks = () => {
  const bookmarks = useBookmarkController();
  const news = useNewsController();

  const { setOptions } = useNavigation();

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <Pressable
            onPress={() => {
              Alert.alert(
                "Delete all bookmarks?",
                "Do you want to delete all bookmarks?",
                [
                  {
                    text: "Yes",
                    onPress: bookmarks.clearAllBookmarks,
                    style: "destructive",
                  },
                  { text: "No", style: "cancel" },
                ]
              );
            }}
            style={{ padding: 5, paddingHorizontal: 20 }}>
            <Octicons name="trashcan" size={24} color={colors.primary} />
          </Pressable>
        </View>
      ),
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={bookmarks.data}
        renderItem={({ item, index }) => (
          <NewsCard
            {...item}
            onPress={() => news.onPress(item, index)}
            index={index}
          />
        )}
        keyExtractor={(item, index) => `${item.publishedAt}-${index}`}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}
        ListEmptyComponent={() => (
          <ListEmpty
            name="Bookmarks"
            loading={bookmarks.loading && bookmarks.data.length == 0}
          />
        )}
      />
    </View>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({});
