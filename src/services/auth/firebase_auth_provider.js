/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */


import auth from '@react-native-firebase/auth';

export async function logIn ({email,password})  {

 //console.log(email, password);
  return  auth()
    .signInWithEmailAndPassword(email,password)
    // .then((value) => console.log(value))
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.log(errorMessage);
    // })
    
    ;

}