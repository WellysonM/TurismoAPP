import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageBackground: {
    height: "100%",
    resizeMode: "cover"
  },
  form: {
    flex: 1,
    alignItems: "center",
    padding: 40,
    paddingTop: 70,
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  logo: {
    marginTop: "10%",
    marginBottom: 20,
    height: 150,
    width: 150
  },
  signInTitle: {
    marginBottom: 80,
    fontSize: 24,
    color: "#FFF"
  },
  inputText: {
    height: 45,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "#FFF",
    // borderRadius: 50,
    borderBottomWidth: 2,
    borderBottomColor: "#FFF",
    marginBottom: 30,
    paddingLeft: 15
  },
  singnInButton: {
    width: "100%",
    height: 45,
    borderRadius: 50,
    backgroundColor: "#5C87A7",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 1
  },
  singnInButtonText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
    color: "#f1f1f1"
  },
  error: {
    borderBottomWidth: 2,
    borderBottomColor: "#db4655"
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30
  },
  switchProfessor: {
    // backgroundColor: "rgba(0,0,0,0.8)"
  },
  textProfessor: {
    marginLeft: 15,
    marginRight: 15,
    color: "#fff",
    fontSize: 16
  }
});

export default styles;
