import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import { View, StyleSheet, Button } from 'react-native';

const WatsonAssistantChat = () => {
  const [userResponses, setUserResponses] = useState([]);

  const handleWebViewMessage = (event) => {
    console.log('Message received from WebView:', event.nativeEvent.data);
    const message = event.nativeEvent.data;

    if (message.startsWith('USER_INPUT:')) {
      const userResponse = message.replace('USER_INPUT:', '');
      console.log('User Response:', userResponse);
      setUserResponses(prevResponses => [...prevResponses, userResponse]);
    }
  };

  
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'http://10.1.7.52:8000/index.html' }} // Use your local IP address
        style={{ flex: 1 }}
        onMessage={handleWebViewMessage}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onLoadStart={() => console.log('WebView started loading')}
        onLoadEnd={() => console.log('WebView finished loading')}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WatsonAssistantChat;
