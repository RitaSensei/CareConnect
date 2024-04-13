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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F4F8",
    borderRadius: 20,
    width: 340,
  },
  image: {
    width: 380,
    resizeMode: "contain",
    bottom: -80,
    marginBottom: 10,
  },
  title: {
    fontFamily: "FiraSansRegular",
    fontSize: 20,
    color: "#FA89B8",
    marginTop: 300,
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: "FiraSansRegular",
    fontSize: 14,
    color: "#FA89B8",
    marginBottom: 40,
  },
  input: {
    width: 290,
    marginBottom: 40,
  },
  signinButton: {
    borderRadius: 10,
    position: "absolute",
    bottom: -20,
    width: "30%",
  },
  signinButtonText: {
    fontFamily: "FiraSansSemiBold",
    fontSize: 16,
  },
  forgotPasswordButton: {
    marginTop: -25,
    marginBottom: 300,
    left: 93,
    alignContent: "left",
  },
  forgotPasswordText: {
    fontFamily: "FiraSansSemiBold",
    fontSize: 13,
    color: "#8a8686",
  },
  signUpButton: {
    marginBottom: 300,
    bottom: -100,
  },
  signUpText: {
    fontFamily: "FiraSansMedium",
    fontSize: 16,
    color: "#ffffff",
  },
  errorText: {
    fontFamily: "FiraSansRegular",
    fontSize: 12,
    color: "red",
    marginTop: -30,
    marginBottom: 20,
  },
});

export default styles;
