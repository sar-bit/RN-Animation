import * as React from "react";
import {
  SafeAreaView,
  View,
  Dimensions,
  StyleSheet,
  Text,
  Animated,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import * as shape from "d3-shape";
import SaticTabBar, { tabHeight as height } from "./SaticTabBar";

const tabs = [
  { name: "grid" },
  { name: "list" },
  { name: "refresh-cw" },
  { name: "box" },
  { name: "user" },
];
const { width } = Dimensions.get("window");
const tabWidth = width / tabs.length;
//const height = 64;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const getPath = () => {
  const leftt = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)([
    { x: 0, y: 0 },
    { x: width, y: 0 },
  ]);
  const tab = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(shape.curveBasis)([
    { x: width, y: 0 },
    { x: width + 5, y: 0 },
    { x: width + 10, y: 10 },
    { x: width + 15, y: height },
    { x: width + tabWidth - 15, y: height },
    { x: width + tabWidth - 10, y: 10 },
    { x: width + tabWidth - 5, y: 0 },
    { x: width + tabWidth, y: 0 },
  ]);
  const right = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)([
    { x: width + tabWidth, y: 0 },
    { x: width * 2.5, y: 0 },
    { x: width * 2.5, y: height },
    { x: 0, y: height },
    { x: 0, y: 0 },
  ]);

  return `${leftt} ${tab} ${right}`;
};
const d = getPath();

class Tabbar extends React.Component {
  value = new Animated.Value(-width);
  render() {
    const { value: translateX } = this;
    return (
      <>
        <View {...{ width, height }}>
          <AnimatedSvg
            width={width * 2.5}
            {...{ height }}
            style={{ transform: [{ translateX }] }}
          >
            <Path {...{ d }} fill="white" />
          </AnimatedSvg>
          <View style={StyleSheet.absoluteFill}>
            <SaticTabBar {...{ tabs }} value={translateX} />
          </View>
        </View>
        <SafeAreaView style={styles.sareArea} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  sareArea: {
    backgroundColor: "white",
  },
});

export default Tabbar;
