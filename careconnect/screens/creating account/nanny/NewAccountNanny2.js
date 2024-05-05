import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, SafeAreaView, Alert } from "react-native";
import { TextInput, Button, IconButton, Checkbox } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { Entypo, AntDesign } from "@expo/vector-icons";

import styles from "../styles";
import { PickerComponent } from "../../../components/PickerComponent";
import {
  allYearsOfExperience,
  allChildAgeIntervals,
  allCertifications,
  allQualifications,
  allLanguages,
} from "../../../utils/allOptions";

const NewAccountNanny2Screen = ({ navigation }) => {
  const [blobFile, setBlobFile] = useState(null);
  const [fileName, setFileName] = useState([]);
  const [isChoosed, setIsChoosed] = useState(false);
  // const [profilePhoto, setProfilePhoto] = useState(null);
  // const [profilePhotoError, setProfilePhotoError] = useState(false);
  const [emptyField, setEmptyField] = useState(false);

  // const handleProfilePhoto = async () => {
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });
  //   if (!result.canceled) {
  //     setEmptyField(false);
  //     setProfilePhoto(result.assets[0].uri);
  //   }
  // };

  const [yearsOfExperience, setYearsOfExperience] = useState([
    { id: 0, nativePickerValue: "", pickerOpen: false, options: allYearsOfExperience },
  ]);

  const [childrenAges, setChildrenAges] = useState([
    { id: 0, nativePickerValue: "", pickerOpen: false, options: allChildAgeIntervals },
  ]);

  const [certifications, setCertifications] = useState([
    { id: 0, nativePickerValue: "", pickerOpen: false, options: allCertifications },
  ]);

  const [qualifications, setQualifications] = useState([
    { id: 0, nativePickerValue: "", pickerOpen: false, options: allQualifications },
  ]);

  const [languages, setLanguages] = useState([
    { id: 0, nativePickerValue: "", pickerOpen: false, options: allLanguages },
  ]);

  const handlePickerSelect = (index, value, type) => {
    if (type === "yearsOfExperience") {
      const updatedYearsOfExperience = [...yearsOfExperience];
      updatedYearsOfExperience[index].nativePickerValue = value;
      setYearsOfExperience(updatedYearsOfExperience);
    } else if (type === "childrenAges") {
      const updatedChildrenAges = [...childrenAges];
      updatedChildrenAges[index].nativePickerValue = value;
      setChildrenAges(updatedChildrenAges);
    } else if (type === "qualifications") {
      const updatedQualifications = [...qualifications];
      updatedQualifications[index].nativePickerValue = value;
      setQualifications(updatedQualifications);
    } else if (type === "languages") {
      const updatedLanguages = [...languages];
      updatedLanguages[index].nativePickerValue = value;
      setLanguages(updatedLanguages);
    } else if (type === "certifications") {
      const updatedCertifications = [...certifications];
      updatedCertifications[index].nativePickerValue = value;
      setCertifications(updatedCertifications);
    }
  };

  const handleAddPicker = type => {
    if (type === "yearsOfExperience") {
      setYearsOfExperience(prev => [
        ...prev,
        {
          id: prev.length,
          nativePickerValue: "",
          pickerOpen: false,
          options: allYearsOfExperience,
        },
      ]);
    } else if (type === "childrenAges") {
      setChildrenAges(prev => [
        ...prev,
        {
          id: prev.length,
          nativePickerValue: "",
          pickerOpen: false,
          options: allChildAgeIntervals,
        },
      ]);
    } else if (type === "qualifications") {
      setQualifications(prev => [
        ...prev,
        {
          id: prev.length,
          nativePickerValue: "",
          pickerOpen: false,
          options: allQualifications,
        },
      ]);
    } else if (type === "languages") {
      setLanguages(prev => [
        ...prev,
        {
          id: prev.length,
          nativePickerValue: "",
          pickerOpen: false,
          options: allLanguages,
        },
      ]);
    } else if (type === "certifications") {
      setCertifications(prev => [
        ...prev,
        {
          id: prev.length,
          nativePickerValue: "",
          pickerOpen: false,
          options: allCertifications,
        },
      ]);
    }
  };

  const handleRemovePicker = (index, type) => {
    if (type === "yearsOfExperience") {
      setYearsOfExperience(prev => {
        const updatedYearsOfExperience = [...prev];
        updatedYearsOfExperience.splice(index, 1);
        return updatedYearsOfExperience;
      });
    } else if (type === "childrenAges") {
      setChildrenAges(prev => {
        const updatedChildrenAges = [...prev];
        updatedChildrenAges.splice(index, 1);
        return updatedChildrenAges;
      });
    } else if (type === "qualifications") {
      setQualifications(prev => {
        const updatedQualifications = [...prev];
        updatedQualifications.splice(index, 1);
        return updatedQualifications;
      });
    } else if (type === "languages") {
      setLanguages(prev => {
        const updatedLanguages = [...prev];
        updatedLanguages.splice(index, 1);
        return updatedLanguages;
      });
    } else if (type === "certifications") {
      setCertifications(prev => {
        const updatedCertifications = [...prev];
        updatedCertifications.splice(index, 1);
        return updatedCertifications;
      });
    }
  };

  const handleRegister = () => {
    const isAnyYearExperiencePickerEmpty = yearsOfExperience.some(
      picker => !picker.nativePickerValue
    );
    const isAnyChildrenAgesPickerEmpty = childrenAges.some(picker => !picker.nativePickerValue);
    const isAnyQualificationsPickerEmpty = qualifications.some(picker => !picker.nativePickerValue);
    const isAnyLanguagesPickerEmpty = languages.some(picker => !picker.nativePickerValue);
    const isAnyCertificationsPickerEmpty = certifications.some(picker => !picker.nativePickerValue);

    if (
      !isAnyYearExperiencePickerEmpty &&
      !isAnyChildrenAgesPickerEmpty &&
      !isAnyQualificationsPickerEmpty &&
      !isAnyLanguagesPickerEmpty &&
      !isAnyCertificationsPickerEmpty
    ) {
      navigation.navigate("NewAccount", { screen: "Nanny New Account Page 2" });
    } else {
      setEmptyField(true);
    }
  };

  const handlePickDocuments = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
        copyToCacheDirectory: true,
        multiple: true,
      });

      if (!result.canceled) {
        setEmptyField(false);
        const fileNames = result.assets.map(asset => asset.name);
        setFileName(fileNames);
        setIsChoosed(true);
        console.log(fileName);
      } else {
        Alert.alert("Document picker cancelled");
      }
    } catch (error) {
      // User cancelled the picker
      if (DocumentPicker.isCancel(error)) {
        setEmptyField(true);
      } else {
        setEmptyField(true);
        throw error;
      }
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
          <PickerComponent
            data={childrenAges}
            emptyField={emptyField}
            onSelect={(index, value) => handlePickerSelect(index, value, "childrenAges")}
            onAdd={() => handleAddPicker("childrenAges")}
            onRemove={index => handleRemovePicker(index, "childrenAges")}
            disabled={childrenAges.length >= allChildAgeIntervals.length}
            placeholder="Select Age Range of Children"
            errorText="Please select the age range of children you worked with"
          />
          <PickerComponent
            data={yearsOfExperience}
            emptyField={emptyField}
            onSelect={(index, value) => handlePickerSelect(index, value, "yearsOfExperience")}
            onAdd={() => handleAddPicker("yearsOfExperience")}
            onRemove={index => handleRemovePicker(index, "yearsOfExperience")}
            disabled={yearsOfExperience.length >= allYearsOfExperience.length}
            placeholder="Select Years of Experience"
            errorText="Please select how many years of experience you have"
          />
          <PickerComponent
            data={certifications}
            emptyField={emptyField}
            onSelect={(index, value) => handlePickerSelect(index, value, "certifications")}
            onAdd={() => handleAddPicker("certifications")}
            onRemove={index => handleRemovePicker(index, "certifications")}
            disabled={certifications.length >= allCertifications.length}
            placeholder="Select Certifications"
            errorText="Please select your certifications"
          />
          <PickerComponent
            data={qualifications}
            emptyField={emptyField}
            onSelect={(index, value) => handlePickerSelect(index, value, "qualifications")}
            onAdd={() => handleAddPicker("qualifications")}
            onRemove={index => handleRemovePicker(index, "qualifications")}
            disabled={qualifications.length >= allQualifications.length}
            placeholder="Select Qualifications"
            errorText="Please select your qualifications"
          />
          <Button
            mode="contained-tonal"
            style={styles.uploadButton}
            buttonColor="#FCD9E0"
            textColor="#fff"
            contentStyle={{ flexDirection: "row-reverse", justifyContent: "space-between" }}
            icon={() => <Entypo name="upload" size={18} color="#000" />}
            onPress={handlePickDocuments}
          >
            <Text style={styles.uploadButtonText}>Upload</Text>
          </Button>
          {/* {fileName && <Alert> File selected</Alert>} */}
          <PickerComponent
            data={languages}
            emptyField={emptyField}
            onSelect={(index, value) => handlePickerSelect(index, value, "languages")}
            onAdd={() => handleAddPicker("languages")}
            onRemove={index => handleRemovePicker(index, "languages")}
            disabled={languages.length >= allLanguages.length}
            placeholder="Select Languages"
            errorText="Please select  the languages you speak"
          />
          <Checkbox status="checked" color="#FA89B8">
            <Text style={{ color: "black" }}>
              By clicking Register, you agree to our Terms and Conditions and Privacy Policy
            </Text>
          </Checkbox>
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

export default NewAccountNanny2Screen;
