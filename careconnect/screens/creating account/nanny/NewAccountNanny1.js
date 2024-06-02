import React, { useState } from "react";
import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "react-native-ui-lib";
import { Entypo, Ionicons } from "@expo/vector-icons";

import styles from "../styles";
import { allLocations, allNationalities } from "../../../utils/allOptions";

const NewAccountNanny1Screen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);
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
  const [validDateField, setValidDateField] = useState(false);
  const [currentCity, setCurrentCity] = useState({
    location: undefined,
    nativePickerValue: "",
    pickerOpen: false,
  });
  const [nationality, setNationality] = useState({
    nationality: undefined,
    nativePickerValue: "",
    pickerOpen: false,
  });

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirmDate = date => {
    if (date > new Date(2003, 11, 31) || date < new Date(1974, 0, 1)) {
      setEmptyField(true);
      setValidDateField(false);
    } else {
      setEmptyField(false);
      setValidDateField(true);
    }
    setDate(date);
    hideDatePicker();
  };

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

  const handleNext = () => {
    if (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      date !== new Date() &&
      mobileNumber.trim() !== "" &&
      currentCity.nativePickerValue &&
      nationality.nativePickerValue &&
      profilePhoto &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      confirmPassword.trim() !== "" &&
      !emailError &&
      !passwordError &&
      !confirmPasswordError
    ) {
      navigation.navigate("NewAccount", { screen: "Nanny New Account Page 2" });
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
          <Text style={styles.title}>Nanny</Text>
          <TextInput
            label="First Name"
            placeholder="Enter your first name"
            contentStyle={{ fontFamily: "FiraSansRegular", fontSize: 16 }}
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
            contentStyle={{ fontFamily: "FiraSansRegular", fontSize: 16 }}
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
          <Button
            mode="contained-tonal"
            style={styles.imageUploadButton}
            buttonColor="#fff"
            textColor="#000"
            title="Date of Birth"
            contentStyle={{ flexDirection: "row-reverse", justifyContent: "space-between" }}
            onPress={showDatePicker}
            icon={() => <Ionicons name="calendar-number" size={24} color="#000" />}
            error={emptyField && !validDateField}
          >
            <Text style={styles.imageUploadButtonText}>{date.toLocaleDateString()}</Text>
          </Button>
          <DateTimePickerModal
            date={date}
            isVisible={datePickerVisible}
            maximumDate={new Date(2003, 11, 31)}
            minimumDate={new Date(1974, 0, 1)}
            mode="date"
            onConfirm={handleConfirmDate}
            onCancel={hideDatePicker}
            textColor="#000"
          />
          {emptyField && !validDateField && (
            <Text style={styles.errorText}>Please select a valid date of birth</Text>
          )}
          <Picker
            placeholder="Nationality"
            style={[
              styles.picker,
              emptyField && !nationality.nativePickerValue && styles.errorPicker, // Apply error style if the field is empty
            ]}
            useWheelPicker
            enableModalBlur={false}
            value={nationality.nativePickerValue}
            onChange={nativePickerValue =>
              setNationality(prevState => ({ ...prevState, pickerOpen: false, nativePickerValue }))
            }
            trailingAccessory={
              <Entypo
                name={nationality.pickerOpen ? "chevron-up" : "chevron-down"}
                size={30}
                color="black"
                style={{ position: "absolute", marginStart: 290, top: 10 }}
              />
            }
            onPress={() => setNationality(prevState => ({ ...prevState, pickerOpen: true }))}
            topBarProps={{
              doneLabel: "Done",
              cancelLabel: "Cancel",
            }}
            fieldType="filter"
            items={allNationalities.map(option => ({
              value: option.value,
              label: option.label,
              disabled: option.disabled,
              textStyle: {
                color: option.value === nationality.nativePickerValue ? "#ff0000" : "#000000",
              },
            }))}
          />
          {emptyField && !nationality.nativePickerValue && (
            <Text style={styles.errorText}>Please select your nationality</Text>
          )}
          <TextInput
            label="Phone Number"
            placeholder="Enter your phone number"
            outlineColor="#BDBDBD"
            activeOutlineColor="#FA89B8"
            placeholderTextColor="#BDBDBD"
            contentStyle={{ fontFamily: "FiraSansRegular", fontSize: 16 }}
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
            items={allLocations.map(option => ({
              value:option.value,
              label:option.label,
              disabled:option.disabled,
              style:{
                color: option.value === currentCity.nativePickerValue ? "#ff0000" : "#000000",
              },
            }))}
          />
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
              contentStyle={{ fontFamily: "FiraSansRegular", fontSize: 16 }}
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
              contentStyle={{ fontFamily: "FiraSansRegular", fontSize: 16 }}
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
            contentStyle={{ fontFamily: "FiraSansRegular", fontSize: 16 }}
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
            onPress={handleNext}
            // onPress={() =>
            //   navigation.navigate("NewAccount", { screen: "Nanny New Account Page 2" })
            // }
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewAccountNanny1Screen;
