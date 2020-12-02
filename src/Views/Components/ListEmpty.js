import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { colors } from "../../Config/theme";

const ListEmpty = ({ name, loading }) => {
  return (
    <View
      style={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={{ textAlign: "center", color: colors.gray, fontSize: 16 }}>
          No {name} to display
        </Text>
      )}
    </View>
  );
};

export default ListEmpty;

const styles = StyleSheet.create({});
