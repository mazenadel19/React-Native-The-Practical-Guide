import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
import { GREY } from '../constants';

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
  button: {
    marginHorizontal: 8,
    width: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  inputContainer: {
    alignItems: "center",
    borderBottomColor: GREY,
    borderBottomWidth: 1,
    flex: 1,
    justifyContent: "center",
    marginBottom: 24,
    padding: 16,
  },
  textInput: {
    borderColor: GREY,
    borderWidth: 1,
    padding: 8,
    width: "100%",
  },
});
