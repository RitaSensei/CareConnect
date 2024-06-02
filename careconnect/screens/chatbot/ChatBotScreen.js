import React, { useState, useEffect, useCallback, useLayoutEffect } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Image } from "react-native";
import { Avatar } from "react-native-paper";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

const ChatBotScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello Dear Parent, I am NannyPal and I am here to help you with your queries 🎉. How can I help you today?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "NannyPal",
          avatar: require("../../assets/icons/bot.png"),
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
  }, []);

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#B272A4",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  };

  const renderSend = props => {
    return (
      <Send {...props}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome
            name="send"
            size={24}
            color="#FA89B8"
            style={{ marginBottom: 10, marginRight: 15 }}
          />
        </View>
      </Send>
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        showAvatarForEveryMessage
        onSend={messages => onSend(messages)}
        isTyping
        renderAvatarOnTop
        renderBubble={renderBubble}
        renderSend={renderSend}
        alwaysShowSend
        alignTop
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
        minComposerHeight={40}
        // user={{
        //   _id: auth?.currentUser?.email,
        //   name: auth?.currentUser?.displayName,
        //   avatar: auth?.currentUser?.photoURL,
        // }}
      />
    </View>
  );
};

export default ChatBotScreen;
