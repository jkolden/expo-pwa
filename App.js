import React, { useState } from "react";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./screens/MainTabScreen";
import Home from "./screens/Home";
import SettingsScreen from "./screens/SettingsScreen";
import DrawerContent from "./screens/DrawerContent";

import ColorPalette from "./screens/ColorPalette";
import ColorPaletteModal from "./screens/ColorPaletteModal";
import Icon from "react-native-vector-icons/Ionicons";

import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";

import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import RootStackScreen from "./screens/RootStackScreen";

//bottom tabs
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const MainStack = createStackNavigator();

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const SettingsStackScreen = ({ navigation }) => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerLeft: () => (
            <Icon.Button
              name="ios-arrow-back"
              size={25}
              backgroundColor="#fff"
              color="#000"
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        }}
      />
    </SettingsStack.Navigator>
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
        //  options={{ headerShown: true }}
      />
    </HomeStack.Navigator>
  );
};

const MainStackScreen = ({ navigation }) => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Main"
        component={HomeStackScreen}
        options={{
          title: "Home",
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
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <RootStackScreen />
        {/*<RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main" //the screen name prop correspopnds to the name of the route
          component={MainStackScreen} //the component prop corresponds to the component to be rendered
          options={{ headerShown: false, title: "Home" }}
        />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
          options={{ title: "Palette Entry" }}
        />
      </RootStack.Navigator> */}

        {/* <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen
            name="Main"
            component={MainTabScreen}
            options={{ headerShown: true, title: "Home" }}
          />
          <Drawer.Screen
            name="SettingsScreen"
            component={SettingsStackScreen}
            options={{ headerShown: false, title: "Settings" }}
          />
        </Drawer.Navigator> */}
      </NavigationContainer>
    </PaperProvider>
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
