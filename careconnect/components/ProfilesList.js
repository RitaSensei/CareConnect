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
          source={item.profilepic}
          style={{
            width: 120,
            height: 120,
          }}
        />
      </View>
      <View>
        <Card.Content style={styles.cardContent}>
          <Paragraph style={styles.nannyName}>
            <Text>{item.name[1]}</Text>
          </Paragraph>
          <Paragraph style={styles.nannyInformations}>
            <Text style={{ color: "#000" }}>{item.nationality[1]}</Text> {" | "}{" "}
            <Text style={{ color: "#000" }}>{item.experience[1]}</Text>
          </Paragraph>
          <Paragraph style={styles.nannyInformations}>
            <Text style={{ color: "#000" }}>{item["desired position"][1]}</Text>
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
              {item["location"][1]}
            </Text>
            <FontAwesome6 name="coins" size={16} color="#FA89B8" />
            <Text
              style={{
                fontFamily: "FiraSansRegular",
                fontSize: 13,
                color: "#000",
                textAlign: "center",
                marginLeft: 5,
              }}
            >
              {item["desired salary"][1]}
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
