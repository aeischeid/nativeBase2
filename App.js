import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, View } from "native-base";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});