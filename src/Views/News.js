import React, { useCallback } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import NewsList from "./Components/NewsList";
import TabBar from "./Components/TabBar";

const News = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "movies", title: "Movies" },
    { key: "fashion", title: "Fashion" },
    { key: "models", title: "Models" },
    { key: "locals", title: "Locals" },
    { key: "sports", title: "Sports" },
  ]);
  const initialLayout = { width: Dimensions.get("window").width };

  const scenemap = useCallback(
    () =>
      routes?.reduce((scenes, item) => {
        return { ...scenes, [item.key]: NewsList };
      }, {}),
    [routes]
  );
  const renderScene = SceneMap(scenemap());

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        initialLayout={initialLayout}
        onIndexChange={setIndex}
        renderTabBar={(props) => <TabBar {...props} />}
      />
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
