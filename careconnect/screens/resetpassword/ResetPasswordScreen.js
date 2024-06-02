import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { TextInput, Button, Snackbar } from "react-native-paper";

import styles from "./styles";

const ResetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarBackgroundColor, setSnackbarBackgroundColor] = useState("red");

  const handleEmailChange = text => {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Validate email and set error state
    setEmailError(!emailRegex.test(text));
  };

  const handleResetPassword = () => {
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/icons/logo-version-mauve.png")} style={styles.image} />
      <View style={styles.subContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Reset Your Password</Text>
          <View style={{ position: "absolute", top: 100 }}>
            <TextInput
              label="Email"
              placeholder="Enter your email address"
              mode="outlined"
              left={<TextInput.Icon icon="email" color="#BDBDBD" />}
              style={styles.input}
              outlineColor="#BDBDBD"
              value={email}
              error={emailError}
              onChangeText={handleEmailChange}
            />
            {emailError && <Text style={styles.errorText}>Please enter a valid email address</Text>}
          </View>
        </View>
        <Button
          mode="contained-tonal"
          style={styles.resetPasswordButton}
          onPress={handleResetPassword}
          buttonColor="#FCD9E0"
          textColor="#FA89B8"
        >
          <Text style={styles.resetPasswordText}>Reset Password</Text>
        </Button>
      </View>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
        action={{
          label: 'OK',
          onPress: () => {
            setSnackbarVisible(false);
          },
        }}
        style={{ backgroundColor: snackbarBackgroundColor }}
      >
        {snackbarMessage}
      </Snackbar>
    </View>
  );
};

export default ResetPasswordScreen;
