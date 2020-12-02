import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { cardShadow, colors } from "../../Config/theme";
import { getFormatedDate } from "../../Config/utils";

const NewsCard = (props) => {
  const {
    index,
    urlToImage: imageUrl,
    title,
    publishedAt,
    onPress = () => {},
  } = props;

  return (
    <Pressable style={styles.cardContainer} onPress={onPress}>
      <View style={styles.card}>
        <SharedElement id={`item.${index}.photo`}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </SharedElement>
        <View style={styles.content}>
          <Text numberOfLines={3} style={styles.title}>
            {title}
          </Text>
          <Text style={styles.published}>{getFormatedDate(publishedAt)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default React.memo(NewsCard);

const styles = StyleSheet.create({
  cardContainer: { flex: 1, padding: 7 },
  card: {
    backgroundColor: colors.lightGray,
    ...cardShadow,
  },
  image: { height: 150, resizeMode: "cover" },
  content: {
    padding: 7,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "500",
  },
  published: {
    fontSize: 12,
    marginTop: 7,
    textAlign: "right",
    color: colors.primary,
  },
});
