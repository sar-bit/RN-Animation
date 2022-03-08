import React from 'react';
import {Dimensions, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import SwipeAnimation from '../src/SwipeAnimation';
import Dashboard from '../src/Dashboard';
import SVGAnimation from '../src/svgAnimation/SVGAnimation';
import TabbarAnimation from '../src/tabbarAnimation/TabbarAnimation';
import LiquidSwipe from '../src/liquidSlider/LiquidSwipe';
const Stack = createStackNavigator();
function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name={'Dashboard'} component={Dashboard} />
        <Stack.Screen name={'SwipeAnimation'} component={SwipeAnimation} />
        <Stack.Screen name={'SVGAnimation'} component={SVGAnimation}/>
        <Stack.Screen name={'TabbarAnimation'} component={TabbarAnimation}/>
        <Stack.Screen name={'LiquidSwipe'} component={LiquidSwipe}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default AppNavigation;
  