import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [myList, setMyList] = useState([]);
  const [text, setText] = useState("");

  const handlePress = () => {
    setMyList((prevList) => [...prevList, text]);
    setText("");
  };

  return (
    <View style={app.container}>
      <View style={app.inputContainer}>
        <TextInput
          style={app.input}
          placeholder='My Goals ...'
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <TouchableOpacity style={app.button} title='Add' onPress={handlePress}>
          <Text style={app.title}>Add</Text>
        </TouchableOpacity>
      </View>
      <View>
        {myList.map((e) => (
          <View key={e} style={app.listItem}>
            <View style={app.bulletPoint}></View>
            <Text style={app.itemText}>{e}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const app = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    gap: 10,
  },
  input: {
    width: "70%",
    height: 40,
    borderBottomWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "black",
    marginRight: 5,
  },
  itemText: {
    fontSize: 16,
  },
});
