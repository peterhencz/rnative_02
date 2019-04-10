import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class UserScreen extends Component {
  static navigationOptions = {
    title: "UserScreen",
    headerStyle: {
      backgroundColor: "#f4baba",
    },
    headerTintColor: "white",
  };

  render() {
    const userId = this.props.navigation.getParam("userId", "lofaszka");
    const userName = this.props.navigation.getParam("userName", "");
    const userLastName = this.props.navigation.getParam("userLastName", "");

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#white",
        }}>
        <Text>users</Text>
        <Text>user id: {userId}</Text>
        <Text>user name: {userName}</Text>
        <Text>user lastname: {userLastName}</Text>
        <Button
          title="home"
          onPress={() =>
            this.props.navigation.navigate("Home", { message: "hello " })
          }
        />
        {/* <Button title="back" onPress={() => this.props.navigation.goBack()} /> */}
      </View>
    );
  }
}

export default UserScreen;
