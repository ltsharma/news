import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../../Config/theme";

const TabBar = (props) => {
  return (
    <ScrollView
      horizontal
      style={{ flexGrow: 0 }}
      showsHorizontalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={styles.tabContainer}>
      {props?.navigationState?.routes?.map((item, index) => {
        return (
          <Pressable
            key={item.key + index}
            style={[
              styles.tabButton,
              {
                borderBottomWidth: index == props.navigationState.index ? 2 : 0,
              },
            ]}
            onPress={() => props.jumpTo(item.key)}>
            <Text>{item.title}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabContainer: {
    flexGrow: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray1,
  },
  tabButton: {
    padding: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderBottomColor: colors.primary,
  },
});
