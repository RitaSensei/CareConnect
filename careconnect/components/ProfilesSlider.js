import React from "react";
import { Text, View } from "react-native";
import { Button, Card, Paragraph } from "react-native-paper";
import { MaterialIcons, FontAwesome6 } from "@expo/vector-icons";

import styles from "../screens/home/visitor/styles";

export const renderProfile = ({ item }) => (
  <Card style={styles.cardContainer}>
    <View
      style={{
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        flex: 1,
        width: 220,
      }}
    >
      <View style={styles.cardCover}>
        <Card.Cover
          source={{ uri: item.profilePhotoUrl}}
          style={{
            // aspectRatio: 0.4,
            width: 80,
            height: 80,
            // resizeMode: "contain",
            // overflow: "hidden",
          }}
        />
        <View style={{ flexDirection: "row", alignItems: "center", left: 0, top: 8, width: 90 }}>
          <MaterialIcons name="place" size={16} color="#B272A4" />
          <Text
            style={{
              fontFamily: "FiraSansRegular",
              fontSize: 11,
              color: "#000",
              textAlign: "center",
              marginLeft: 2,
            }}
          >
            {item.currentCity}
          </Text>
        </View>
      </View>
      <View>
        <Card.Content style={styles.cardContent}>
          <Paragraph style={styles.nannyName}>
            <Text>{item.firstName} {item.lastName}</Text>
          </Paragraph>
          <Paragraph style={styles.nannyInformations}>
            {"Nationality : "}<Text style={{ color: "#000" }}>{item.nationality}</Text>
          </Paragraph>
          <Paragraph style={styles.nannyInformations}>
            {"Experience : "}<Text style={{ color: "#000" }}>{item.yearsOfExperience}</Text>
          </Paragraph>
          <Paragraph style={styles.nannyInformations}>
            {"Desired position : "}
            {item.desiredPosition.map((position, index) => (
              <Text key={index} style={{ color: "#000" }}>
                {position}
                {index < item.desiredPosition.length - 1 ? ", " : ""}
              </Text>
            ))}
          </Paragraph>
        </Card.Content>
      </View>
    </View>
    <Card.Actions>
      <View style={{ flex: 1 }}>
        <Button
          mode="contained"
          style={styles.viewProfileButton}
          textColor="#fff"
          buttonColor="#B272A4"
          rippleColor="#FCD9E0"
          onPress={() => {}}
        >
          <Text style={styles.viewProfileText}>View Profil</Text>
        </Button>
      </View>
    </Card.Actions>
  </Card>
);
