import React, { useEffect, useState } from 'react';
import {Text, SafeAreaView, StyleSheet, FlatList, View} from "react-native";

import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Conditions from "../../components/Conditions";
import Forecast from "../../components/Forecast";

import * as Location from "expo-location";

import api, { KEY } from "../../services/api";

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState<any>({});
  const [icon, setIcon] = useState({ name: "cloud", color: "white" });
  const [background, setBackground] = useState(["#1ed6ff", "#97c1ff"]);

  useEffect(() => {

    (async () => {
      setLoading(true);

      let { granted } = await Location.requestPermissionsAsync();

      if (!granted)
        return;

      let location = await Location.getCurrentPositionAsync({});

      const URL = `/weather?key=${KEY}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`;

      const response = await api.get(URL);

      setWeather(response.data);

      console.log(weather);

      if (response.data.results.currently == "noite")
        setBackground(["#0c3741", "#0f2f61"]);

      switch (response.data.results.condition_slug) {
        case "clear_day":
          setIcon({ name: "partly_sunny", color: "#FFB300" });
          break;
        case "rain":
          setIcon({ name: "rainy", color: "white" });
          break;
        case "storm":
          setIcon({ name: "rainy", color: "white" });
          break;
      }

      setLoading(false);
    })();

  }, []);

  if (loading) {
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 17, fontWeight: "bold"}}>Carregando dados ...</Text>
      </View>
    )
  }

  return(
    <SafeAreaView style={styles.container}>
      <Menu/>
      <Header background={background} weather={weather} icon={icon}/>
      <Conditions weather={weather}/>
      <FlatList
        style={styles.list}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: "5%"}}
        data={weather.results.forecast}
        keyExtractor={item => item.date}
        renderItem={({item}) => <Forecast data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8f0ff",
    paddingTop: "5%"
  },
  list: {
    marginTop: 10,
    marginRight: 12,
    maxHeight: "28%"
  }
});