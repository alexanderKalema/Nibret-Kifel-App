/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Foundation from 'react-native-vector-icons/Foundation';
import GlobalText from '../global/global_text';
import { SelectList } from 'react-native-dropdown-select-list';
import { RequestData} from '../constants/constant';
import { useNavigation } from '@react-navigation/native';

export default function Tabs({iconName,title,onclick}) {

  const navigation = useNavigation();
   const [selected, setSelected] = React.useState([]);

   const filter = (value)=>{
      if(selected ==='ከፋይ ድግድጋት ልብሰ ስብሃት')
      {
        navigation.navigate('FirstType');
      }
     else if (selected === 'ጥንድ ድርብ ልብሰ ስብሃት') {
       navigation.navigate('SecondType');
     }
       else{
       navigation.navigate('ThirdType');
       }

   }

  return (
    <View>
      {title === 'ንብረት ለመዋስ ጥያቄ ያቅርቡ' ? (
        <SelectList
          setSelected={(val) => setSelected(val)}
          onSelect={() => filter()}
          data={RequestData}
          save="value"
          dropdownStyles={{
            borderRadius: 50,
            paddingHorizontal: 15,
            backgroundColor: 'white',
            justifyContent: 'space-between',
          }}
          inputStyles={{fontSize: 0}}
          dropdownTextStyles={{fontSize: 18, marginVertical: 5}}
          placeholder=" "
          arrowicon={
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={TabStyle.icon}>
                <Foundation name={iconName} size={50} color="#25332C" />
              </View>

              <View style={{marginLeft: 40}}>
                <GlobalText
                  mylabel={title}
                  myfont={'PoppinsMedium'}
                  mystyle={{fontSize: 16}}
                />
              </View>
            </View>
          }
          // onSelect={() => alert(selected)}
          search={false}
          boxStyles={TabStyle.container}
        />
      ) : (
        <View style={TabStyle.container}>
          <TouchableOpacity
            onPress={() => {
              onclick();
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={TabStyle.icon}>
                <Foundation name={iconName} size={50} color="#25332C" />
              </View>

              <View style={{marginLeft: 40}}>
                <GlobalText
                  mylabel={title}
                  myfont={'PoppinsMedium'}
                  mystyle={{fontSize: 16}}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
const TabStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    marginTop: 25,
    backgroundColor: '#D99F64',
    borderRadius: 50,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  icon: {
    width:"auto",
    backgroundColor: '#F6EBE2',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 80,
    justifyContent: 'center',
  },
});