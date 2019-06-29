import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from "./styles"

export default class App extends React.Component {
  state = {
    photo: null,
  };
  photoChose = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchCamera(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
        Alert.alert(
          'Sucesso!',
          `A foto foi salva na galeria!`,
          [
            { text: 'OK' }
          ]
        );
      }
    });
  };
  render() {
    const { photo } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}
        <TouchableOpacity
          style={styles.singnInButton}
          onPress={this.photoChose}>
          <Text style={styles.singnInButtonText}>Foto</Text>
        </TouchableOpacity>
      </View>
    );
  }
}