import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import GlobalText from '../global/global_text';

export default function Filter({label,filter,controller}) {
const[isPressed,setIsPressed] = useState(false)

  return (
    <TouchableOpacity onPress={() => {
     
        controller(`${label}`)
      }}>
      <View
        style={[
          Styles.filter,
          {backgroundColor: (filter===label) ? '#1a73e8' : '#ECEBF3'},
        ]}>
        <GlobalText
          mylabel={label}
          myfont={'PoppinsMedium'}
          mystyle={{fontSize: 13}}
        />
      </View>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  filter: {
    marginTop: 10,
    height: 40,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
});