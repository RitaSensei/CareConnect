import React, { useState, useEffect } from "react";
import { FIRESTORE_DB, FIREBASE_STORAGE } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { renderProfile } from "../../components/ProfilesList";
import { CatalogComponent } from "../../components/CatalogComponent";


const NanniesCatalogUserScreen = () => {
  const [profileData, setProfileData] = useState([]);
  const db = FIRESTORE_DB;
  const storage = FIREBASE_STORAGE;

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

  return <CatalogComponent data={profileData} renderItem={renderProfile} />;
};

export default NanniesCatalogUserScreen;
