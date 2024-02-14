import { View, Text, Alert } from 'react-native'
import React, { useEffect } from 'react'

export default function LocalPushController() {


  useEffect(

()=>{
  messaging().setBackgroundMessageHandler(
    async remoteMessage=>{
      console.log('hehe', remoteMessage);
    }
  )
  const unsubscribe = messaging().onMessage(async (remoteMessage) => {
    Alert.alert('a new fcm message', JSON.stringify(remoteMessage));

    console.log(remoteMessage);
  });
  return unsubscribe;
},[]

 )
 
 const checkToken = async ()=>{
  const femToken = await messaging().getToken();
  if(femToken){
    console.log(femToken);
    Alert.alert(femToken);
  }
 }


  return (
    <View>
      <Text>LocalPushController</Text>
    </View>
  )
}