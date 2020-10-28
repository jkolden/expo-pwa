import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";

import PalettePreview from "../components/PalettePreview";

const Home = ({ navigation, route }) => {
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;
  const [colors, setColors] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPalletes = useCallback(async () => {
    fetch("https://color-palette-api.kadikraman.now.sh/palettes")
      .then((res) => res.json())
      .then((data) => setColors(data));
  }, []);

  useEffect(() => {
    fetchColorPalletes();
  }, [fetchColorPalletes]);

  useEffect(() => {
    if (newColorPalette) {
      setColors((colors) => [newColorPalette, ...colors]);
    }
  }, [newColorPalette]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalletes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, [fetchColorPalletes]);

  return (
    <View>
      {/**<Text style={styles.buttonText}>{JSON.stringify(route.params)}</Text> */}
      <FlatList
        style={styles.list}
        data={colors}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            handlePress={() => {
              navigation.navigate("ColorPalette", item);
            }}
            palette={item}
          />
        )}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ColorPaletteModal");
            }}
          >
            <Text style={styles.buttonText}>Add a Color Scheme</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: "white",
  },
  buttonText: {
    color: "teal",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  text: { color: "#000" },
});

export default Home;
