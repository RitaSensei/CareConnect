import React, { useState, useEffect, useCallback } from "react";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import styles from "./styles";
import { Buffer } from 'buffer';
global.Buffer = Buffer;
const ChatBotScreen = () => {
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    const initializeChat = async () => {
      try {
        const id = await createSession();
        setSessionId(id);
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
      } catch (error) {
        console.error("Failed to initialize session", error);
      }
    };
    initializeChat();
  }, []);

  const onSend = useCallback(async (messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    const userMessage = messages[0].text;
    try {
      if (sessionId) {
        const response = await sendMessage(userMessage, sessionId);
        const botMessage = {
          _id: new Date().getTime(),
          text: response.output.generic[0].text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "NannyPal",
            avatar: require("../../assets/icons/bot.png"),
          },
        };
        setMessages(previousMessages => GiftedChat.append(previousMessages, [botMessage]));
      }else {
        console.error("No response from Watson Assistant");
      }
    } catch (error) {
      console.error("Failed to send message", error);
    }
  }, [sessionId]);

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
        //user={{
        //  _id: 1,  // Static user ID for the parent
        //  name: 'Parent',  // Static user name for the parent
        // avatar: 'https://placeimg.com/140/140/any'  // Placeholder avatar
        //}}
      />
    </View>
  );
};

export default ChatBotScreen;
