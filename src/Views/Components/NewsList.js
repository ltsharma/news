import React, { useCallback } from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import useNewsController from "../../Controllers/useNews";
import ListEmpty from "./ListEmpty";
import NewsCard from "./NewsCard";

const NewsList = (props) => {
  const news = useNewsController();
  const renderCard = useCallback(
    ({ index, item }) => (
      <NewsCard
        {...item}
        onPress={() => news.onPress(item, index + props.route.key)}
        index={index + props.route.key}
      />
    ),
    [news.onPress]
  );

  const keys = useCallback(
    (item, index) => `${item.publishedAt}-${item.title}`,
    []
  );
  return (
    <FlatList
      data={news.data}
      keyExtractor={keys}
      renderItem={renderCard}
      ListEmptyComponent={() => (
        <ListEmpty
          name="News"
          loading={news.loading && news.data.length == 0}
        />
      )}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default NewsList;

const styles = StyleSheet.create({
  listContainer: { padding: 7, paddingBottom: 30, flexGrow: 1 },
});
