import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  logo: {
    resizeMode: "contain",
    bottom: 330,
  },
  image: {
    width: "100%",
    height: "400%",
    resizeMode: "contain",
    position: "absolute",
    bottom: 210,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  registerBox: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  box: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 230,
  },
  subtitle: {
    fontFamily: "FiraSansMedium",
    fontSize: 16,
    color: "#7C7C7C",
    alignSelf: "center",
    bottom: 315,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    borderRadius: 15,
    paddingTop: 22,
    width: 320,
    height: 65,
    bottom: 185,
    // marginBottom: 170,
  },
  buttonText: {
    fontFamily: "FiraSansSemiBold",
    fontSize: 15,
    alignSelf: "center",
  },
});

export default styles;
