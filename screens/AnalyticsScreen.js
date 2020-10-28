import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const AnalyticsScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>Costs by Month</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
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
