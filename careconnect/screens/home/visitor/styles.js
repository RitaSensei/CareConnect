import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#fff",
  },
  subContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#B272A4",
    width: "100%",
    height: 110,
    position: "absolute",
  },
  searchBarContainer: {
    flex: 1,
    width: 360,
    height: 55,
    backgroundColor: "#F1E7E8",
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#FA89B8",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    top: 85,
    placeholder: {
      color: "lightgray",
      fontSize: 14,
    },
  },
  title: {
    fontFamily: "FiraSansBold",
    fontSize: 24,
    color: "#fff",
  },
  subtitle: {
    fontFamily: "FiraSansSemiBold",
    fontSize: 16,
    color: "#fff",
    marginBottom: 20,
  },
  content: {
    justifyContent: "center",
    flexDirection: "column",
    position: "absolute",
    top: 155,
    paddingHorizontal: 18,
  },
  descriptionTitle: {
    fontFamily: "FiraSansMedium",
    fontSize: 22,
    color: "#B272A4",
  },
  description: {
    fontFamily: "FiraSansRegular",
    fontSize: 14,
    color: "#000",
  },
  catalogHeader: {
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    bottom: 380,
  },
  nannies: {
    flex: 1,
    paddingHorizontal: 16,
  },
  nanny: {
    marginBottom: 24,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  nannyName: {
    fontFamily: "FiraSansMedium",
    fontSize: 16,
    color: "#000",
    alignSelf: "center",
  },
  nannyInformations: {
    fontFamily: "FiraSansRegular",
    fontSize: 14,
    color: "#9D9696",
  },
  viewProfileButton: {
    borderRadius: 20,
    width: "40%",
    height: 35,
    position: "absolute",
    alignSelf: "center",
  },
  viewProfileText: {
    fontFamily: "FiraSansSemiBold",
    fontSize: 14,
    alignSelf: "center",
  },
});

export default styles;
