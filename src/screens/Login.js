/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import FloatingLabelInput from '../models/floating';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import GlobalText from '../global/global_text';
import LoginUser from '../services/auth/LoginUser';
import { GlobalContext } from '../services/provider';
import ErrorDialog from '../utils/error_dialog';
import { useNavigation } from '@react-navigation/native';
import Loading from '../utils/loading';
import InformationDialog from '../utils/info_dialog';



 export default function Login({route,navigation}) {
    const {
      authDispatch,
      authState: {isLoggedIn, error, loading},
    } = useContext(GlobalContext);

  const [form, setForm] = useState({'Email':"","Password":""});
  const [errorvisible, seterrorVisible] = useState(false);
  const [skipCount, setSkipCount] = useState(true);
    const [infovisible, setinfoVisible] = useState(false);

  const [loadingvisible, setloadingVisible] = useState(false);

  const {navigate,pop} = useNavigation();
  useEffect(() => {
     seterrorVisible(!(error === null));
  }, [error]);
  
    useEffect(() => {
       if (skipCount) setSkipCount(false);
    if (!skipCount) {
      setloadingVisible(loading);
    }
    }, [loading]);
  useEffect(() => {
    if (skipCount) setSkipCount(false);
    if (!skipCount) {
      setinfoVisible(true)
    }
  }, [isLoggedIn]);

  const onChange= ({name,value})=> {
    setForm({...form,[name]:value});
  }; 
  
  const SCREEN_HEIGHT = Dimensions.get('screen').height;
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'never'}
      style={{flex: 1}}
      contentContainerStyle={{height: SCREEN_HEIGHT}}
      showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require('../../assets/images/Background.png')}
        style={[Styles.ImageBackground]}>
        <ErrorDialog
          content={error}
          visible={errorvisible}
          setVisible={seterrorVisible}
        />
        <Loading visible={loadingvisible} />
        <InformationDialog
          visible={infovisible}
          content={'ንብረት መጨመር, ማስተካከል, ጥያቄዎችን መመለስ ይችላሉ'}
          setVisible={setinfoVisible}
          myfuntion={() => pop()}
        />
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            paddingHorizontal: 25,
            paddingTop: 60,
          }}>
          <View style={Styles.TopView}>
            <TouchableOpacity
              onPress={() => {
                pop();
              }}>
              <Ionicons name="chevron-back" size={40} color="#F7F7F7" />
            </TouchableOpacity>

            <GlobalText
              mylabel={'እንኳን ደህና መጡ'}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 35}}
            />
          </View>

          <View style={Styles.BottomView}>
            <FloatingLabelInput
              label="ኢሜል"
              display="Email"
              value={form['Email']}
              onChange={onChange}
            />
            <View style={{marginVertical: 10}}></View>

            <FloatingLabelInput
              label="ሚስጥር ቁልፍ"
              display="Password"
              value={form['Password']}
              onChange={onChange}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                justifyContent: 'space-between',
                marginTop: 70,
              }}>
              <GlobalText
                mylabel={'ይግቡ'}
                myfont={'PoppinsMedium'}
                mystyle={{fontSize: 25}}
              />
              <TouchableOpacity
                onPress={() => {
                  LoginUser({
                    email: form['Email'],
                    password: form['Password'],
                  })(authDispatch);
                }}>
                <View style={Styles.Circular}>
                  <FontAwesome
                    name="long-arrow-right"
                    size={30}
                    color="white"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}

const Styles = StyleSheet.create({
  TopView: {
   
    flex: 1,
    justifyContent: 'space-between',
  
  },
  BottomView: {
    flex: 2,
    justifyContent: 'center',
    
  },
  ImageBackground: {
    flex: 1,
  },
  Circular: {
    padding: 30,
    backgroundColor: '#EF9F64',
    borderRadius: 100,
  },
});
