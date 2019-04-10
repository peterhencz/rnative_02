import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/Home";
import UserScreen from "./src/Users";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Users: { screen: UserScreen },
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(AppNavigator);
