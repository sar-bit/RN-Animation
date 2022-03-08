import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Tabbar from "../../component/Tabbar.js";

export default class TabbarAnimation extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E34234",
    justifyContent: "flex-end",
  },
});
