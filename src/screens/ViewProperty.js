/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalText from '../global/global_text';
import Input from '../models/input';
import Filter from '../models/filter';

import { ShowCards } from '../models/showcards';
import { useNavigation } from '@react-navigation/native';

export default function ViewProperty() {




  const{pop}=useNavigation();
  const [search, setSearch] = useState({mysearch:''});
   const [choosenFilter, setchoosenFilter] = useState('ሁሉም');
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
          mylabel={'ያሉ ንብረቶች ይመልከቱ'}
          myfont={'PoppinsMedium'}
          mystyle={{fontSize: 35, marginLeft: 20, color: '#F7F7F7'}}
        />
      </View>
      <View style={Styles.subContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Input label="ይፈልጉ" data="mysearch" onChange={onChange} />
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
                mylabel={'ይፈልጉ'}
                myfont={'Tailwind SC Regular'}
                mystyle={{fontSize: 18, color: 'white'}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <GlobalText
          mylabel={'መለያ የመረጡ:'}
          myfont={'Tailwind SC Regular'}
          mystyle={{fontSize: 14, marginTop: 5}}
        />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{flex: 1}}>
          <Filter
            label={'ሁሉም'}
            filter={choosenFilter}
            controller={setchoosenFilter}
          />
          <Filter
            label={'የእንጨት'}
            filter={choosenFilter}
            controller={setchoosenFilter}
          />
          <Filter
            label={'የብረት'}
            filter={choosenFilter}
            controller={setchoosenFilter}
          />
          <Filter
            label={'አልባሳት'}
            filter={choosenFilter}
            controller={setchoosenFilter}
          />
          <Filter
            label={'ወረቀት'}
            filter={choosenFilter}
            controller={setchoosenFilter}
          />
          <Filter
            label={'ሌላ አይነት'}
            filter={choosenFilter}
            controller={setchoosenFilter}
          />
          <Filter
            label={'የጠፋ'}
            filter={choosenFilter}
            controller={setchoosenFilter}
          />
          <Filter
            label={'ጥገና የሚያስፈልገው'}
            filter={choosenFilter}
            controller={setchoosenFilter}
          />
          <Filter
            label={'ጥሩ ሁኔታ ላይ ያለ'}
            filter={choosenFilter}
            controller={setchoosenFilter}
          />
          <Filter
            label={'ሌላ ሁኔታ ላይ ያለ'}
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
