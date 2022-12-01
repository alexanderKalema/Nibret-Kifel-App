/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import {View, TextInput, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import GlobalText from '../global/global_text';

export default function Input({label,value, onChange,data,populator}) {

 const [isFocused, setIsFocused] = useState(false);

  const labelStyle = {
    position: 'absolute',
    left: 20,
    top: 5,
    fontSize: 14,
    color:'#555',
  };
   


  return (
    <View style={{paddingTop: 18}}>
      <GlobalText
        mylabel={label}
        myfont={'Tailwind SC Regular'}
        mystyle={labelStyle}
      />

      <TextInput
        editable={populator != undefined && label.includes('Id') ? false : true}
        keyboardType={
          label.includes('Enter') ||
          label.includes('Amount') ||
          label.includes('ቀሚስ') ||
          label.includes('አክሊል') ||
          label.includes('ሞጣህት') ||
          label.includes('ከፋይ ድግድጋት') ||
          label.includes('ሻሽ') ||
          label.includes('ካባ') ||
          label.includes('ነጠላ') ||
          label.includes('ጫማ')
            ? 'number-pad'
            : 'default'
        }
        defaultValue={
          populator != undefined ? populator[data].toString() : null
        }
        onChangeText={
          !(
            label.includes('Enter') ||
            label.includes('Amount') ||
            label.includes('ቀሚስ') ||
            label.includes('አክሊል') ||
            label.includes('ሞጣህት') ||
            label.includes('ከፋይ ድግድጋት') ||
            label.includes('ሻሽ') ||
            label.includes('ካባ') ||
            label.includes('ነጠላ') ||
            label.includes('ጫማ')
          )
            ? (value) => onChange({name: data, value})
            : (value) => {
                if (value === '') onChange({name: data, value: 0});
                else onChange({name: data, value: Number.parseInt(value)});
              }
        }
        style={Styles.textfield}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        blurOnSubmit
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  textfield: {
    backgroundColor: '#f5f5f5',
    height: 70,
    borderRadius: 30,
    marginVertical: 10,
    paddingHorizontal:20,
    fontSize: 17,
    fontFamily: 'PoppinsRegular',
    borderWidth: 1,
    borderColor: '#8P1737',
  },
});