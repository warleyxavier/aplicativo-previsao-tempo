import React from "react";
import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#1ed6ff", "#97c1ff"]}
    >
      <Text style={styles.date}>15/03/2021</Text>
      <Text style={styles.city}>Peçanha</Text>
      
      <Ionicons
        name="cloud"
        color="white"
        size={150}
      />

      <Text style={styles.temp}>30°</Text>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: "55%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  date: {
    color: "white",
    fontSize: 17
  },
  city: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  temp: {
    color: "white",
    fontSize: 80,
    fontWeight: "bold"
  }
});