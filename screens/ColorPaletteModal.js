import React, { useState, useCallback, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Alert, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

const ColorPaletteModal = ({ navigation }) => {
  const [name, setName] = useState();
  const [image, setImage] = useState();

  const _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  const loadImage = () => {
    let strImage = image?.replace(/^data:image\/[a-z]+;base64,/, "");

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let payload = JSON.stringify({ img: strImage });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: payload,
      redirect: "follow",
    };

    fetch(
      "http://192.168.1.106/api/google-image",
      requestOptions
    ).then((data) => console.log(data));
  };

  const handleSubmit = useCallback(() => {
    if (!name) {
      Alert.alert("Please enter a palette name");
    } else {
      const newColorPalette = {
        paletteName: name,
        colors: [],
      };
      navigation.navigate("Home", { newColorPalette });
    }
  }, [name]);

  const handleSubmit1 = useCallback(() => {
    loadImage();
  }, [image]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setName(value)}
        value={name}
        placeholder="Name of the Palette"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit1}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={_pickImage}>
        <Text style={styles.buttonText}>Add Image</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  container: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
  },
  button: {
    height: 40,
    backgroundColor: "teal",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  image: {
    margin: 10,
    width: 200,
    height: 200,
  },
});

export default ColorPaletteModal;
