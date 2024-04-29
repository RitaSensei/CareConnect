import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: 380,
    height: 140,
    padding: 10,
    marginTop: 8,
    marginHorizontal: 10,
  },
  cardCover: {
    position: "absolute",
    verticalAlign: "center",
    marginStart: 10,
  },
  cardContent: {
    textAlign: "left",
    verticalAlign: "center",
    marginLeft: 135,
    top: -5,
    width: 260,
  },
  nannyName: {
    fontFamily: "FiraSansMedium",
    fontSize: 19,
    color: "#000",
  },
  nannyInformations: {
    fontFamily: "FiraSansRegular",
    fontSize: 13,
    color: "#9D9696",
  },
  separatorContainer: {
    position: "relative",
    alignItems: "flex-start",
  },
  separator: {
    position: "absolute",
    top: 14,
    right: -100,
    borderBottomWidth: 1.5,
    borderBottomColor: "lightgray",
    width: 400,
  },
});

export default styles;
