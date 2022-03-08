import React from "react";
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
export const tabHeight = 64;
const { width } = Dimensions.get("window");
export default class SaticTabBar extends React.Component {
  constructor(props) {
    super(props);
    const { tabs } = this.props;
    this.values = tabs.map(
      (tab, index) => new Animated.Value(index === 0 ? 1 : 0)
    );
  }
  onPress = (index) => {
    const { value, tabs } = this.props;
    const tabWidth = width / tabs.length;
    Animated.sequence([
      ...this.values.map((value) =>
        Animated.timing(value, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        })
      ),
      Animated.parallel([
        Animated.spring(this.values[index], {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.spring(value, {
          toValue: -width + tabWidth * index,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };
  render() {
    const { tabs, value } = this.props || {};
    const tabWidth = width / tabs.length;
    return (
      <View style={styles.container}>
        {tabs.map((name, index) => {
          const activeValue = this.values[index];
          const opacity = value.interpolate({
            inputRange: [
              -width + tabWidth * (index - 1),
              -width + tabWidth * index,
              -width + tabWidth * (index + 1),
            ],
            outputRange: [1, 0, 1],
            extrapolate: "clamp",
          });
          const translateY = activeValue.interpolate({
            inputRange: [0, 1],
            outputRange: [tabHeight, 0],
          });
          return (
            <React.Fragment key={index}>
              <TouchableWithoutFeedback
                onPress={() => this.onPress(index)}
                {...{ index }}
              >
                <Animated.View style={[styles.tab, { opacity }]}>
                  <Icon size={25} name={name.name} />
                </Animated.View>
              </TouchableWithoutFeedback>
              <Animated.View
                style={{
                  position: "absolute",
                  top: -8,
                  width: tabWidth,
                  left: tabWidth * index,
                  height: tabHeight,
                  justifyContent: "center",
                  alignItems: "center",
                  transform: [{ translateY }],
                }}
              >
                <View style={styles.circle}>
                  <Icon size={25} name={name.name} />
                </View>
              </Animated.View>
            </React.Fragment>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    height: tabHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
