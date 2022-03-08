import React from "react";
import { StyleSheet, View, Dimensions, Animated } from "react-native";
import { useAnimatedProps } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
//import MaskedView from "@react-native-community/masked-view";
export const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");
export const MIN_LEDGE = 25;
export const MARGIN_WIDTH = MIN_LEDGE + 50;
export const Side = {
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  NONE: "NONE",
};
const AnimatedPath = Animated.createAnimatedComponent(Path);
const Wave = ({ side, children }) => {
  const animatedProps = useAnimatedProps(() => {
    const d = ["M 0 0", `H${WIDTH / 2}`, `V${HEIGHT}`, "H 0", "Z"];
    return {
      d: d.join(" "),
    };
  });
  return (
    <View
      style={StyleSheet.absoluteFill}
      maskElement={
        <Svg style={StyleSheet.absoluteFill}>
          <AnimatedPath fill="black" animatedProps={animatedProps} />
        </Svg>
      }
    >
      {children}
    </View>
  );
};

export default Wave;
