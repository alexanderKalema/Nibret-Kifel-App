import { View, Text } from 'react-native'
import React from 'react'
import RequestCard from '../../models/RequestCard';
import RenderRequest from '../../services/cloud/cloud_service.js/RenderRequest';

export default function Dealt() {
 return (
   <View style={{flex: 1, backgroundColor: '#354545'}}>
     <RenderRequest  pending={false} />
   </View>
 );
}