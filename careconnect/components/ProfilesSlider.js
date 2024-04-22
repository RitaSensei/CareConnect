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
        width: 200,
      }}
    >
      <View style={styles.cardCover}>
        <Card.Cover
          source={item.profilepic}
          style={{
            // aspectRatio: 0.4,
            width: 80,
            height: 80,
            // resizeMode: "contain",
            // overflow: "hidden",
          }}
        />
        <View style={{ flexDirection: "row", alignItems: "center", left: 5, top: 8, width: 90 }}>
          <FontAwesome6 name="coins" size={16} color="#B272A4" />
          <Text
            style={{
              fontFamily: "FiraSansRegular",
              fontSize: 11,
              color: "#000",
              textAlign: "center",
              marginLeft: 5,
            }}
          >
            {item["desired salary"][1]}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", left: 5, top: 15, width: 90 }}>
          <MaterialIcons name="place" size={16} color="#B272A4" />
          <Text
            style={{
              fontFamily: "FiraSansRegular",
              fontSize: 11,
              color: "#000",
              textAlign: "center",
              marginLeft: 5,
            }}
          >
            {item["location"][1]}
          </Text>
        </View>
      </View>
      <View>
        <Card.Content style={styles.cardContent}>
          <Paragraph style={styles.nannyName}>
            <Text>{item.name[1]}</Text>
          </Paragraph>
          <Paragraph style={styles.nannyInformations}>
            {item.nationality[0]} : <Text style={{ color: "#000" }}>{item.nationality[1]}</Text>
          </Paragraph>
          <Paragraph style={styles.nannyInformations}>
            {item.experience[0]} : <Text style={{ color: "#000" }}>{item.experience[1]}</Text>
          </Paragraph>
          <Paragraph style={styles.nannyInformations}>
            {item["desired position"][0]} :{" "}
            <Text style={{ color: "#000" }}>{item["desired position"][1]}</Text>
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
