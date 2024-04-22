import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { Switch } from "react-native-paper";
import { Entypo, MaterialIcons, Ionicons, FontAwesome, Feather } from "@expo/vector-icons";

import styles from "./styles";

const SettingsScreen = ({ navigation }) => {
  const [lightTheme, setLightTheme] = useState(true);
  const [form, setForm] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });

  const onThemeChange = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          {/* todo: if user logged in or not */}
          <View style={[styles.section, { paddingTop: 4 }]}>
            <Text style={styles.sectionTitle}>Account</Text>
            <View style={styles.sectionBody}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.profile}
              >
                <Image
                  alt=""
                  source={{
                    uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
                  }}
                  style={styles.profileAvatar}
                />
                <View style={styles.profileBody}>
                  <Text style={styles.profileName}>Ghita Loukili</Text>
                  <Text style={styles.profileHandle}>ghita28loukili@gmail.com</Text>
                </View>
                <Entypo name="chevron-right" size={22} color="#bcbcbc" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>

            <View style={styles.sectionBody}>
              <View style={[styles.rowWrapper, styles.rowFirst]}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}
                >
                  <View
                    style={{
                      backgroundColor: "#fd9400",
                      borderRadius: 5,
                      padding: 3,
                      marginRight: 10,
                    }}
                  >
                    <MaterialIcons name="language" color="#fff" size={20} />
                  </View>
                  <Text style={styles.rowLabel}>Language</Text>
                  <View style={styles.rowSpacer} />
                  <Text style={styles.rowValue}>English</Text>

                  <Entypo name="chevron-right" size={19} color="#bcbcbc" />
                </TouchableOpacity>
              </View>

              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}
                >
                  <View
                    style={{
                      backgroundColor: "#30c65a",
                      borderRadius: 5,
                      padding: 3,
                      marginRight: 10,
                    }}
                  >
                    <Entypo name="location-pin" size={20} color="#fff" />
                  </View>
                  <Text style={styles.rowLabel}>Location</Text>
                  <View style={styles.rowSpacer} />
                  <Text style={styles.rowValue}>Rabat, Morocco</Text>
                  <Entypo name="chevron-right" size={19} color="#bcbcbc" />
                </TouchableOpacity>
              </View>

              <View style={styles.rowWrapper}>
                <View style={styles.row}>
                  <View
                    style={{
                      backgroundColor: "#007bff",
                      borderRadius: 5,
                      padding: 3,
                      marginRight: 10,
                    }}
                  >
                    <MaterialIcons name="dark-mode" size={20} color="#fff" />
                  </View>
                  <Text style={styles.rowLabel}>Dark Mode</Text>
                  <View style={styles.rowSpacer} />
                  <Switch
                    onValueChange={onThemeChange}
                    style={{ transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }] }}
                    value={lightTheme}
                    color="#7cdd6d"
                  />
                </View>
              </View>

              <View style={styles.rowWrapper}>
                <View style={styles.row}>
                  <View
                    style={{
                      backgroundColor: "#30c65a",
                      borderRadius: 5,
                      padding: 3,
                      marginRight: 10,
                    }}
                  >
                    <Entypo name="email" size={20} color="#fff" />
                  </View>
                  <Text style={styles.rowLabel}>Email Notifications</Text>
                  <View style={styles.rowSpacer} />
                  <Switch
                    onValueChange={emailNotifications => setForm({ ...form, emailNotifications })}
                    style={{ transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }] }}
                    value={form.emailNotifications}
                    color="#7cdd6d"
                  />
                </View>
              </View>

              <View style={[styles.rowWrapper, styles.rowLast]}>
                <View style={styles.row}>
                  <View
                    style={{
                      backgroundColor: "#30c65a",
                      borderRadius: 5,
                      padding: 3,
                      marginRight: 10,
                    }}
                  >
                    <Ionicons name="notifications" size={20} color="#fff" />
                  </View>
                  <Text style={styles.rowLabel}>Push Notifications</Text>
                  <View style={styles.rowSpacer} />
                  <Switch
                    onValueChange={pushNotifications => setForm({ ...form, pushNotifications })}
                    style={{ transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }] }}
                    value={form.pushNotifications}
                    color="#7cdd6d"
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resources</Text>

            <View style={styles.sectionBody}>
              <View style={[styles.rowWrapper, styles.rowFirst]}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}
                >
                  <View
                    style={{
                      backgroundColor: "#007afe",
                      borderRadius: 5,
                      padding: 3,
                      marginRight: 10,
                    }}
                  >
                    <FontAwesome name="envelope-o" size={20} color="#fff" />
                  </View>
                  <Text style={styles.rowLabel}>Contact Us</Text>
                  <View style={styles.rowSpacer} />
                  <Entypo name="chevron-right" size={19} color="#bcbcbc" />
                </TouchableOpacity>
              </View>

              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}
                >
                  <View
                    style={{
                      backgroundColor: "#8e8d92",
                      borderRadius: 5,
                      padding: 3,
                      marginRight: 10,
                    }}
                  >
                    <Feather name="flag" size={20} color="#fff" />
                  </View>
                  <Text style={styles.rowLabel}>Report Bug</Text>
                  <View style={styles.rowSpacer} />
                  <Entypo name="chevron-right" size={19} color="#bcbcbc" />
                </TouchableOpacity>
              </View>

              <View style={[styles.rowWrapper, styles.rowLast]}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}
                >
                  <View
                    style={{
                      backgroundColor: "#39a5ed",
                      borderRadius: 5,
                      padding: 3,
                      marginRight: 10,
                    }}
                  >
                    <MaterialIcons name="policy" size={20} color="#fff" />
                  </View>
                  <Text style={styles.rowLabel}>Terms and Privacy</Text>
                  <View style={styles.rowSpacer} />
                  <Entypo name="chevron-right" size={19} color="#bcbcbc" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionBody}>
              <View
                style={[
                  styles.rowWrapper,
                  styles.rowFirst,
                  styles.rowLast,
                  { alignItems: "center" },
                ]}
              >
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}
                >
                  <Text style={[styles.rowLabel, styles.rowLabelLogout]}>Log Out</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
