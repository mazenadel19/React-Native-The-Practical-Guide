import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Button, FlatList, StyleSheet, View } from 'react-native'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'
import { colors } from './constants'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  function openModal() {
    setIsModalVisible(true)
  }

  function closeModal() {
    setIsModalVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ])
    closeModal()
  }

  function removeItem(id) {
    setCourseGoals((list) => list.filter((item) => item.id !== id))
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add Goal"
          onPress={openModal}
          color={colors.veryLightPurple}
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          isModalVisible={isModalVisible}
          onCancel={closeModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem item={itemData.item} removeItem={removeItem} />
            )}
            keyExtractor={(item, _) => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  goalsContainer: {
    flex: 5,
  },
})
