import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { CardStyleInterpolators } from "@react-navigation/stack";
import Details from "../Views/Details";
import DrawRoute from "./DrawRoute";

const Stack = createSharedElementStackNavigator();

const AppRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        headerTitle: null,
      }}>
      <Stack.Screen
        component={DrawRoute}
        name="news"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const item = route.params;
          return [`item.${item.id}.photo`];
        }}
      />
    </Stack.Navigator>
  );
};

export default AppRoute;
