import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, FlatList, SafeAreaView, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FIRESTORE_DB, FIREBASE_STORAGE } from "../../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

import styles from "./styles";
import { renderProfile } from "../../../components/ProfilesSlider";

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
  {
    description: `CareConnect provide very professional services. They brief the candidates properly and go the extra mile to help. Lani is highly supportive and kind.`,
    name: "Hiba Mekkaoui",
    clientType: "Nanny",
  },
  {
    description: `Honestly I m writing this my thought to share with all who is searching job like me I thought its difficult to find a job and get good salary but because of CareConnect its so easy and fast . Really thankful once again to CareConnect to make find a job so quick.`,
    name: "Ghita Loukili",
    clientType: "Employer",
  },
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
  const [profileData, setProfileData] = useState([]);
  const flatListRef = useRef(null);
  const db = FIRESTORE_DB;
  const storage = FIREBASE_STORAGE;

  useAutoScroll({
    itemLength: clientsTestimonials.length,
    flatListRef,
  });

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "nannies"));
        const profiles = await Promise.all(
          querySnapshot.docs.map(async doc => {
            const data = doc.data();
            const profilePhotoUrl = await getDownloadURL(ref(storage, `nannyProfilePics/${data.userId}.jpg`));
            return { id: doc.userId, ...data, profilePhotoUrl };
          })
        );
        setProfileData(profiles);
      } catch (error) {
        console.error("Error fetching profiles: ", error);
      }
    };

    fetchProfiles();
  }, [db, storage]);


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
          {/* <MultipleFilters /> */}
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
                data={profileData.slice(0,6)}
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
            {/* <View style={styles.testimonialsHeader}>
              <Text style={styles.testimonialsTitle}>Testimonials</Text>
            </View> */}
            {/* <SafeAreaView
              style={{
                flex: 1,
                marginTop: 15,
                marginStart: 5,
                height: 250,
              }}
            >
              <FlatList
                data={clientsTestimonials}
                renderItem={Testimonials}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                alwaysBounceVertical={false}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                ref={flatListRef}
              />
            </SafeAreaView> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserHomeScreen;
