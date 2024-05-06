import React from "react";
import { View, FlatList, SafeAreaView, StyleSheet } from "react-native";

import { MultipleFilters } from "./ProfilesSearchBar";

export const CatalogComponent = ({ data, renderItem }) => {
  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <MultipleFilters />
        <View style={{ width: "100%", height: "90%" }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
