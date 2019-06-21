import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import styles from "./styles"
import { createStackNavigator, createBottomTabNavigator, createAppContainer, } from 'react-navigation';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // FontAwesome
import CadastroLinks from "../CadastroLinks";
import api from "../../services/api";
import Hyperlink from "./hyperlink";

class Home extends Component {
	state = {
		productInfo: {},
		docs: [],
		page: 1
	};
	componentDidMount() {
		this.loadLinks();
	}
	loadLinks = async (page = 1) => {
		try {
			const response = await api.get(`project/tourism?page=${page}`);

			const { docs, ...productInfo } = response.data;

			this.setState({
				docs: [...this.state.docs, ...docs],
				productInfo,
				page
			});
		} catch (error) {
			console.log(error);
		}
	};
	loadMore = () => {
		const { page, productInfo } = this.state;

		if (page === productInfo.pages) return;

		const pageNumber = page + 1;

		this.loadLinks(pageNumber);
	};
	button(item) {
		Alert.alert(
			'Exclusão',
			`Deseja Excluir o Item ${item.touristSpot}?`,
			[
				{ text: 'Não', onPress: async () => alert('Operação Cancelada!'), style: 'cancel' },
				{ text: 'Sim', onPress: async () => api.delete(`project/tourism/${item._id}`) }
			]
		);
	}
	renderItem = ({ item }) => {
		return (
			<View style={styles.productContainer}>
				<TouchableOpacity onPress={() => this.button(item)}>
					<Text style={styles.productButtonDell}>X</Text>
				</TouchableOpacity>
				<Text style={styles.productDescription}>{item.city} - {item.state}</Text>
				<Text style={styles.productDescription}>Ponto Turístico: {item.touristSpot}</Text>
				<Text style={styles.productDescription}>{item.TravelDate}, {item.distanceKM} KM</Text>
				<Text style={styles.productDescription}>R$ {item.spent}</Text>
				<Text style={styles.productDescription}>{item.createdAt}</Text>
				<TouchableOpacity
					style={styles.singnInButton}
					onPress={() => {
						this.props.navigation.navigate("Hyperlink")
					}}>
					<Text style={styles.singnInButtonText}>Acessar</Text>
				</TouchableOpacity>
				{/* <TouchableOpacity style={styles.productButton} onPress={() => {
						this.props.navigation.navigate("Hyperlink", { hyperlink: item });
				}}>
					<Text style={styles.productButtonText}>Acessar</Text>
				</TouchableOpacity> */}
			</View>
		);
	};
	render() {
		return (
			<View style={styles.container}>
				<FlatList
					contentContainerStyle={styles.list}
					data={this.state.docs}
					extraData={this.state}
					keyExtractor={(item) => item._id}
					renderItem={this.renderItem}
					onEndReached={this.loadMore}
					onEndReachedThreshold={0.1}
				/>
			</View>
		);
	}
}
const defaultStyle = title => {
	return {
		title,
		headerStyle: {
			backgroundColor: "#5698FB",
		},
		headerTintColor: "#FFF"
	}
};
const HomeStack = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions: () => defaultStyle("Suas Viagens")
	},
	Hyperlink: { screen: Hyperlink }
});
const CadastroLinksStack = createStackNavigator({
	CadastroLinks: {
		screen: CadastroLinks,
		navigationOptions: () => defaultStyle("Cadastro de Turismo")
	}
});
const TabStackNavigator = createBottomTabNavigator(
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
export default createAppContainer(TabStackNavigator);