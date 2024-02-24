import { StyleSheet, Text, View } from 'react-native'
import { DARK_PURPLE, WHITE } from './constants'

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.welcome}>Hello World</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    alignItems: 'center',
    backgroundColor: DARK_PURPLE,
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    color: WHITE,
    fontSize: 26,
  },
})
