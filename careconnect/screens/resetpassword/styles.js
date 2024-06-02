import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B272A4",
  },
  subContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: -60,
  },
  formContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F3F4F8",
    borderRadius: 20,
    width: 340,
    marginBottom: 440,
  },
  image: {
    width: 380,
    resizeMode: "contain",
    bottom: -80,
    marginBottom: 10,
  },
  title: {
    fontFamily: "FiraSansMedium",
    fontSize: 22,
    color: "#FA89B8",
    position: "absolute",
    top: 25,
  },
  input: {
    width: 290,
  },
  resetPasswordButton: {
    borderRadius: 10,
    position: "absolute",
    top: 200,
    width: "50%",
  },
  resetPasswordText: {
    fontFamily: "FiraSansSemiBold",
    fontSize: 18,
  },
  errorText: {
    fontFamily: "FiraSansRegular",
    fontSize: 12,
    color: "red",
    marginTop: 5,
    textAlign: "center",
  },
});

export default styles;
