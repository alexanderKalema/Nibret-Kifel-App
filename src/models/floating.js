/* eslint-disable react-native/no-inline-styles */
import React, { useState} from 'react';
import {View, TextInput,} from 'react-native';

import GlobalText from '../global/global_text';

export default function FloatingLabelInput({label, ...prop}) {
  const [isFocused, setIsFocused] = useState(false);

  const labelStyle = {
    position: 'absolute',
    left: 0,
    top: !isFocused ? 40 : 0,
    fontSize: !isFocused ? 20 : 14,
    color: !isFocused ? '#B8B8B8' : '#555',
  };

  return (
    <View style={{paddingTop: 18}}>
      {prop.value === '' ? (
        <GlobalText
          mylabel={label}
          myfont={'Tailwind SC Regular'}
          mystyle={labelStyle}
        />
      ) : null}

      <TextInput
        keyboardType={prop.display === 'Email' ? 'email-address' : 'default'}
        secureTextEntry={prop.display === 'Password' ? true : false}
        //{...prop.onChangeText}
        onChangeText={(value) => prop.onChange({name: prop.display, value})}
        style={{
          marginTop: 5,
          paddingBottom: 0,
          height: 46,
          fontSize: 17,
          fontFamily: 'PoppinsRegular',
          color: '#000',
          borderBottomWidth: 1,
          borderBottomColor: !isFocused ? '#B8B8B8' : '#555',
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        blurOnSubmit
      />
    </View>
  );
}
