import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ item, removeItem }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => removeItem(item.id)}
        android_ripple={{ color: "#210644" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item?.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
