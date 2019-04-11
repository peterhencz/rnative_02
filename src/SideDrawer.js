import React, { Component } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { NavigationActions } from "react-navigation";
import LogoTitle from "./Logo";

class SideDrawer extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navImageContainer}>
          <LogoTitle />
        </View>
        <ScrollView>
          <Text style={styles.sectionHeadingStyle}>Yolo</Text>
          <Text style={styles.navSectionStyle}>
            <Text
              style={styles.navItemStyle}
              onPress={this.navigateToScreen("Home")}>
              Home
            </Text>
          </Text>
          <Text style={styles.navSectionStyle}>
            <Text
              style={styles.navItemStyle}
              onPress={this.navigateToScreen("Users")}>
              Users
            </Text>
          </Text>
          <Text style={styles.navSectionStyle}>
            <Text
              style={styles.navItemStyle}
              onPress={this.navigateToScreen("Home")}>
              Yoloka
            </Text>
          </Text>
          <Text style={styles.navSectionStyle}>
            <Text
              style={styles.navItemStyle}
              onPress={this.navigateToScreen("Users")}>
              Cica
            </Text>
          </Text>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>hello</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4baba",
    flex: 1,
    paddingTop: 40,
  },
  navImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
  sectionHeadingStyle: {
    color: "white",
    backgroundColor: "#FC7272",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  navSectionStyle: {
    padding: 10,
    backgroundColor: "#E4CCCC",
  },
  navItemStyle: {
    color: "white",
  },
  footerContainer: {
    padding: 20,
  },
});

export default SideDrawer;
