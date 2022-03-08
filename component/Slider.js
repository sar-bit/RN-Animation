import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { snapPoint, useVector } from "react-native-redash";
import Wave, { HEIGHT, MARGIN_WIDTH, Side, WIDTH } from "./Wave";
import Button from "./Button";

console.log(Side, "Side");
const PREV = WIDTH;
const NEXT = 0;

const Slider = ({ index, children: current, prev, next, setIndex }) => {
  const hasPrev = !!prev;
  const hasNext = !!next;
  const zIndex = useSharedValue(0);
  //const left = useVector(0, HEIGHT / 2);
  //const right = useVector(0, HEIGHT / 2);
  //const activeSide = useSharedValue(Side.NONE);
  //const isTransitioningLeft = useSharedValue(false);
  // const isTransitioningRight = useSharedValue(false);
  return (
    <View style={StyleSheet.absoluteFill}>
      {current}
      {prev && (
        <View style={[StyleSheet.absoluteFill]}>
          <Wave
            // position={left}
            side={Side.LEFT}
            // isTransitioning={isTransitioningLeft}
          >
            {prev}
          </Wave>
          {/* <Button position={left} side={Side.LEFT} activeSide={activeSide} /> */}
        </View>
      )}
      {next && (
        <View style={[StyleSheet.absoluteFill]}>
          <Wave side={Side.RIGHT}>{next}</Wave>
          {/* <Button position={left} side={Side.LEFT} activeSide={activeSide} /> */}
        </View>
      )}
    </View>
  );
};

export default Slider;
