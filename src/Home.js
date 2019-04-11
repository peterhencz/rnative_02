import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class HomeScreen extends Component {
  static navigationOptions = {
    draweLabel: "Home",
    drawerIcon: () => <Text>🧶</Text>,
  };

  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     headerRight: (
  //       <Button color="#fff" title="🐱   " onPress={() => alert("miau")} />
  //     ),
  //   };
  // };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}>
        <Text>home</Text>
        <Button
          title="open side drawer"
          onPress={() => this.props.navigation.openDrawer()}
        />
        {/* <Button
          title="user"
          onPress={() =>
            this.props.navigation.navigate("Users", {
              //  userId: 12,
              userName: "cica",
              userLastName: "kis",
            })
          }
        /> */}
        <Text>{this.props.navigation.getParam("message", "n/a")}</Text>
      </View>
    );
  }
}

export default HomeScreen;
