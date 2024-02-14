/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logIn } from './firebase_auth_provider';



export default ({email,password}) =>
  async (dispatch) =>  {
    dispatch({
      type: 'LOGIN_LOADING',
    });
await AsyncStorage.setItem('isLoggedin', 'true');
  await logIn({email,password})
  .then(  (userCredential) => {
    // Sign
    const user = userCredential.user;

   
    dispatch({
      type: 'LOGIN_SUCCESSFUL',
      payload: user,
    });
    
  }
  
  )
  .catch((err) => {
      //  console.log(err.response.data);
        dispatch({
          type: 'LOGIN_FAILED',
          payload: err.code
            ? err.code
            : {error: 'Something went wrong, try agin'},
        });
        
      });
  };
