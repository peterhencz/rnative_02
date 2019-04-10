import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#white",
        }}>
        <Text>home</Text>
        <Button
          title="user"
          onPress={() => this.props.navigation.navigate("Users")}
        />
      </View>
    );
  }
}

export default HomeScreen;
