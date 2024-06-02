import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  littleContainer: {
    flex: 1,
    justifyContent: "center",
    width: 420,
    backgroundColor: "#F1E7E8",
    borderRadius: 30,
    alignContent: "center",
  },
  image: {
    width: 450,
    height: 390,
    resizeMode: "contain",
    alignSelf: "center",
  },
  title1: {
    fontFamily: "FiraSansMedium",
    fontSize: 36,
    color: "#B272A4",
    alignSelf: "center",
    marginBottom: 10,
  },
  title2: {
    fontFamily: "FiraSansMedium",
    fontSize: 36,
    color: "#B272A4",
    alignSelf: "center",
    marginBottom: 3,
  },
  description: {
    fontFamily: "FiraSansRegular",
    fontSize: 18,
    color: "#7C7C7C",
    textAlign: "center",
    margin: 30,
  },
  button: {
    backgroundColor: "#B272A4",
    paddingVertical: 20,
    borderRadius: 15,
    margin: 15,
    width: 220,
    alignSelf: "center",
  },
  buttonText: {
    fontFamily: "FiraSansRegular",
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default styles;
