import { useState } from 'react'
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native'
import goalImg from '../assets/images/goal.png'
import { colors } from '../constants'

const GoalInput = ({ addGoalHandler, isModalVisible, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }
  function onAddGoal(enteredGoalText) {
    if (enteredGoalText === '') return

    addGoalHandler(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={goalImg} alt="Goal Image" style={styles.image} />
        <TextInput
          onChangeText={goalInputHandler}
          placeholder="Your day goal!"
          style={styles.textInput}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color={colors.pink} onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => onAddGoal(enteredGoalText)}
              color={colors.veryLightPurple}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 8,
    width: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  image: {
    height: 100,
    margin: 20,
    width: 100,
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: colors.darkPurple,
    borderBottomColor: colors.grey,
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  textInput: {
    backgroundColor: colors.grey,
    borderColor: colors.grey,
    borderRadius: 6,
    borderWidth: 1,
    color: colors.darkBlue,
    padding: 16,
    width: '100%',
  },
})
