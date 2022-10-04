import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Speech from "expo-speech";
import react, { useState } from "react";
//npx expo install expo-speech pitää ladata ensin

export default function App() {
  const [input, setInput] = useState("");

  const speak = () => {
    Speech.speak(input);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(input) => setInput(input)}
      />
      <TouchableOpacity style={styles.button} onPress={speak}>
        <Text>Press to hear Text</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 30,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "gray",
    borderWidth: 2,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "gray",
    width: 150,
    height: 34,
    margin: 4,
  },
});
