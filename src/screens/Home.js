/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, Dimensions, TouchableOpacity, ScrollViewBase } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import Tabs from '../models/tabs';
import GlobalText from '../global/global_text';
import { GlobalContext } from '../services/provider';
import LoginDialog from '../utils/login_dialog';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function Home({navigation}) {

const [skipCount, setSkipCount] = useState(true);
const {
  authDispatch,
  authState: {isLoggedIn, loading},
} = useContext(GlobalContext);

const[visible,setVisible]= useState(false);

 useEffect(() => {
   if (skipCount) {setSkipCount(false);
}
   if (!skipCount){setVisible(isLoggedIn); }
 }, [isLoggedIn]);

  const SCREEN_HEIGHT = Dimensions.get('screen').height;
  return (
    <View style={[Styles.container, {height: SCREEN_HEIGHT}]}>
      <LoginDialog visible={visible} setVisible={setVisible} />

      <TouchableOpacity onPress={() => navigation.navigate('Rules')}>
        <View
          style={[
            Styles.notifier,
            {justifyContent: 'space-between', height: 'auto'},
          ]}>
          <GlobalText
            mylabel={'የንብረት አያያዝ የወስጥ ደንብ'}
            myfont={'PoppinsMedium'}
            mystyle={{fontSize: 28, marginVertical: 10}}
          />
          <GlobalText
            mylabel={'•	የንብረት መዋስን በተመለከተ'}
            myfont={'PoppinsMedium'}
            mystyle={{fontSize: 18, marginVertical: 10, marginLeft: 20}}
          />
          <GlobalText
            mylabel={'•	የጠፉ/ የተበላሹ ንብረቶችን በተመለከተ'}
            myfont={'PoppinsMedium'}
            mystyle={{fontSize: 18, marginVertical: 10, marginLeft: 20}}
          />
          <GlobalText
            mylabel={'• ለሁሉም አባላት'}
            myfont={'PoppinsMedium'}
            mystyle={{fontSize: 18, marginVertical: 10, marginLeft: 20}}
          />
          <GlobalText
            mylabel={'•	ለንብረት ክፍል አባላት'}
            myfont={'PoppinsMedium'}
            mystyle={{fontSize: 18, marginVertical: 10, marginLeft: 20}}
          />
          <GlobalText
            mylabel={'•	ወንበሮችን በተመለከተ'}
            myfont={'PoppinsMedium'}
            mystyle={{fontSize: 18, marginVertical: 10, marginLeft: 20}}
          />
        </View>
      </TouchableOpacity>
      <ScrollView style={{height: 'auto'}}>
        <Tabs
          iconName={'folder-add'}
          title={'Add a property'}
          onclick={
            !isLoggedIn
              ? () => {
                  setVisible(true);
                }
              : () => {
                  navigation.navigate('AddProperty');
                }
          }
        />
        <Tabs
          iconName={'eye'}
          title={'View a property'}
          onclick={() => {
            navigation.navigate('ViewProperty');
          }}
        />
        <Tabs iconName={'page-edit'} title={'Make a request'} />
        <View style={{marginBottom: 30}}>
          <Tabs
            iconName={'monitor'}
            title={'View requests'}
            onclick={
              !isLoggedIn
                ? () => {
                    setVisible(true);
                  }
                : () => {
                    navigation.navigate('ViewRequest');
                  }
            }
          />
        </View>
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#354545',
    paddingHorizontal: 25,
    paddingVertical: 20,
    
  },
  notifier: {
    height: '35%',
    backgroundColor: 'white',
    borderRadius: 60,
    paddingHorizontal: 25,
    paddingVertical: 35,
  },
});