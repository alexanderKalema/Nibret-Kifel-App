/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import {View, Text, StyleSheet, ScrollView, Dimensions, Modal, Button, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalText from '../global/global_text';
import Input from '../models/input';
import Submit from '../models/submit';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Filter from '../models/filter';
import GenericDialog from '../models/generic_dialog';
import ErrorDialog from '../utils/error_dialog';
import Cards from '../models/cards';
import { ShowCards } from '../models/showcards';
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../services/provider';
import LoginDialog from '../utils/login_dialog';


export default function ViewProperty() {




  const{pop}=useNavigation();
  const [search, setSearch] = useState({mysearch:''});
   const [choosenFilter, setchoosenFilter] = useState('All');
   const [searchSubmitter, setSearchSubmitter] = useState({mysearch: ''});

 const onChange = ({name, value}) => {
   setSearch({...search, [name]: value});
 }; 



  return (
    <View style={Styles.bigContainer}>
      
      <View
        style={{
          flex: 1,
          paddingHorizontal: 25,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => pop()}>
          <Ionicons name="chevron-back" size={40} color="#F7F7F7" />
        </TouchableOpacity>

        <GlobalText
          mylabel={'View Property'}
          myfont={'PoppinsMedium'}
          mystyle={{fontSize: 35, marginLeft: 20}}
        />
      </View>
      <View style={Styles.subContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Input label="Search" data="mysearch" onChange={onChange} />
          </View>
          <TouchableOpacity onPress={() => setSearchSubmitter(search)}>
            <View
              style={{
                marginHorizontal: 5,
                marginTop: 15,
                backgroundColor: '#354545',
                padding: 15,
                borderRadius: 10,
              }}>
              <GlobalText
                mylabel={'Search'}
                myfont={'Tailwind SC Regular'}
                mystyle={{fontSize: 18, color: 'white'}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <GlobalText
          mylabel={'Filter By:'}
          myfont={'Tailwind SC Regular'}
          mystyle={{fontSize: 14, marginTop: 5}}
        />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{flex: 1}}>
          <Filter
            label={'All'}
            filter={choosenFilter}
            controller={setchoosenFilter}
          />
          <Filter
            label={'Wood'}
            filter={choosenFilter}
            controller={setchoosenFilter}
          />
          <Filter
            label={'Steel'}
            filter={choosenFilter}
            controller={setchoosenFilter}
          />
          <Filter
            label={'Clothing'}
            filter={choosenFilter}
            controller={setchoosenFilter}
          />
          <Filter
            label={'Paper'}
            filter={choosenFilter}
            controller={setchoosenFilter}
          />
          <Filter
            label={'Other Type'}
            filter={choosenFilter}
            controller={setchoosenFilter}
          />
          <Filter
            label={'Lost'}
            filter={choosenFilter}
            controller={setchoosenFilter}
          />
          <Filter
            label={'Needs Repair'}
            filter={choosenFilter}
            controller={setchoosenFilter}
          />
          <Filter
            label={'Good Shape'}
            filter={choosenFilter}
            controller={setchoosenFilter}
          />
          <Filter
            label={'Other Amount'}
            filter={choosenFilter}
            controller={setchoosenFilter}
          />
        </ScrollView>

        <View style={{flex: 10}}>
          <ShowCards
          
            type={`${choosenFilter}`}
            search={searchSubmitter.mysearch}
          />
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    backgroundColor: '#354545',

    paddingTop: 20,
  },
  subContainer: {
    flex: 10,
    backgroundColor: '#E7EEEE',
    paddingTop: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 25,
  },
});
