/* eslint-disable prettier/prettier */
import {MultipleSelectList, SelectList} from 'react-native-dropdown-select-list';
import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalText from '../global/global_text';
import { Button } from 'react-native-paper';
import Input from './input';


export default function DropMenu({data,label,multiAssigner,existing}) {

  const [selected, setSelected] = useState([]);

  const labelStyle = {
    position: 'absolute',
    left: 20,
    top: 0,
    fontSize: 14,
    color:'#555',
  };
  
  return (
    <View style={{marginBottom: 10, marginTop: 5}}>
      <GlobalText
        mylabel={label}
        myfont={'Tailwind SC Regular'}
        mystyle={labelStyle}
      />

      <View>
        {label === 'Type' || label === 'የከፋይ ድግድጋቱ አይነት'||label==='የልብሰ ስብሃቱ አይነት' ? (
          <SelectList
            defaultOption={existing + 1 ? data[existing] : null}
            setSelected={multiAssigner}
            fontFamily="Tailwind SC Regular"
            data={data}
            save="value"
            inputStyles={Styles.text}
            dropdownTextStyles={Styles.text}
            boxStyles={Styles.box}
          />
        ) : (
          <MultipleSelectList
            setSelected={multiAssigner}
            fontFamily="Tailwind SC Regular"
            data={data}
            save="value"
            inputStyles={Styles.text}
            dropdownTextStyles={Styles.text}
            boxStyles={Styles.box}
          />
        )}
        {/* {selected !== undefined
          ? selected.map((items) =><Input></Input>)
          : null} */}
      </View>
    </View>
  );
  }
  const Styles = StyleSheet.create({
    box: {
      backgroundColor: '#f5f5f5',
      height: 70,
      borderRadius: 30,
      marginTop: 25,
      fontSize: 25,
      borderWidth: 1,
      borderColor: '#8P1737',
      borderRadius: 30,
      alignItems: 'center',
    },
    text:{
    fontSize:16
    }
  });
  
