import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';


export default function New({navigation}) {
  
  const handleSendNotification = () => {
    return;
  };

  const handleSetTheAlarm = () => {
    return;
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>PUSH NOTIFICATIONS TEST</Text>
      <View style={styles.buttonsWrapper}>
        <View style={styles.buttonWrapper}>
          <Button title="SEND NOTIFICATION" onPress={handleSendNotification} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="SET ALARM" color="red" onPress={handleSetTheAlarm} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  buttonsWrapper: {
    marginTop: 50,
  },
  buttonWrapper: {
    marginBottom: 20,
  },
});

