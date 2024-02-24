import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants'

export default function GoalItem({ item, removeItem }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => removeItem(item.id)}
        android_ripple={{ color: colors.darkPurple }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item?.text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: colors.lightPurple,
    borderRadius: 6,
    margin: 8,
  },
  goalText: {
    color: colors.white,
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
})
