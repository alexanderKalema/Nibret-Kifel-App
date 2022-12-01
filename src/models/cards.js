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
      authState: {isLoggedIn, loading},
    } = useContext(GlobalContext);

    const [skipCount, setSkipCount] = useState(true);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      if (skipCount) {
        setSkipCount(false);
      }
      if (!skipCount) {
        setVisible(!isLoggedIn);
      }
    }, [isLoggedIn]);

  const navigate= useNavigation();

  const [imageurl, setImageUrl] = useState('');
  const renderImage = async () => {
    const url = await storage().ref(`${form.Image_id}`).getDownloadURL();
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


   !isLoggedIn
     ? () => {
         setVisible(true);
       }
     : () => {
 navigate.push('EditProperty', form);       }

             
            }>
            <FontAwesome name="edit" size={20} color={'black'} />
          </TouchableOpacity>
        </View>
        <GlobalText
          mylabel={`Name : ${form.Name}`}
          myfont={'PoppinsMedium'}
          mystyle={{fontSize: 20}}
        />
        <GlobalText
          mylabel={`Id : ${form.Id}`}
          myfont={'PoppinsMedium'}
          mystyle={{fontSize: 9, color: 'grey'}}
        />
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View>
            <GlobalText
              mylabel={`Type: ${form.Type}`}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 13, color: 'grey'}}
            />
            <GlobalText
              mylabel={`Lost: ${form.Amount_Lost}`}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 13, color: 'grey'}}
            />
            <GlobalText
              mylabel={`In Good Shape: ${form.Amount_In_Good_Shape}`}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 13, color: 'grey'}}
            />
          </View>
          <View style={{marginLeft: 25}}>
            <GlobalText
              mylabel={`Needs Repair: ${form.Amount_Needs_Repair}`}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 13, color: 'grey'}}
            />
            <GlobalText
              mylabel={`Amount Other: ${form.Amount_Other}`}
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
    backgroundColor: '#354545',
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
