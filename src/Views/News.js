import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import useNewsController from "../Controllers/useNews";
import ListEmpty from "./Components/ListEmpty";
import NewsCard from "./Components/NewsCard";
import { TabView, SceneMap } from "react-native-tab-view";

const News = () => {
  const news = useNewsController();
  return (
    <View style={styles.container}>
      <FlatList
        data={news.data}
        keyExtractor={(item, index) => `${item.publishedAt}-${index}`}
        renderItem={({ index, item }) => (
          <NewsCard
            {...item}
            onPress={() => news.onPress(item, index)}
            index={index}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty
            name="News"
            loading={news.loading && news.data.length == 0}
          />
        )}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: { flex: 1 },
  listContainer: { padding: 7, paddingBottom: 30, flexGrow: 1 },
});
