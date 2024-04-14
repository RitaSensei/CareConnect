import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 95,
    position: "absolute",
    bottom: 800,
  },
  logo: {
    resizeMode: "contain",
    width: "48%",
    aspectRatio: 1,
    top: 20,
    right: 10,
  },
  signinButton: {
    borderRadius: 10,
    position: "absolute",
    // bottom: 400,
    width: "30%",
  },
  signinButtonText: {
    fontFamily: "FiraSansSemiBold",
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    padding: 8,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginTop: 8,
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  nannyNationality: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },
  nannyLocation: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },
  nannyExperience: {
    fontSize: 16,
    color: "#666",
    marginBottom: 12,
  },
  viewProfileButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  viewProfileText: {
    color: "#fff",
    fontSize: 1,
  },
});

export default styles;
