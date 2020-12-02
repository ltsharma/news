import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import * as Location from "expo-location";
import { colors } from "../../Config/theme";
import { getFormatedDate } from "../../Config/utils";
import moment from "moment";

const DrawContent = (props) => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
        }

        let location = await Location.getCurrentPositionAsync({});
        let details = await Location.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        setLocation({ ...location, ...details[0] });
      } catch (e) {
        setLocation(null);
      }
    })();
  }, []);

  useEffect(() => {
    if (location) {
      (async () => {
        try {
          const {
            coords: { latitude: lat, longitude: lon },
          } = location;
          const promis = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=9bd7a04562bc16f2f7d9d61e751c31be`
          );
          const data = await promis.json();
          setWeather(data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, [location]);

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ paddingHorizontal: 5 }}>
        <ImageBackground
          source={require("../../assets/sky.jpg")}
          style={styles.sky}>
          <Text style={styles.city}>{location?.city}</Text>
          <Text style={styles.weather}>Scatterd</Text>
          <Text style={styles.temp}>{weather?.main?.temp.toFixed(1)}° C</Text>
          <View style={styles.row}>
            <Text style={styles.tempTxt}>{getFormatedDate(moment())}</Text>
            <View>
              <Text style={styles.tempTxt}>
                Max: {weather?.main?.temp_max.toFixed(1)}° C
              </Text>
              <Text style={styles.tempTxt}>
                Min: {weather?.main?.temp_min.toFixed(1)}° C
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <DrawerItemList
        {...props}
        activeBackgroundColor={"transparent"}
        inactiveBackgroundColor={"transparent"}
      />
    </DrawerContentScrollView>
  );
};

export default DrawContent;

const styles = StyleSheet.create({
  sky: {
    borderRadius: 5,
    width: "100%",
    overflow: "hidden",
    justifyContent: "center",
    paddingVertical: 15,
  },
  city: {
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    color: colors.white,
  },
  weather: {
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    color: colors.white,
    marginTop: 5,
  },
  temp: {
    fontSize: 42,
    marginTop: 10,
    textAlign: "center",
    color: colors.white,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  tempTxt: {
    color: colors.white,
    lineHeight: 26,
  },
});
