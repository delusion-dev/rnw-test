import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "react-router-native";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Link to="/hello" >
        <Text style={styles.linkText}>Hello World</Text>
      </Link>
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
  linkText: {
    fontSize: 40,
    color: "#fff",
    backgroundColor: "#3F7FF6",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
  }
});

