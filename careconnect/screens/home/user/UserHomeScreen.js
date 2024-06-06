import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, FlatList, SafeAreaView, ScrollView, Modal, StyleSheet, Button,Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { WebView } from 'react-native-webview';
import styles from "./styles";
import { renderProfile } from "../../../components/ProfilesSlider";
import { Testimonials } from "../../../components/Testimonials";
import botIcon from "../../../assets/icons/bot.png";

const profileData = [
  {
    profilepic: require("../../../assets/images/nanny_image.png"),
    name: ["Name", "Mary Gomez"],
    nationality: ["Nationality", "Filipino"],
    location: ["Location", "Tanger"],
    experience: ["Experience", "3 yrs"],
    "desired position": ["Desired position", "live-in, full-time"],
    "desired salary": ["Desired salary", "2000 MAD/month"],
  },
  {
    profilepic: require("../../../assets/images/nanny_image.png"),
    name: ["Name", "Clara Almario"],
    nationality: ["Nationality", "Chinese"],
    location: ["Location", "Rabat"],
    experience: ["Experience", "5 yrs"],
    "desired position": ["Desired position", "live-out, part-time"],
    "desired salary": ["Desired salary", "3000 MAD/month"],
  },
  // Add more profiles as needed
];

const clientsTestimonials = [
  {
    description: `Thank you so much CareConnect for helping me find a very good employer. Godbless to your Page and more Power. Continue helping to those people who has been looking for job and God Will return it in thousand folds`,
    name: "Hiba Mekkaoui",
    clientType: "Nanny",
  },
  {
    description: `Highly highly highly recommend CareConnect! We found our nanny in less than 2 weeks. With new profiles added almost daily it was a much more positive experience than going though an agency. Very happy with the overall experience, thank you!`,
    name: "Ghita Loukili",
    clientType: "Employer",
  },
  // Add more testimonials as needed
];

const useAutoScroll = ({ itemLength, flatListRef }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % itemLength);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [itemLength]);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }
  }, [currentIndex, flatListRef]);
};

const UserHomeScreen = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [chatVisible, setChatVisible] = useState(false);
  const [userResponses, setUserResponses] = useState([]);

  useAutoScroll({
    itemLength: clientsTestimonials.length,
    flatListRef,
  });

  const handleWebViewMessage = (event) => {
    console.log('Message received from WebView:', event.nativeEvent.data);
    const message = event.nativeEvent.data;

    if (message.startsWith('USER_INPUT:')) {
      const userResponse = message.replace('USER_INPUT:', '');
      console.log('User Response:', userResponse);
      setUserResponses(prevResponses => [...prevResponses, userResponse]);
    }
  };

  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        maximumZoomScale={1.5}
        directionalLockEnabled
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        bouncesZoom={false}
        overScrollMode="never"
      >
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>Looking for a nanny ?</Text>
            <Text style={styles.subtitle}>Find available nannies and Explore profiles</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center", position: "absolute" }}>
            <View style={styles.content}>
              <Text style={styles.descriptionTitle}>Our services</Text>
              <Text style={styles.description}>
                Experience the ease of connecting with educators through our inviting AI-powered
                application, designed with intuitive features and personalized matching algorithms.
                Explore trusted recommendations from previous employers and enjoy privacy-conscious
                video exchanges for a seamless experience.
              </Text>
            </View>
            <View style={styles.catalogHeader}>
              <View style={styles.horizontalBar} />
              <Text style={styles.descriptionTitle}>Recommended Nannies</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("NannyHiringUser", { screen: "Nannies Catalog Page" })
                }
              >
                <Text style={styles.seeAllTextRecommended}>
                  See all
                  <Entypo name="chevron-right" size={18} color="#FA89B8" />
                </Text>
              </TouchableOpacity>
            </View>
            <SafeAreaView style={{ flex: 1, marginTop: 10, marginLeft: 5, height: 205 }}>
              <FlatList
                data={profileData.slice(0, 6)}
                renderItem={renderProfile}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
              />
            </SafeAreaView>
            <View style={styles.catalogHeader}>
              <View style={styles.horizontalBar} />
              <Text style={styles.descriptionTitle}>Suggested Nannies</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("NannyHiringUser", { screen: "Nannies Catalog Page" })
                }
              >
                <Text style={styles.seeAllTextSuggested}>
                  See all
                  <Entypo name="chevron-right" size={18} color="#FA89B8" />
                </Text>
              </TouchableOpacity>
            </View>
            <SafeAreaView style={{ flex: 1, marginTop: 10, marginLeft: 5, height: 205 }}>
              <FlatList
                data={profileData.slice(0, 6)}
                renderItem={renderProfile}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
              />
            </SafeAreaView>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={localStyles.chatButton}
        onPress={() => navigation.navigate("WatsonAssistantChat")}
      >
        <Image source={botIcon} style={localStyles.chatIcon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatButton: {
    backgroundColor: '#FA89B8',
    padding: 10,
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  chatIcon: {
    width: 45,
    height: 45,
  },
});

export default UserHomeScreen;
