import React from "react";
import {
  Button,
  View,
} from "react-native";

export function Home({ navigation }) {
  return (
    <View>
      <Button
        title="Hello world"
        onPress={() => navigation.navigate("HelloWorld")}
      />
    </View>
  );
}
