import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "react-native-ui-lib";
import { Entypo } from "@expo/vector-icons";

import styles from "../styles";
import { allLocations } from "../../../utils/allOptions";

const NewAccountParentScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [profilePhotoError, setProfilePhotoError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmedPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmedPasswordError] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryBeta, setSecureTextEntryBeta] = useState(true);
  const [emptyField, setEmptyField] = useState(false);
  const [currentCity, setCurrentCity] = useState({
    location: undefined,
    nativePickerValue: "",
    pickerOpen: false,
  });

  const handleMobileNumberChange = number => {
    const mobileNumberRegex = /^[0-9]{10}$/;
    if (number === "") {
      setEmptyField(true);
      setMobileNumberError(false);
    } else {
      setEmptyField(false);
      setMobileNumberError(!mobileNumberRegex.test(number));
    }
    setMobileNumber(number);
  };

  const handleEmailChange = text => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (text === "") {
      setEmptyField(true);
      setEmailError(false);
    } else {
      setEmptyField(false);
      setEmailError(!emailRegex.test(text));
    }
    setEmail(text);
  };

  const handlePasswordChange = text => {
    setPassword(text);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (text === "") {
      setEmptyField(true);
      setPasswordError(false);
    } else {
      setEmptyField(false);
      setPasswordError(!passwordRegex.test(text));
    }
  };

  const handleConfirmPasswordChange = text => {
    setConfirmedPassword(text);
    if (text !== password) {
      if (text === "") {
        setEmptyField(true);
      } else {
        setEmptyField(false);
      }
      setConfirmedPasswordError("Passwords do not match");
    } else {
      setConfirmedPasswordError(false);
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
      setEmptyField(false);
      setProfilePhoto(result.assets[0].uri);
    }
  };

  const handleRegister = () => {
    // todo: add the registration logic
    if (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      mobileNumber.trim() !== "" &&
      currentCity.nativePickerValue &&
      profilePhoto &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      confirmPassword.trim() !== "" &&
      !emailError &&
      !passwordError &&
      !confirmPasswordError
    ) {
      navigation.navigate("User", { screen: "User Home Page" });
    } else {
      const profilePhotoError = !profilePhoto; // Check if profile photo is empty
      setEmptyField(true);
      setProfilePhotoError(profilePhotoError);
    }
  };

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
            error={emptyField && firstName.trim() === ""}
            onChangeText={text => {
              if (text.trim() === "") {
                setEmptyField(true);
              } else {
                setEmptyField(false);
              }
              setFirstName(text);
            }}
            style={styles.input}
          />
          {emptyField && firstName.trim() === "" && (
            <Text style={styles.errorText}>Please enter your first name</Text>
          )}
          <TextInput
            label="Last Name"
            placeholder="Enter your last name"
            outlineColor="#BDBDBD"
            activeOutlineColor="#FA89B8"
            placeholderTextColor="#BDBDBD"
            inputMode="text"
            mode="outlined"
            value={lastName}
            error={emptyField && lastName.trim() === ""}
            onChangeText={text => {
              if (text.trim() === "") {
                setEmptyField(true);
              } else {
                setEmptyField(false);
              }
              setLastName(text);
            }}
            style={styles.input}
          />
          {emptyField && lastName.trim() === "" && (
            <Text style={styles.errorText}>Please enter your last name</Text>
          )}
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
            onChangeText={handleMobileNumberChange}
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
              emptyField && !currentCity.nativePickerValue && styles.errorPicker, // Apply error style if the field is empty
            ]}
            useWheelPicker
            enableModalBlur={false}
            value={currentCity.nativePickerValue}
            onChange={nativePickerValue =>
              setCurrentCity(prevState => ({ ...prevState, pickerOpen: false, nativePickerValue }))
            }
            trailingAccessory={
              <Entypo
                name={currentCity.pickerOpen ? "chevron-up" : "chevron-down"}
                size={30}
                color="black"
                style={{ position: "absolute", marginStart: 290, top: 10 }}
              />
            }
            onPress={() => setCurrentCity(prevState => ({ ...prevState, pickerOpen: true }))}
            topBarProps={{
              doneLabel: "Done",
              cancelLabel: "Cancel",
            }}
            fieldType="filter"
          >
            {allLocations.map(option => (
              <Picker.Item
                key={option.value}
                value={option.value}
                label={option.label}
                disabled={option.disabled}
                style={{
                  color: option.value === currentCity.nativePickerValue ? "#ff0000" : "#000000",
                }}
              />
            ))}
          </Picker>
          {emptyField && !currentCity.nativePickerValue && (
            <Text style={styles.errorText}>Please select your current city</Text>
          )}
          <Button
            mode="contained-tonal"
            style={styles.imageUploadButton}
            buttonColor="#fff0f3"
            textColor="#575555"
            onPress={handleProfilePhoto}
            contentStyle={{ flexDirection: "row-reverse", justifyContent: "space-between" }}
            icon={() => <Entypo name="upload" size={22} color="#000" />}
            error={emptyField && profilePhotoError}
          >
            <Text style={styles.imageUploadButtonText}>
              {profilePhoto ? "Change your profile photo" : "Upload your profile photo"}
            </Text>
          </Button>
          {profilePhoto ? (
            <Image source={{ uri: profilePhoto }} style={{ width: 200, height: 200, bottom: 10 }} />
          ) : (
            emptyField &&
            profilePhotoError && (
              <Text style={styles.errorText}>Please upload your profile picture.</Text>
            )
          )}
          <View>
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
              error={emailError || (emptyField && email.trim() === "")}
              onChangeText={handleEmailChange}
            />
            {(emailError && (
              <Text style={styles.errorText}>Please enter a valid email address</Text>
            )) ||
              (emptyField && email.trim() === "" && (
                <Text style={styles.errorText}>Please enter your email address</Text>
              ))}
          </View>
          <View style={styles.container}>
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
                  onPress={() => {
                    setSecureTextEntry(!secureTextEntry);
                    return false;
                  }}
                />
              }
              style={styles.input}
              value={password}
              error={passwordError || (emptyField && password.trim() === "")}
              onChangeText={handlePasswordChange}
            />
            <Text style={styles.infoText}>
              Password must be at least 8 characters long and have one of each ([A-Za-z], [0-9],
              [@$!%*#?&])
            </Text>
          </View>
          {(passwordError && <Text style={styles.errorText}>Please enter a valid password</Text>) ||
            (emptyField && password.trim() === "" && (
              <Text style={styles.errorText}>Please enter your password</Text>
            ))}
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
                onPress={() => {
                  setSecureTextEntryBeta(!secureTextEntryBeta);
                  return false;
                }}
              />
            }
            style={styles.input}
            value={confirmPassword}
            error={confirmPasswordError || (emptyField && confirmPassword.trim() === "")}
            onChangeText={handleConfirmPasswordChange}
          />
          {(confirmPasswordError && <Text style={styles.errorText}>Passwords not matching</Text>) ||
            (emptyField && confirmPassword.trim() === "" && (
              <Text style={styles.errorText}>Please confirm your password</Text>
            ))}
          <Button
            mode="contained-tonal"
            style={styles.nextButton}
            buttonColor="#FA89B8"
            textColor="#fff"
            onPress={handleRegister}
          >
            <Text style={styles.nextButtonText}>Register</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewAccountParentScreen;
