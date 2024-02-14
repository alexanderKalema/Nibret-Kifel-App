
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import GlobalText from '../global/global_text';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function GenericDialog({icon,title,content,optionBuilder}) {
return (
  <>
    <View style={Styles.modalContainer}>
      <View style={Styles.modalCheckoutContainer}>
        <View style={{width: '100%', alignItems: 'center'}}>
          <MaterialIcons name={icon} size={85} color="#EF9F64" />
        </View>
        <GlobalText
          mylabel={title}
          myfont={'Tailwind SC Regular'}
          mystyle={{fontSize: 38, marginVertical: 5}}
        />
        <GlobalText
          mylabel={content}
          myfont={'Tailwind SC Regular'}
          mystyle={{fontSize: 15, marginTop: 20, color: 'grey'}}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          {optionBuilder.map((optionTiles) => (
            <TouchableOpacity
              key={optionTiles.name}
              style={[
                Styles.text,
                {
                  backgroundColor:
                    optionTiles.name === 'እሺ' ||
                    optionTiles.name === 'ይቀጥሉ' ||
                    optionTiles.name === 'Yes'
                      ? '#EF9F64'
                      : '#E0E1E4',
                },
              ]}
              onPress={() => {
                optionTiles.action();
              }}>
              <Text
                style={{
                  color:
                    optionTiles.name === 'እሺ' ||
                    optionTiles.name === 'ይቀጥሉ' ||
                    optionTiles.name === 'Yes'
                      ? 'black'
                      : 'grey',
                  fontSize: 20,
                  fontFamily: 'Tailwind SC Regular',
                }}>
                {optionTiles.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  </>
);
  }


  const Styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.7)',
    },

    modalCheckoutContainer: {
      backgroundColor: 'white',
      padding: 16,
      height: 'auto',
      width: '85%',
      marginHorizontal: 30,
      borderRadius: 50,
    },

    text: {
      alignItems: 'center',
      padding: 28,
      borderRadius: 30,
      width: '40%',
      marginTop: 20,
    },
  });
