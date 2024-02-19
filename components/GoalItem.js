import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function GoalItem ({ item }){

  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{item?.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
