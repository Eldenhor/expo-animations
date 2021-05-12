import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Animated, TouchableOpacity, Easing } from "react-native";

export default function App() {
  const animationWidth = new Animated.Value(120);
  const rotationText = new Animated.Value(0);

  const inWidth = () => {
    Animated.timing(animationWidth, {
      toValue: 300,
      duration: 1000,
      useNativeDriver: false,
      easing: Easing.in(Easing.bounce),
    }).start();
  };

  const outWidth = () => {
    Animated.timing(animationWidth, {
      toValue: 120,
      duration: 1000,
      easing: Easing.in(Easing.bounce),
      useNativeDriver: false
    }).start();
  };

  const rotateText = () => {
    rotationText.setValue(0);
    Animated.timing(rotationText, {
      toValue: 1,
      duration: 2000,
      easing: Easing.in(Easing.bounce),
      useNativeDriver: true
    }).start();
  };

  const rotateData = rotationText.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animationWidthContainer, {width: animationWidth, height: 100}]}>
        <Text>Animated View</Text>
      </Animated.View>
      <TouchableOpacity style={styles.animButton} onPress={inWidth}>
        <Text>In Animation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.animButton} onPress={outWidth}>
        <Text>Out Animation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.animtedTextContainer} onPress={rotateText}>
        <Animated.View style={{transform: [{rotate: rotateData}]}}>
          <Text>Animation Text</Text>
        </Animated.View>
      </TouchableOpacity>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  animationWidthContainer: {
    borderWidth: 2,
    borderColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  animButton: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#dae0e0",
  },
  animtedTextContainer: {
    marginTop: 40,
    width: 200,
    height: 200,
    backgroundColor: "#8bd8e0",
    justifyContent: "center",
    alignItems: "center"
  }
});
