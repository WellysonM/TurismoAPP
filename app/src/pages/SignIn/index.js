import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Switch
} from "react-native";

import api from "../../services/api";
import styles from "./styles";

export default class SignIn extends Component {
  state = {
    email: "",
    emailValid: true,
    password: "",
    professor: false
  };

  inputValidate = (email, inputType) => {
    const validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (inputType === "email") {
      validation.test(email)
        ? this.setState({ emailValid: true })
        : this.setState({ emailValid: false });
    }
    if (this.state.emailValid) this.setState({ email });
  };

  handleSubmit = async () => {
    const { email, password } = this.state;
    await api
      .post("auth/authenticate", {
        email,
        password
      })
      .then(response => {
        console.warn(response); // redirecionar para a página
      })
      .catch(err => {
        const e = err.response;
        if (e.status === 400 && e.data.error === "User not found")
          this.setState({ emailValid: false });
        console.warn(err.response); // mostrar qual campo está errado
      });
  };

  toggleSwitch = value => {
    this.setState({ professor: value });
  };

  render() {
    return (
      <ImageBackground
        source={require("../../assets/signInBackground.jpg")}
        style={styles.imageBackground}
      >
        <View style={styles.form}>
          <Image
            style={styles.logo}
            source={require("../../assets/logo_b.png")}
          />
          <Text style={styles.signInTitle}>Login</Text>

          <View style={styles.switchContainer}>
            <Text style={styles.textProfessor}>Estudante</Text>
            <Switch
              style={styles.switchProfessor}
              trackColor={{
                false: "rgba(255, 255, 255, 0.2)",
                true: "rgba(0, 44, 0, 0.6)"
              }}
              onValueChange={this.toggleSwitch}
              value={this.state.professor}
            />
            <Text style={styles.textProfessor}>Professor</Text>
          </View>

          {this.state.professor && (
            <TextInput
              name="nome"
              placeholder="Nome"
              style={[
                styles.inputText,
                !this.state.emailValid ? styles.error : null
              ]}
              placeholderTextColor="#999"
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              onChangeText={() => {}}
            />
          )}
          <TextInput
            name="email"
            placeholder="E-mail"
            style={[
              styles.inputText,
              !this.state.emailValid ? styles.error : null
            ]}
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            onChangeText={text => this.inputValidate(text, "email")}
          />
          <TextInput
            name="password"
            placeholder="Senha"
            style={styles.inputText}
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
          <TouchableOpacity
            style={styles.singnInButton}
            onPress={this.handleSubmit}
          >
            <Text style={styles.singnInButtonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
