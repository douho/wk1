import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
//import { Image } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>110919032</Text>
      <Text style={styles.title}>數位二甲</Text>
      <Text style={styles.title}>胡竇琳</Text>
      <View style={styles.a}>
      <Image style={styles.img} source={require("./assets/pingue.jpg")} />
      </View>
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
  title:{
    color: '#fff',
    fontSize: 40,
  },
  a:{
    width: '100%',
    display:"flex",
    justifyContent:'center',
    // alignContent:"center",
  },
  img:{
    alignSelf:'center',
    width: '50%',
    height: '50%',
    // position: 'absolute',
  }
});
