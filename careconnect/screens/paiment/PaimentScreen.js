import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = ({ visible, onClose }) => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);
    // Simulate a delay to mimic a payment process
    setTimeout(() => {
      setLoading(false);
      // Validate the amount
      if (!amount || isNaN(amount) || amount <= 0) {
        Alert.alert('Error', 'Please enter a valid amount.');
      } else {
        // Navigate to another screen upon successful "payment"
        navigation.navigate('ChatBotScreen');
      }
    }, 1500); // Simulated delay of 1.5 seconds
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Enter Payment Amount</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={text => setAmount(text)}
              value={amount}
              placeholder="Amount"
            />
            <Button title={loading ? 'Processing...' : 'Pay Now'} onPress={handlePayment} disabled={loading} />
            <Button title="Cancel" onPress={onClose} color="red" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default PaymentScreen;
