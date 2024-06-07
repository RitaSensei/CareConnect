import React, { useState } from "react";
import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import { TextInput, Button, Snackbar } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "react-native-ui-lib";
import { Entypo } from "@expo/vector-icons";
import styles from "../styles";
import { allLocations } from "../../../utils/allOptions";
import { FIREBASE_GET_AUTH, FIRESTORE_DB } from "../../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const NewAccountParentScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    profilePhoto: null,
    email: "",
    password: "",
    confirmPassword: "",
    currentCity: { location: undefined, nativePickerValue: "", pickerOpen: false }
  });
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryBeta, setSecureTextEntryBeta] = useState(true);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarBackgroundColor, setSnackbarBackgroundColor] = useState("red");

  const auth = FIREBASE_GET_AUTH;
  const db = FIRESTORE_DB;

  const [errors, setErrors] = useState({
    mobileNumberError: false,
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
    emptyField: false,
    profilePhotoError: false,
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    setErrors({ ...errors, emptyField: false });
  };

  const validateMobileNumber = number => /^[0-9]{10}$/.test(number);
  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = password => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

  const handleValidation = () => {
    const {
      firstName,
      lastName,
      mobileNumber,
      profilePhoto,
      email,
      password,
      confirmPassword,
      currentCity
    } = form;

    const mobileNumberError = !validateMobileNumber(mobileNumber);
    const emailError = !validateEmail(email);
    const passwordError = !validatePassword(password);
    const confirmPasswordError = password !== confirmPassword;
    const profilePhotoError = !profilePhoto;
    const emptyField = !firstName || !lastName || !mobileNumber || !email || !password || !confirmPassword || !currentCity.nativePickerValue;

    setErrors({
      mobileNumberError,
      emailError,
      passwordError,
      confirmPasswordError,
      profilePhotoError,
      emptyField,
    });

    return !mobileNumberError && !emailError && !passwordError && !confirmPasswordError && !profilePhotoError && !emptyField;
  };

  const handleRegister = async () => {
    if (handleValidation()) {
      try  {
        const { email, password, firstName, lastName, mobileNumber, profilePhoto, currentCity } = form;

        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth,email, password);
        const userId = userCredential.user.uid;

        // Store additional user info in Firestore
      try {
        const userDoc = {
          userId,
          firstName,
          lastName,
          mobileNumber,
          email,
          profilePhoto,
          currentCity: currentCity.nativePickerValue,
          role: "parent",
        };

        await setDoc(doc(db, "parents", userId), userDoc);

        setSnackbarMessage("Registration successful");
        setSnackbarBackgroundColor("green");
        setSnackbarVisible(true);
        setForm({
          firstName: "",
          lastName: "",
          mobileNumber: "",
          profilePhoto: null,
          email: "",
          password: "",
          confirmPassword: "",
          currentCity: { location: undefined, nativePickerValue: "", pickerOpen: false }
        });
        navigation.navigate("AuthScreen", { screen: "Signin Page" });
      } catch (firestoreError) {
        console.error("Error writing document: ", firestoreError);
        setSnackbarMessage("Registration failed! Please try again.");
        setSnackbarBackgroundColor("red");
        setSnackbarVisible(true);
      }
      } catch (authError) {
        console.error("Error creating user: ", authError);
        setSnackbarMessage("Registration failed ! Please try again");
        setSnackbarBackgroundColor("red");
        setSnackbarVisible(true);
      }
    }
  };

  const handleProfilePhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      handleChange("profilePhoto", result.assets[0].uri);
    }
  };

  const { firstName, lastName, mobileNumber, profilePhoto, email, password, confirmPassword, currentCity } = form;
  const { mobileNumberError, emailError, passwordError, confirmPasswordError, emptyField, profilePhotoError } = errors;

  return (
    <SafeAreaView style={{ flexGrow: 1, backgroundColor: "#fff" }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        directionalLockEnabled
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        overScrollMode="never"
        automaticallyAdjustKeyboardInsets
      >
        <View style={styles.container}>
          <Text style={styles.title}>Parent</Text>
          <TextInput
            label="First Name"
            placeholder="Enter your first name"
            inputMode="text"
            mode="outlined"
            outlineColor="#BDBDBD"
            activeOutlineColor="#FA89B8"
            placeholderTextColor="#BDBDBD"
            value={firstName}
            error={emptyField && !firstName}
            onChangeText={text => handleChange("firstName", text)}
            style={styles.input}
          />
          {emptyField && !firstName && <Text style={styles.errorText}>Please enter your first name</Text>}

          <TextInput
            label="Last Name"
            placeholder="Enter your last name"
            outlineColor="#BDBDBD"
            activeOutlineColor="#FA89B8"
            placeholderTextColor="#BDBDBD"
            inputMode="text"
            mode="outlined"
            value={lastName}
            error={emptyField && !lastName}
            onChangeText={text => handleChange("lastName", text)}
            style={styles.input}
          />
          {emptyField && !lastName && <Text style={styles.errorText}>Please enter your last name</Text>}

          <TextInput
            label="Phone Number"
            placeholder="Enter your phone number"
            outlineColor="#BDBDBD"
            activeOutlineColor="#FA89B8"
            placeholderTextColor="#BDBDBD"
            inputMode="tel"
            mode="outlined"
            value={mobileNumber}
            error={mobileNumberError || (emptyField && mobileNumber.trim() === "")}
            onChangeText={text => handleChange("mobileNumber", text)}
            style={styles.input}
          />
          {(mobileNumberError && (
            <Text style={styles.errorText}>Please enter a valid mobile number</Text>
          )) ||
            (emptyField && mobileNumber.trim() === "" && (
              <Text style={styles.errorText}>Please enter your mobile number</Text>
            ))}
          <Picker
            placeholder="Current city"
            style={[
              styles.picker,
              emptyField && !currentCity.nativePickerValue && styles.errorPicker,
            ]}
            useWheelPicker
            enableModalBlur={false}
            value={currentCity.nativePickerValue}
            onChange={nativePickerValue => handleChange("currentCity", { ...currentCity, nativePickerValue, pickerOpen: false })}
            trailingAccessory={
              <Entypo
                name={currentCity.pickerOpen ? "chevron-up" : "chevron-down"}
                size={30}
                color="black"
                style={{ position: "absolute", marginStart: 290, top: 10 }}
              />
            }
            onPress={() => handleChange("currentCity", { ...currentCity, pickerOpen: true })}
            topBarProps={{ doneLabel: "Done", cancelLabel: "Cancel" }}
            fieldType="filter"
            items={allLocations.map(option => ({
              value: option.value,
              label: option.label,
              disabled: option.disabled,
              textStyle: {
                color: option.value === currentCity.nativePickerValue ? "#ff0000" : "#000000",
              },
            }))}
          />
          {emptyField && !currentCity.nativePickerValue && <Text style={styles.errorText}>Please select your current city</Text>}
          <Button
            mode="contained-tonal"
            style={styles.imageUploadButton}
            buttonColor="#fff0f3"
            textColor="#575555"
            onPress={handleProfilePhoto}
            contentStyle={{ flexDirection: "row-reverse", justifyContent: "space-between" }}
            icon={() => <Entypo name="upload" size={22} color="#000" />}
          >
            <Text style={styles.imageUploadButtonText}>
              {profilePhoto ? "Change your profile photo" : "Upload your profile photo"}
            </Text>
          </Button>
          {profilePhoto ? (
            <Image source={{ uri: profilePhoto }} style={{ width: 200, height: 200, bottom: 10 }} />
          ) : (
            emptyField && profilePhotoError && <Text style={styles.errorText}>Please upload your profile picture.</Text>
          )}

          <TextInput
            label="Email"
            placeholder="Enter your email address"
            outlineColor="#BDBDBD"
            activeOutlineColor="#FA89B8"
            placeholderTextColor="#BDBDBD"
            inputMode="email"
            mode="outlined"
            value={email}
            style={styles.input}
            error={emailError || (emptyField && !email)}
            onChangeText={text => handleChange("email", text)}
          />
          {emailError && <Text style={styles.errorText}>Please enter a valid email address</Text>}
          {emptyField && !email && <Text style={styles.errorText}>Please enter your email address</Text>}

          <TextInput
            secureTextEntry={secureTextEntry}
            label="Password"
            placeholder="Enter your password"
            outlineColor="#BDBDBD"
            activeOutlineColor="#FA89B8"
            placeholderTextColor="#BDBDBD"
            mode="outlined"
            left={<TextInput.Icon icon="lock" color="#8a8686" />}
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
            error={passwordError || (emptyField && !password)}
            onChangeText={text => handleChange("password", text)}
          />
          <Text style={styles.infoText}>
            Password must be at least 8 characters long and have one of each ([A-Za-z], [0-9], [@$!%*#?&])
          </Text>
          {passwordError && <Text style={styles.errorText}>Please enter a valid password</Text>}
          {emptyField && !password && <Text style={styles.errorText}>Please enter your password</Text>}

          <TextInput
            secureTextEntry={secureTextEntryBeta}
            label="Confirm Password"
            placeholder="Enter your password to confirm"
            outlineColor="#BDBDBD"
            activeOutlineColor="#FA89B8"
            placeholderTextColor="#BDBDBD"
            mode="outlined"
            left={<TextInput.Icon icon="lock" color="#8a8686" />}
            right={
              <TextInput.Icon
                icon={secureTextEntryBeta ? "eye-off" : "eye"}
                color="#BDBDBD"
                onPress={() => {
                  setSecureTextEntryBeta(!secureTextEntryBeta);
                  return false;
                }}
              />
            }
            style={styles.input}
            value={confirmPassword}
            error={confirmPasswordError || (emptyField && !confirmPassword)}
            onChangeText={text => handleChange("confirmPassword", text)}
          />
          {confirmPasswordError && <Text style={styles.errorText}>Passwords do not match</Text>}
          {emptyField && !confirmPassword && <Text style={styles.errorText}>Please confirm your password</Text>}

          <Button
            mode="contained-tonal"
            style={styles.nextButton}
            buttonColor="#FA89B8"
            textColor="#fff"
            onPress={handleRegister}
          >
            <Text style={styles.nextButtonText}>Register</Text>
          </Button>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewAccountParentScreen;
