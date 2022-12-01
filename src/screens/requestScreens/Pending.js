import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import RenderRequest from '../../services/cloud/cloud_service.js/RenderRequest';


export default function Pending() {



  return (
    <View style={{flex: 1, backgroundColor: '#354545'}}>
      <RenderRequest pending={true}/>
    </View>
  );
}
