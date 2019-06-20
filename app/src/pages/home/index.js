import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";

import api from "../services/api";
import styles from "../SignIn/styles";

export default class Home extends Component {
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
			const response = await api.get(`/tourism?page=${page}`);

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

		if(page === productInfo.pages) return;

		const pageNumber = page + 1;

		this.loadLinks(pageNumber);
	};

  button(item) {
    Alert.alert(
      'Exclusão',
      `Deseja Excluir o Item ${item.touristSpot}?`,
      [
        { text: 'Não', onPress: async () => alert('Operação Cancelada!'), style: 'cancel' },
				{ text: 'Sim', onPress: async () => api.delete(`tourism/${item._id}`) }
			]
		);
		//this.setState({ docs: [] });
		//this.loadLinks();
		//this.props.navigation.navigate("Home");
  }

	renderItem = ({ item }) => {
		return (
			<View style={styles.productContainer}>
				<Text style={styles.productDescription}>{item.city} - {item.state}</Text>
				<Text style={styles.productDescription}>Ponto Turístico: {item.touristSpot}</Text>
				<Text style={styles.productDescription}>{item.TravelDate}, {item.distanceKM} KM</Text>
				<Text style={styles.productDescription}>R$ {item.spent}</Text>
				<Text style={styles.productDescription}>{item.createdAt}</Text>

				<TouchableOpacity onPress={() => this.button(item)}>
          <Text style={styles.productButtonDell}>X</Text>
        </TouchableOpacity>

				{/* <TouchableOpacity style={styles.productButtonDell} onPress={() => {
						this.props.navigation.navigate("Hyperlink", { hyperlink: item });
				}}>
					<Icon name={"edit"} size={18} color={"red"} />
				</TouchableOpacity> */}

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
						{/* <Text style={styles.productDescription}>Em Construção... </Text> */}
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