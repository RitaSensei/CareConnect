import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { FIREBASE_AUTH } from "../../firebase/firebaseConfig";
import styles from "./styles";
import { signInWithEmailAndPassword } from "firebase/auth";

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false); // Add this line to handle errors for email field.
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const auth =FIREBASE_AUTH;

  const handleEmailChange = text => {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Validate email and set error state
    setEmailError(!emailRegex.test(text));
  };

  const handleLogin = async () => {
    // Input validation (optional but recommended)
    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in both email and password fields.");
      return;
    }
  
    try {
      // Sign in with Firebase Auth
      await signInWithEmailAndPassword(auth,email, password);
  
      // Handle successful login
      console.log("User logged in successfully!");
      navigation.navigate("User", { screen: "User Home Page" });
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please check your email and password.");
    }
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/icons/logo-version-mauve.png")} style={styles.image} />
      <View style={styles.subContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Welcome back !</Text>
          <Text style={styles.subtitle}>Login to your account</Text>
          <View style={{ position: "absolute", top: 110 }}>
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
            <TextInput
              secureTextEntry={secureTextEntry}
              label="Password"
              placeholder="Enter your password"
              mode="outlined"
              left={<TextInput.Icon icon="lock" color="#BDBDBD" />}
              outlineColor="#BDBDBD"
              right={
                <TextInput.Icon
                  icon={secureTextEntry ? "eye-off" : "eye"}
                  color="#BDBDBD"
                  onPress={() => {
                    setSecureTextEntry(!secureTextEntry);
                    return false;
                  }}
                />
              }
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity style={[styles.forgotPasswordButton, { marginTop: 250, marginBottom: 1 }]}onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <Button
          mode="contained-tonal"
          style={styles.signinButton}
          onPress={handleLogin}
          buttonColor="#FCD9E0"
          textColor="#FA89B8"
        >
          <Text style={styles.signinButtonText}>Login</Text>
        </Button>
      </View>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => navigation.navigate("AuthScreen", { screen: "Signup Page" })}
      >
        <Text style={styles.otherOptionsText}>Don't have a account? Sign up</Text>
      </TouchableOpacity>
      <Text
        style={[
          styles.otherOptionsText,
          { bottom: 190, color: "#fff", textDecorationLine: "underline" },
        ]}
      >
        Or
      </Text>
      <TouchableOpacity
        style={styles.visitorButton}
        onPress={() => navigation.navigate("Visitor", { screen: "Visitor Home Page" })}
      >
        <Text style={styles.otherOptionsText}>
          Don't want to create an account? Go as a visitor
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SigninScreen;
