import React from "react";
import { Text, View } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { MaterialIcons, FontAwesome6 } from "@expo/vector-icons";

import styles from "../screens/nannies catalog/styles";

export const renderProfile = ({ item }) => (
  <Card mode="contained" style={styles.cardContainer}>
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
          source={{ uri: item.profilePhotoUrl }}
          style={{
            width: 120,
            height: 120,
          }}
        />
      </View>
      <View>
        <Card.Content style={styles.cardContent}>
          <Paragraph style={styles.nannyName}>
            <Text>{item.firstName} {item.lastName}</Text>
          </Paragraph>
          <Paragraph style={styles.nannyInformations}>
            <Text style={{ color: "#000" }}>{item.nationality}</Text> {" | "}{" "}
            <Text style={{ color: "#000" }}>{item.yearsOfExperience}</Text>
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
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
            <MaterialIcons name="place" size={18} color="#FA89B8" />
            <Text
              style={{
                fontFamily: "FiraSansRegular",
                fontSize: 13,
                color: "#000",
                textAlign: "center",
                marginRight: 20,
              }}
            >
              {item.currentCity}
            </Text>
          </View>
        </Card.Content>
      </View>
    </View>
    <View style={styles.separatorContainer}>
      <View style={styles.separator} />
    </View>
  </Card>
);
