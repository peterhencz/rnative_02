import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/Home";
import UserScreen from "./src/Users";
import LogoTitle from "./src/Logo";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Home",
        headerTitle: LogoTitle,
        headerBackTitle: " ",
      }),
    },
    Users: {
      screen: UserScreen,
      navigationOptions: ({ navigation }) => ({
        title: "User",
        headerTitle: LogoTitle,
      }),
    },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        height: 70,
        backgroundColor: "salmon",
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "100",
      },
    },
    mode: "card",
    headerMode: "float",
  }
);

export default createAppContainer(AppNavigator);
