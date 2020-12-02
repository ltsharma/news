import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import store from "./Config/store";
import DrawRoute from "./Routes/DrawRoute";
import { colors } from "./Config/theme";
import Database, { createTable } from "expo-sqlite-query-helper";
import AppRoute from "./Routes/AppRoute";
import { StatusBar } from "expo-status-bar";

const NewsTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: colors.primary,
    background: colors.white,
  },
};

const App = () => {
  // Initialize database for bookmarks
  Database("NewsApp.db");
  useEffect(() => {
    createTable("bookmarks", {
      primaryKey: "INTEGER PRIMARY KEY AUTOINCREMENT",
      uniqueId: "TEXT",
      jsonData: "TEXT",
      created: "TEXT",
    });
  }, []);
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer theme={NewsTheme}>
        <AppRoute />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
