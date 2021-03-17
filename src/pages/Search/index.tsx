import React, { useState } from "react";
import {Text, SafeAreaView, TouchableOpacity, View, StyleSheet, Keyboard} from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import Conditions from "../../components/Conditions";

import api, { KEY } from "../../services/api";

export default function Search() {
  const navigation = useNavigation();

  const [input, setInput] = useState<string>("");
  const [city, setCity] = useState(null);
  const [error, setError] = useState("");

  async function handlerSearch() {
    const URL = `/weather?key=${KEY}&city_name=${input}`;
    const response = await api.get(URL);

    setInput("");
    Keyboard.dismiss();

    if(response.data.by == "default") {
      alert("Humm, cidade não encontrada!");
      setCity(null);
      return;
    }

    setCity(response.data);
  }

  return(
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
        <Feather name="chevron-left" size={32} color="black"/>
        <Text style={{fontSize: 22}}>Voltar</Text>
      </TouchableOpacity>
      <View style={styles.searchBox}>
        <TextInput 
          style={styles.input}
          value={input} 
          onChangeText={value => setInput(value)} 
          placeholder="Ex: Belo Horizonte, MG"
        />
        <TouchableOpacity style={styles.icon} onPress={handlerSearch}>
          <Feather name="search" size={30} color="white"/>
        </TouchableOpacity>
      </View>

      {city && (
        <>
          <Header background={["#1ed6ff", "#97c1ff"]} icon={{name: "partly-sunny", color: "white"}} weather={city} /> 
          <Conditions weather={city}/>       
        </>
      )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "10%",
    backgroundColor: "#E8F0FF"
  },
  backButton: {
    flexDirection: "row",
    marginLeft: 15,
    alignSelf: "flex-start",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  },
  searchBox: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#DDD",
    width: "90%",
    height: 50,
    borderRadius: 8,
    marginBottom: 15
  },
  input: {
    width: "85%",
    height: 50,
    backgroundColor: "white",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 7
  },
  icon: {
    width: "15%",
    backgroundColor: "#1ED6FF",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  }
});