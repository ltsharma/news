import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dimensions } from "react-native";
import DrawContent from "../Views/Components/DrawContent";
import { BookmarkRoute, NewsRoute } from "./ChildrenStacks";

const { width } = Dimensions.get("window");

const Drawer = createDrawerNavigator();

const DrawRoute = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{ width: width * 0.8 }}
      initialRouteName="Home"
      drawerContent={(props) => <DrawContent {...props} />}>
      <Drawer.Screen name="News" component={NewsRoute} />
      <Drawer.Screen name="Bookmarks" component={BookmarkRoute} />
    </Drawer.Navigator>
  );
};

export default DrawRoute;
