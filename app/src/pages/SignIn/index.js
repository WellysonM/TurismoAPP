import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
  Switch,
  KeyboardAvoidingView
} from "react-native";

import api from "../../services/api";
import styles from "./styles";

export default class SignIn extends Component {
  state = {
    name: "",
    email: "",
    emailValid: true,
    password: "",
    cadastrar: false
  };

  /*inputValidate = (email, inputType) => {
    const validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (inputType === "email") {
      validation.test(email)
        ? this.setState({ emailValid: true })
        : this.setState({ emailValid: false });
    }
    if (this.state.emailValid) this.setState({ email });
  };*/

  handleSubmit = async () => {
    const { name, password } = this.state;
    await api
      .post("auth/authenticate", {
        name,
        password
      })
      .then(response => {
        Alert.alert(
          'Sucesso!',
          `Bem Vindo! Sr(a). ${name}`,
          [
            { text: 'OK' }
          ]
        );
        this.props.navigation.navigate("Home");
        //console.warn(response); // redirecionar para a página
      })
      .catch(err => {
        const e = err.response;
        if (e.status === 400 && e.data.error === "User not found")
          this.setState({ emailValid: false });
        console.warn(err.response); // mostrar qual campo está errado
      });
  };

  handleRegister = async () => {
    const { name, password } = this.state;
    await api
      .post("auth/register", {
        name,
        password
      })
      .then(response => {
        Alert.alert(
          'Sucesso!',
          `Cadastro bem sucessido! Sr(a). ${name}`,
          [
            { text: 'OK' }
          ]
        );
        //console.warn(response + name + email); // redirecionar para a página
      })
      .catch(err => {
        const e = err.response;
        if (e.status === 400 && e.data.error === "User not found")
          this.setState({ emailValid: false });
        console.warn(err.response); // mostrar qual campo está errado
      });
  };

  toggleSwitch = value => {
    this.setState({ cadastrar: value });
  };

  render() {
    return (
      <ImageBackground
        source={require("../../assets/imagem.png")}
        style={styles.imageBackground}
      >
        <KeyboardAvoidingView behavior="padding" style={styles.form}>
          <Image
            style={styles.logo}
            source={require("../../assets/tourism.png")}
          />
          {this.state.cadastrar === false && (
            <Text style={styles.signInTitle}>Login</Text>
          )
          }
          {this.state.cadastrar && (
            <Text style={styles.signInTitle}>Register</Text>
          )
          }
          {<View style={styles.switchContainer}>
            <Text style={styles.textCadastrar}>Entrar</Text>
            <Switch
              style={styles.switchcadastrar}
              trackColor={{
                false: "rgba(255, 255, 255, 0.2)",
                true: "rgba(0, 44, 0, 0.6)"
              }}
              onValueChange={this.toggleSwitch}
              value={this.state.cadastrar}
            />
            <Text style={styles.textCadastrar}>Cadastrar</Text>
          </View>}
          <TextInput
            name="name"
            placeholder="Nome"
            style={[styles.inputText]}
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            value={this.state.name}
            onChangeText={text => this.setState({ name: text })}
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

          {this.state.cadastrar === false && (
            <TouchableOpacity
              style={styles.singnInButton}
              onPress={this.handleSubmit}
            >
              <Text style={styles.singnInButtonText}>Entrar</Text>
            </TouchableOpacity>
          )
          }
          {this.state.cadastrar && (
            <TouchableOpacity
              style={styles.singnInButton}
              onPress={this.handleRegister}
            >
              <Text style={styles.singnInButtonText}>Cadastrar</Text>
            </TouchableOpacity>
          )
          }
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}
