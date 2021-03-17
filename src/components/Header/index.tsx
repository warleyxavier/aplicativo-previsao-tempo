import React from "react";
import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Header({background, weather, icon}) {
  return (
    <LinearGradient
      style={styles.container}
      colors={background}
    >
      <Text style={styles.date}>{weather.results.date}</Text>
      <Text style={styles.city}>{weather.results.city_name}</Text>
      
      <Ionicons
        name={icon.name}
        color={icon.color}
        size={150}
      />

      <Text style={styles.temp}>{weather.results.temp}°</Text>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: "55%",
    alignItems: "center",
    justifyContent: "space-around",
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