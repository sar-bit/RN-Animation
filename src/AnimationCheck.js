import React, { Component } from "react";
import { View, Animated, Image } from "react-native";
import footware from "../image/footware.jpg";

class AnimationCheck extends Component {
  state = {
    Fade: new Animated.Value(0),
    Spin: new Animated.Value(0),
    SpinValue:''
    
  };
 
  componentWillMount() {
    Animated.timing(this.state.Fade, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();

    Animated.timing(this.state.Spin,{
        toValue:1,
        duration:3000,
        useNativeDriver:true
    })
  }

  render() {
    this.state.SpinValue = this.state.Spin.interpolate({
        inputRange : [0,1],
        outputRange:['0deg','270deg']
    })
    return (
        <View>
      <Animated.Image
        style={{ height: 200, width: 200, opacity: this.state.Fade }}
        source={footware}
      />
       <Animated.Image
        style={{ height: 200, width: 200, transform:[{rotate:this.state.SpinValue}] }}
        source={footware}
      />
      </View>
    );
  }
}

export default AnimationCheck;
