import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>110919032</Text>
      <Text>數位二甲</Text>
      <Text>胡竇琳</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E69772',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
