import React, {Component} from 'react';
import {Text,View} from 'react-native';
import { Card, Button } from "react-native-elements";

class Dashboard extends Component{
    render(){
        return(<View>
        <Card>
        <Button
          backgroundColor="#03A9FF"
          title="Swipe"
          onPress={()=>this.props.navigation.navigate('SwipeAnimation')}
        />
        </Card>
        <Card>
        <Button
          backgroundColor="#03A9FF"
          title="TabBar Animation"
          onPress={()=>this.props.navigation.navigate('TabbarAnimation')}
        />
        </Card>
        <Card>
        <Button
          backgroundColor="#03A9FF"
          title="Liquid Swipe Animation"
          onPress={()=>this.props.navigation.navigate('LiquidSwipe')}
        />
        </Card> 
        <Card>
        <Button
          backgroundColor="#03A9FF"
          title="SVG Animation"
          onPress={()=>this.props.navigation.navigate('SVGAnimation')}
        />
        </Card>  
        
        </View>)
    }
}

export default Dashboard