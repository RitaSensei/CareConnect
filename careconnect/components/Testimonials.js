import React from "react";
import { Text, View } from "react-native";
import { Card, Paragraph } from "react-native-paper";

import styles from "../screens/home/visitor/styles";

export const Testimonials = ({ item }) => (
  <Card style={styles.testimonialsCardContainer}>
    <View
      style={{
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Card.Content style={styles.testimonialCardContent}>
        <Paragraph style={styles.testimonialContent}>
          <Text>{item.description}</Text>
        </Paragraph>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Paragraph style={styles.testimonialAuthor}>
            <Text>{item.name}</Text>
          </Paragraph>
          <Paragraph style={styles.testimonialClientType}>
            <Text>{item.clientType}</Text>
          </Paragraph>
        </View>
      </Card.Content>
    </View>
  </Card>
);
