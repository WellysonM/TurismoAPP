import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
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
    ImagePicker.showImagePicker(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
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
          <Text style={styles.singnInButtonText}>Escolha sua foto</Text>
        </TouchableOpacity>
      </View>
    );
  }
}