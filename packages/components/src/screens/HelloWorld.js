import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "react-router-native";

export const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World Page</Text>
      <Link to="/">
        <Text style={styles.linkText}>Back</Text>
      </Link>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 40,
    color: "#56567B",
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  linkText: {
    fontSize: 40,
    color: "#fff",
    backgroundColor: "#3F7FF6",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
  }
});
