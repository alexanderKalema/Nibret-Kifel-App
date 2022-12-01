/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import GlobalText from '../global/global_text';

export default function Submit({label}) {
  return (
    <View style={Styles.button}>
      <GlobalText
        mylabel={label}
        myfont={'Tailwind SC Regular'}
        mystyle={{fontSize:20}}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  button: {
    backgroundColor: '#EF9F64',
    height: 70,
    borderRadius: 15,
    marginVertical: 10,
    paddingHorizontal: 20,
    fontSize: 17,
    fontFamily: 'PoppinsRegular',
    color: '#000',
    borderWidth: 1,
    borderColor: '#8P1737',
    alignItems:'center',
    justifyContent:'center'
  },
});
