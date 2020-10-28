import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { Avatar, Badge } from "react-native-elements";

import ProfileScreen from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";
import AnalyticsScreen from "./AnalyticsScreen";

import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import ColorPalette from "./ColorPalette";
import ColorPaletteModal from "./ColorPaletteModal";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const MainStack = createStackNavigator();
const HomeStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    name="MainTabs"
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
          <Icon name="ios-trending-up" color={color} size={26} />
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
          <Icon name="ios-build" color={color} size={26} />
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
      <MainStack.Screen
        name="MainStack"
        component={HomeStackScreen}
        options={{ headerShown: false, title: "Home" }}
      />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator mode="modal">
      <HomeStack.Screen
        name="Main"
        component={Home}
        options={{
          title: "Home",
          headerRight: () => (
            <View style={styles.avatar}>
              <Avatar rounded title="JD" activeOpacity={0.7} />
            </View>
          ),
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#fff"
              color="#000"
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="ColorPaletteModal"
        component={ColorPaletteModal}
        options={{ title: "Palette Entry" }}
      />
    </HomeStack.Navigator>
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
  avatar: {
    margin: 5,
  },
});
