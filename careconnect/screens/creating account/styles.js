import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "FiraSansSemiBold",
    fontSize: 30,
    marginVertical: 20,
    textDecorationLine: "underline",
    textDecorationColor: "#FA89B8",
  },
  input: {
    width: 320,
    marginBottom: 25,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  picker: {
    height: 50,
    width: 320,
    marginBottom: 25,
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    textAlign: "left",
    fontFamily: "FiraSansRegular",
    fontSize: 16,
    paddingVertical: 12,
    paddingStart: 15,
  },
  nextButton: {
    borderRadius: 5,
    width: 150,
  },
  nextButtonText: {
    flex: 1,
    fontFamily: "FiraSansSemiBold",
    fontSize: 22,
    textAlign: "center",
    lineHeight: 25,
  },
  imageUploadButton: {
    borderRadius: 5,
    borderColor: "#BDBDBD",
    borderWidth: 1,
    height: 51,
    width: 320,
    marginBottom: 25,
  },
  imageUploadButtonText: {
    flex: 1,
    fontFamily: "FiraSansRegular",
    fontSize: 16,
    lineHeight: 28,
  },
  errorText: {
    fontFamily: "FiraSansRegular",
    fontSize: 12,
    bottom: 18,
    color: "#B22D1D",
    textAlign: "center",
  },
  errorPicker: {
    borderColor: "#B22D1D",
    borderWidth: 2,
  },
  infoText: {
    fontFamily: "FiraSansRegular",
    fontSize: 12,
    color: "#BDBDBD",
    textAlign: "center",
    width: 320,
    bottom: 18,
  },
  uploadButton: {
    borderRadius: 5,
    width: 110,
    bottom: 15,
    right: 105,
  },
  uploadButtonText: {
    fontFamily: "FiraSansSemiBold",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 18,
  },
});

export default styles;
