import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from "react-navigation";

import HomeScreen from "./src/Home";
import UserScreen from "./src/Users";

import LogoTitle from "./src/Logo";
import SideDrawer from "./src/SideDrawer";

const AppNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      // navigationOptions: ({ navigation }) => ({
      //   title: "home",
      //   drawerLabel: "🧶",
      // }),
    },
    Users: UserScreen,
  },
  {
    contentComponent: SideDrawer,
    drawerType: "slide",
    contentOptions: {
      activeTintColor: "white",
      activeBackgroundColor: "#f4baba",
    },
  }
);

// const AppNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: ({ navigation }) => ({
//         title: "Home",
//         headerTitle: LogoTitle,
//         headerBackTitle: " ",
//       }),
//     },
//     Users: {
//       screen: UserScreen,
//       navigationOptions: ({ navigation }) => ({
//         title: "User",
//         headerTitle: LogoTitle,
//       }),
//     },
//   },
//   {
//     initialRouteName: "Home",
//     defaultNavigationOptions: {
//       headerStyle: {
//         height: 70,
//         backgroundColor: "salmon",
//       },
//       headerTintColor: "white",
//       headerTitleStyle: {
//         fontWeight: "100",
//       },
//     },
//     mode: "card",
//     headerMode: "float",
//   }
// );

export default createAppContainer(AppNavigator);
