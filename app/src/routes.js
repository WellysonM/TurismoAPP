import React from "react";
import {
  createAppContainer,
  createStackNavigator,
} from "react-navigation";

import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // FontAwesome
import Home from "./pages/home";
import Hyperlink from "./pages/home/hyperlink";
import CadastroLinks from "./pages/CadastroLinks";
import SignIn from "./pages/SignIn";

const defaultStyle = title => {
  return {
    title,
    headerStyle: {
      backgroundColor: "#5698FB"
    },
    headerTintColor: "#FFF"
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
/*
const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => defaultStyle("Turismo")
  },
  Hyperlink: { screen: Hyperlink }
});

const CadastroLinksStack = createStackNavigator({
  CadastroLinks: {
    screen: CadastroLinks,
    navigationOptions: () => defaultStyle("Cadastro de Turismo")
  }
});

class B extends React.Component {
  render() {
    return ()=>{
      TabStackNavigator = createBottomTabNavigator(
        {
          Home: { screen: HomeStack },
          CadastroLinks: {
            screen: CadastroLinksStack,
            navigationOptions: () => ({
              title: "Adicionar Turismo"
            })
          }
        },
        {
          defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              let iconName;
              if (routeName === "Home") {
                iconName = `home${focused ? "" : "-outline"}`;
                // iconName = `home`;
              } else if (routeName === "CadastroLinks") {
                iconName = `link${focused ? "-off" : ""}`;
                // iconName = `plus`;
              }
              return <Icon name={iconName} size={18} color={tintColor} />;
            }
          }),
          tabBarOptions: {
            activeTintColor: "#5C87A7",
            inactiveTintColor: "gray"
          }
        }
      );
    }
  }
}*/

export default createAppContainer(SignInStack);