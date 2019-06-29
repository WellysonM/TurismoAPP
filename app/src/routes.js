import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // FontAwesome
import Home from "./pages/home";
import Hyperlink from "./pages/home/hyperlink";
import CadastroLinks from "./pages/CadastroLinks";
import SignIn from "./pages/SignIn";

const defaultStyle = title => {
  return {
    header: null
  };
};

const SignInStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => defaultStyle("Tourism"),
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: () => defaultStyle("Login")
    },
    CadastroLinks: {
      screen: CadastroLinks,
      navigationOptions: () => defaultStyle("Cadastro de Turismo")
    }
  },
  {
    initialRouteName: 'SignIn',
  }
);

export default createAppContainer(SignInStack);