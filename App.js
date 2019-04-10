import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/Home";
import UserScreen from "./src/Users";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: "home",
      }),
    },
    Users: { screen: UserScreen },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4baba",
      },
      headerTintColor: "white",
    },
    mode: "card",
    headerMode: "float",
  }
);

export default createAppContainer(AppNavigator);
