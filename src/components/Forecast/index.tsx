import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { condition } from "../../utils/condition";

export default function Forecast({data}) {

  const icon = condition(data.condition);

  return (
    <View style={styles.container}>
      <Text>{data.date}</Text>
      <Ionicons name={icon.name} color={icon.color} size ={25}/>
      <View style={styles.temp}>
        <Text>{data.min}°</Text>
        <Text style={styles.maxTemp}>{data.max}°</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginLeft: 12,
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    justifyContent: "space-around",
    alignItems: "center"    
  },
  date: {
    fontSize: 14
  },
  maxTemp: {
    fontSize: 18,
    fontWeight: "bold"
  },
  temp: {
    alignItems: "center",
    justifyContent: "center"
  }
});