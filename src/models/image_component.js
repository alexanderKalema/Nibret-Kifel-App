/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import {View, TextInput, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlobalText from '../global/global_text';
import Submit from './submit';

export default function ImageComponent({label, popper,selectedImage ,existing}) {
  const [isFocused, setIsFocused] = useState(false);

   useEffect(() => {
     
  }, [selectedImage]);

  const labelStyle = {
    position: 'absolute',
    left: 20,
    top: 5,
    fontSize: 14,
    color: '#555',
  };

  const checker =()=>{
    if(existing && !selectedImage){
      return true;
    }
     if (!existing && selectedImage) {
        
       return false;
     }
      if (existing && selectedImage) {
        return false;
      }
    

  }

  return (
    <View style={{paddingTop: 18}}>
      <GlobalText
        mylabel={label}
        myfont={'Tailwind SC Regular'}
        mystyle={labelStyle}
      />
      <View
        style={{flexDirection: 'column', alignItems: 'center', marginTop: 18}}>
        {(selectedImage === null && !existing) ? (
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              resizeMode="contain"
              style={{height: 150, marginRight: 10}}
              source={require('../../assets/images/empty.png')}
            />
            <GlobalText
              mylabel={'No Images Added'}
              myfont={'Tailwind SC Regular'}
              mystyle={{fontSize: 12}}
            />
          </View>
        ) : (
          <Image
            resizeMode="stretch"
            style={{width: '100%', height: 300, marginRight: 10}}
            source={
              (checker())?
              {uri:existing}:
              {uri: selectedImage.path}}
          />
        )}
        <TouchableOpacity onPress={() => popper()}>
          <Submit label="Add Image" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  textfield: {
    backgroundColor: '#f5f5f5',
    height: 70,
    borderRadius: 30,
    marginVertical: 10,
    paddingHorizontal: 20,
    fontSize: 17,
    fontFamily: 'PoppinsRegular',
    borderWidth: 1,
    borderColor: '#8P1737',
  },
});
