import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AnalyticsScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>Analytics Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default AnalyticsScreen;
