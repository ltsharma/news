import React from "react";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import News from "../Views/News";
import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../Config/theme";
import Bookmarks from "../Views/Bookmarks";

const Stack = createSharedElementStackNavigator();

const NewsRoute = () => (
  <Stack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      headerTitle: null,
    }}>
    <Stack.Screen
      component={News}
      name="News"
      options={({ navigation }) => ({
        headerLeft: () => (
          <Pressable
            style={{ padding: 5, paddingHorizontal: 15 }}
            onPress={() => navigation.openDrawer()}>
            <MaterialIcons name="menu" size={24} color={colors.primary} />
          </Pressable>
        ),
      })}
    />
  </Stack.Navigator>
);

const BookmarkRoute = () => (
  <Stack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      headerTitle: null,
    }}>
    <Stack.Screen
      component={Bookmarks}
      name="Bookmarks"
      options={({ navigation }) => ({
        headerLeft: () => (
          <Pressable
            style={{ padding: 5, paddingHorizontal: 15 }}
            onPress={() => navigation.openDrawer()}>
            <MaterialIcons name="menu" size={24} color={colors.primary} />
          </Pressable>
        ),
      })}
    />
  </Stack.Navigator>
);

export { NewsRoute, BookmarkRoute };
