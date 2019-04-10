import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class HomeScreen extends Component {
  // static navigationOptions = {
  //   title: "Home",
  //   headerStyle: {
  //     backgroundColor: "#f4baba",
  //   },
  //   headerTintColor: "white",
  // };
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
          onPress={() =>
            this.props.navigation.navigate("Users", {
              //  userId: 12,
              userName: "cica",
              userLastName: "kis",
            })
          }
        />
        <Text>{this.props.navigation.getParam("message", "n/a")}</Text>
      </View>
    );
  }
}

export default HomeScreen;
