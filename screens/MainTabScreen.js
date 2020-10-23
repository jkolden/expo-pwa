import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";

import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import ProfileScreen from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";
import AnalyticsScreen from "./AnalyticsScreen";

import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import ColorPalette from "./ColorPalette";
import ColorPaletteModal from "./ColorPaletteModal";

const MainStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    style={{ backgroundColor: "tomato" }}
  >
    <Tab.Screen
      name="Home"
      component={MainStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "royalblue",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Analytics"
      component={AnalyticsScreen}
      options={{
        tabBarLabel: "Analytics",
        tabBarColor: "#d02860",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-analytics" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarLabel: "Settings",
        tabBarColor: "rebeccapurple",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-cog" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "green",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

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
