import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
    flex: 1,
		backgroundColor: "#fafafa",
	},
	list: {
		padding: 20
	},
	productContainer: {
    backgroundColor: "#BCF5FC",
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 15,
		marginBottom: 20,
		
		shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.8,
		shadowRadius: 5,
		elevation: 5,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  productDescription: {
    fontSize: 14,
    color: '#999',
    marginTop: 3,
    lineHeight: 24
	},
  productCadastrar: {
    fontSize: 16,
    color: '#0F26F3',
    marginTop: 15,
    lineHeight: 24
	},
	productButton: {
		height: 42,
    borderRadius: 5,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 1
	},
	productButtonText: {
		fontSize: 16,
		color: "#333",
		fontWeight: "bold"
	},
	productButtonDell: {
		fontSize: 16,
    fontWeight: "bold",
    color: "#FF0000",
		marginBottom: 3,
		textAlign: "right"
	}
});

export default styles;