import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";

import api from "../../services/api";
import styles from "./styles";

export default class CadastroLinks extends Component {
  state = {
    city: "",
    state: "",
    touristSpot: "",
    TravelDate: "",
    distanceKM: "",
    spent: ""
  };

  handleSubmit = async () => {
    const response = await api.post("project/tourism", {
      city: this.state.city,
      state: this.state.state,
      touristSpot: this.state.touristSpot,
      TravelDate: this.state.TravelDate,
      distanceKM: this.state.distanceKM,
      spent: this.state.spent
    });

    this.props.navigation.navigate("Home");
  };

  render(props) {
    console.log(this.props);

    return (
      <KeyboardAvoidingView behavior="position" style={styles.form}>
        <TextInput
          style={styles.inputText}
          placeholder="Cidade"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.city}
          onChangeText={text => this.setState({ city: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Estado"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.state}
          onChangeText={text => this.setState({ state: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Ponto Turístico"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.touristSpot}
          onChangeText={text => this.setState({ touristSpot: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Data da Viagem"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.TravelDate}
          onChangeText={text => this.setState({ TravelDate: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Distância KM"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.distanceKM}
          onChangeText={text => this.setState({ distanceKM: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Valor: R$ Ex: 12.50"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.spent}
          onChangeText={text => this.setState({ spent: text })}
        />

        <TouchableOpacity
          style={styles.productButton}
          onPress={this.handleSubmit}
        >
          <Text style={styles.productButtonText}>Salvar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}