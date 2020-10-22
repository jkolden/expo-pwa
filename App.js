import React, { Fragment } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./navigation/BottomNav";
import Home from "./screens/Home";
import ColorPalette from "./screens/ColorPalette";
import ColorPaletteModal from "./screens/ColorPaletteModal";

import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <RootStack.Navigator mode="modal">
          <RootStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="ColorPaletteModal"
            component={ColorPaletteModal}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  pink: {
    backgroundColor: "#fff",
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,

    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cyanBox: {
    backgroundColor: "#68c182",
  },
  purpleBox: {
    backgroundColor: "#fad55c",
  },
  blueBox: {
    backgroundColor: "#267db3",
  },
  redBox: {
    backgroundColor: "#ed6647",
  },
  box: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default App;
