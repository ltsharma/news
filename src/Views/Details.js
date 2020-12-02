import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
  Linking,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../Config/theme";
import { getFormatedDate } from "../Config/utils";
import useDetails from "../Controllers/useDetails";

const Details = () => {
  const { params } = useRoute();
  const { setOptions } = useNavigation();
  const { onBookmarkPress, bookmarked } = useDetails(params);

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <Pressable
            onPress={onBookmarkPress}
            style={{ padding: 5, paddingHorizontal: 10 }}>
            {bookmarked ? (
              <Ionicons name="ios-star" size={26} color={colors.primary} />
            ) : (
              <Ionicons
                name="ios-star-outline"
                size={26}
                color={colors.primary}
              />
            )}
          </Pressable>
        </View>
      ),
    });
  }, [onBookmarkPress]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SharedElement id={`item.${params.id}.photo`}>
        <Image
          source={{ uri: params.urlToImage }}
          style={{ height: 300, resizeMode: "cover" }}
        />
      </SharedElement>
      <Text style={styles.title}>{params.title}</Text>

      <View style={styles.hr} />
      <View style={styles.info}>
        <Text style={styles.infoTitles}>
          {getFormatedDate(params.publishedAt)}
        </Text>
        <View style={styles.vhr} />
        <Text style={styles.infoTitles}>By {params?.source?.name}</Text>
      </View>
      <View style={styles.phr} />
      <View style={styles.details}>
        <Text style={styles.detailText}>{params.description}</Text>
      </View>
      <Pressable
        onPress={() => Linking.openURL(params.url)}
        style={styles.moreButton}>
        <Text style={styles.buttonText}>Read More</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    padding: 15,
  },
  hr: {
    height: 2,
    backgroundColor: colors.lightGray1,
  },
  phr: {
    height: 2,
    backgroundColor: colors.primary,
  },
  vhr: {
    width: 2,
    backgroundColor: colors.lightGray1,
    height: "100%",
    marginHorizontal: 10,
  },
  info: {
    padding: 10,
    flexDirection: "row",
  },
  infoTitles: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: "700",
  },
  details: {
    padding: 10,
  },
  detailText: {
    fontSize: 18,
    lineHeight: 28,
  },
  moreButton: {
    alignItems: "center",
    backgroundColor: colors.lightGray1,
    paddingVertical: 20,
    borderRadius: 20,
    marginHorizontal: 20,
  },
  buttonText: { color: colors.primary, fontSize: 16, fontWeight: "500" },
});
