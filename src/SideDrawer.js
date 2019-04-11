import React, { Component } from "react";
import { ScrollView, Text, View, StyleSheet, Image } from "react-native";
import Logo from "./assets/logo.png";
import LogoTitle from "./Logo";

class SideDrawer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.navImageContainer}>
            <LogoTitle />
          </View>
          <Text style={styles.sectionHeadingStyle}>Yolo</Text>
          <Text style={styles.navSectionStyle}>
            <Text style={styles.navItemStyle} onPress={() => alert("home")}>
              Home
            </Text>
          </Text>
        </ScrollView>
        <Text>hello</Text>
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
    backgroundColor: "#E4CCCC",
  },
  navItemStyle: {
    padding: 20,
    margin: 10,
    color: "white",
  },
});

export default SideDrawer;
