import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ addGoalHandler, isModalVisible, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function onAddGoal(enteredGoalText) {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={isModalVisible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          placeholder='Your course goal!'
          style={styles.textInput}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={() => onAddGoal(enteredGoalText)} />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
