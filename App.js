import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  console.log('render')

  return (
    <View style={styles.container}>
      <Text>&lt;Hello World /&gt;</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
