import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';
import * as Speech from 'expo-speech';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {name: '',};
  }
  speak = () => {
    var thingToSay = this.state.name;
    this.state.name === ''
    ? alert('Por favor digite uma palavra.')
    : Speech.speak(thingToSay);
  };
  render() {
    return(
      <View style={styles.textContainer1}>
      <Header
      backgroundColor={'brown'}
      centerComponent={{
        text: 'Conversor de Texto para Fala',
        style: {color:'yellow',
        fontSize: 13,
        fontWeight: "bold"
        },
      }}
      />
      <Image style={styles.imageIcon}
      source={{uri: 'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'}}/>
      <Text style={styles.text2}>Digite a palavra</Text>
      <TextInput style={styles.inputBox}
      onChangeText={(text)=>{
        this.setState({name: text});
      }}
      value={this.state.name}/>
      <View>
      <TouchableOpacity style={styles.button} onPress={this.speak}>
      <Text style={styles.text2}>Clique para ouvir</Text>
      </TouchableOpacity>
      </View>
      </View>
    ); 
  }
}
// StyleSheet
const styles = StyleSheet.create({
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderHeight: 4,
    outline: 'none',
  },
  textContainer1: {
    backgroundColor: '#7d5a54',
    justifyContent: 'center',
  },
  text2: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'bold',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  button: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'yellow',
    marginTop: 80,
    borderRadius: 50,
    width: '80%',
    alignSelf: 'center',
    height: 80,
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
});