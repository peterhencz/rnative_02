import React, { Component } from "react";
import { Text, View } from "react-native";

class UserScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#white",
        }}>
        <Text>users</Text>
      </View>
    );
  }
}

export default UserScreen;
