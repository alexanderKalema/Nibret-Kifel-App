import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Dealt from './requestScreens/Dealt';
import Pending from './requestScreens/Pending';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GlobalText from '../global/global_text';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Tab = createMaterialTopTabNavigator();
export default function ViewTabStack() {

    const {pop} = useNavigation();

  return (
    <View style={Styles.bigContainer}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          paddingHorizontal: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => pop()}>
          <Ionicons name="chevron-back" size={50} color="#F7F7F7" />
        </TouchableOpacity>
        <GlobalText
          mylabel={'View Request'}
          myfont={'PoppinsMedium'}
          mystyle={{fontSize: 40, color: 'white', marginRight:20}}
        />
        <View></View>
      </View>

      <Tab.Navigator
        initialRouteName="Pending"
        screenOptions={{
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {
            backgroundColor: '#354545',
            marginTop: 10,
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
          },
          tabBarLabelStyle: {
            fontFamily: 'Tailwind SC Regular',
            marginTop: 10,
            fontSize: 15,
          },
          tabBarIndicatorStyle: {
            borderBottomColor: '#87B56A',
            borderBottomWidth: 2,
          },
        }}>
        <Tab.Screen
          name="Pending"
          component={Pending}
          options={{
            // tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="pending" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Dealt With"
          component={Dealt}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="check-circle" color={color} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
const Styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    backgroundColor: '#EF9F64',

    paddingTop: 20,
  },
  subContainer: {
    flex: 4,
    backgroundColor: 'white',
    paddingTop: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 25,
  },
});
