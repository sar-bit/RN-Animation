import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card, Button } from "react-native-elements";
import Deck from "./Deck";

const DATA = [
  {
    id: 1,
    text: "Card #1",
    uri: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80",
  },
  {
    id: 2,
    text: "Card #2",
    uri: "https://images.unsplash.com/photo-1597429287872-86c80ff53f38?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NjI5ODQ1OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100",
  },
  {
    id: 3,
    text: "Card #3",
    uri: "https://i.picsum.photos/id/427/200/200.jpg?hmac=s_shz8jLgIAiRoZ7FP0MA88RuD5sS0xJIGNmuTZLvs8",
  },
  {
    id: 4,
    text: "Card #4",
    uri: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80",
  },
  {
    id: 5,
    text: "Card #5",
    uri: "https://i.picsum.photos/id/427/200/200.jpg?hmac=s_shz8jLgIAiRoZ7FP0MA88RuD5sS0xJIGNmuTZLvs8",
  },
];

class SwipeAnimation extends React.Component {
  renderCard(item) {
    return (
      <Card key={item.id}>
        <Card.Title>{item.text}</Card.Title>
        <Card.Image>
          <Image
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
            source={{ uri: item.uri }}
          />
        </Card.Image>
        <Text style={{ marginBottom: 10 }}>{item.text}</Text>
        <Button
          icon={{ name: "code" }}
          backgroundColor="#03A9FF"
          title="View Now!"
        />
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card>
        <Card.Title>Empty</Card.Title>
        <Text>There's no more content here!</Text>
        <Button backgroundColor="#03A9FF" title="View Now!" />
      </Card>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          onSwipeLeft={(res) => console.log(res)}
          onSwipeRight={(res) => console.log(res)}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default SwipeAnimation;
