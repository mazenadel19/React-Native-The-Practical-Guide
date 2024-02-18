import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [myList, setMyList] = useState([]);

  function changeHandler(enteredText) {
    setText(enteredText);
  }

  function pressHandler() {
    setMyList((state) => [...state, { text, id: Math.random().toString() }]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your goals!' onChangeText={changeHandler} />
        <Button title='Add Goal' onPress={pressHandler} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={myList}
          renderItem={(itemData) => {
            return (
              <View style={styles.listItem}>
                <Text style={styles.listText}>{itemData.item.text}</Text>
                keyExtractor={(item) => item.id}
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  listContainer: {
    flex: 5,
  },
  listItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  listText: {
    color: "white",
  },
});
