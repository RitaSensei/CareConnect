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
    fontFamily: "FiraSansMedium",
    fontSize: 22,
    color: "#FA89B8",
    position: "absolute",
    top: 25,
  },
  subtitle: {
    fontFamily: "FiraSansRegular",
    fontSize: 16,
    color: "#FA89B8",
    position: "absolute",
    top: 60,
  },
  input: {
    width: 290,
    marginBottom: 30,
  },
  signinButton: {
    borderRadius: 10,
    position: "absolute",
    bottom: -10,
    width: "30%",
  },
  signinButtonText: {
    fontFamily: "FiraSansSemiBold",
    fontSize: 18,
  },
  forgotPasswordButton: {
    left: 93,
    marginTop: 215,
    alignContent: "left",
  },
  forgotPasswordText: {
    fontFamily: "FiraSansSemiBold",
    fontSize: 14,
    color: "#8a8686",
  },
  signUpButton: {
    marginBottom: 320,
    bottom: -110,
  },
  otherOptionsText: {
    fontFamily: "FiraSansMedium",
    fontSize: 16,
    color: "#ffffff",
  },
  visitorButton: {
    bottom: 170,
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
