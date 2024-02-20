import { Pressable, StyleSheet, Text, View } from "react-native";
import { DARK_PURPLE, LIGHT_PURPLE, WHITE } from '../constants';

export default function GoalItem({ item, removeItem }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => removeItem(item.id)}
        android_ripple={{ color: DARK_PURPLE }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item?.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: LIGHT_PURPLE,
    borderRadius: 6,
    margin: 8,
  },
  goalText: {
    color: WHITE,
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
