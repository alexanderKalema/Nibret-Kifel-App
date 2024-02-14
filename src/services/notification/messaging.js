 import messaging from '@react-native-firebase/messaging';
import {initializeApp} from 'firebase-admin';
// // Note that an async function or a function that returns a Promise
// // is required for both subscribers.
// async function onMessageReceived(message) {
//   // Do something
// }

// messaging().onMessage(onMessageReceived);
// messaging().setBackgroundMessageHandler(onMessageReceived);



export async function onAppBootstrap() {
  // Register the device with FCM
  await messaging().registerDeviceForRemoteMessages();

  // Get the token
  const token = await messaging().getToken();

// await sendMessage({token})
console.log(token,"my token")
  // Save the token
 //  await postToApi('/users/1234/tokens', {token});
}


