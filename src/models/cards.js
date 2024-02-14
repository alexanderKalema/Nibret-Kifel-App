/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import GlobalText from '../global/global_text';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../services/provider';
import LoginDialog from '../utils/login_dialog';

export default function Cards({form}) {



    const {
      authDispatch,
      authState: {loading},
    } = useContext(GlobalContext);

    const [isLoggedIn, setIsLoggedin] = useState('');
    const [visible, setVisible] = useState(false);
    useEffect(() => {
     
const asyncWrap = async () => {
   await AsyncStorage.getItem('isLoggedin').then(
    value=>{
    setIsLoggedin(value)
    }
   );
 asyncWrap();  
}}, []);

  const navigate= useNavigation();

  const [imageurl, setImageUrl] = useState('');
  const renderImage = async () => {
    const url = await storage().ref(`${form.ምስል_መለያ}`).getDownloadURL();
    setImageUrl(url);
  };

  useEffect(() => {
    renderImage();
  }, []);

  return (
    <View style={{height: 430, marginBottom: 15}}>
      <LoginDialog visible={visible} setVisible={setVisible} />
      <View>
        {imageurl === '' ? (
          <Image
            resizeMode="contain"
            style={TabStyle.image}
            source={require('../../assets/images/empty.png')}
          />
        ) : (
          <Image
            resizeMode="stretch"
            style={TabStyle.image}
            source={{uri: imageurl}}
          />
        )}
      </View>

      <View style={[TabStyle.containers]}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <TouchableOpacity
            onPress={
              isLoggedIn === 'true'
                ? () => {
                    setVisible(true);
                  }
                : () => {
                    navigate.push('EditProperty', form);
                  }
            }>
            <FontAwesome name="edit" size={20} color={'black'} />
          </TouchableOpacity>
        </View>
        <GlobalText
          mylabel={`ስም : ${form.ስም}`}
          myfont={'PoppinsMedium'}
          mystyle={{fontSize: 20}}
        />
        <GlobalText
          mylabel={`መለያ : ${form.መለያ}`}
          myfont={'PoppinsMedium'}
          mystyle={{fontSize: 9, color: 'grey'}}
        />
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View>
            <GlobalText
              mylabel={`አይነት: ${form.አይነት}`}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 13, color: 'grey'}}
            />
            <GlobalText
              mylabel={`የጠፋ : ${form.የጠፋ_መጠን}`}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 13, color: 'grey'}}
            />
            <GlobalText
              mylabel={`ጥሩ ሁኔታ ላይ ያለ: ${form.ጥሩ_ሁኔታ_ላይ_ያለ_መጠን}`}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 13, color: 'grey'}}
            />
          </View>
          <View style={{marginLeft: 25}}>
            <GlobalText
              mylabel={`ጥገና የሚያስፈልገው: ${form.ጥገና_የሚያስፈልገው_መጠን}`}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 13, color: 'grey'}}
            />
            <GlobalText
              mylabel={`ሌላ: ${form.ሌላ_መጠን}`}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 13, color: 'grey'}}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
const TabStyle = StyleSheet.create({
  image: {
    backgroundColor: '#F2F3F2',
    width: '100%',
    height: 300,
    marginTop: 25,
    borderRadius: 20,
    paddingVertical: 10,
  },

  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containers: {
    position: 'absolute',
    top: 225,
    left: 30,
    zIndex: 1,
    height: 190,
    width: '82%',
    borderRadius: 16,
    padding: 16,
    borderRadius: 20,
    backgroundColor: 'white',
  },
});
