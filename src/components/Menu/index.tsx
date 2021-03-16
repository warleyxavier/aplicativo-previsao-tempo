import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";

export default function Menu() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <Feather
        name="menu"
        size={36}
         color="#373737"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 9,
    width: 70,
    height: 70,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    left: 15,
    top: 40,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 3,
      width: 1
    }
  }
});