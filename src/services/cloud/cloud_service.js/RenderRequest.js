import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import RequestCard from '../../../models/RequestCard';

export default function RenderRequest({pending}) {
  const [allPost, setAllPost] = useState([]);

 const getAllPost = async () => {
  setAllPost([]);
   

  
     var snapshot = await firestore().collection('Requests').get();
   

   snapshot.forEach(
    (doc) => {
     

    if(doc.data()['Pending'] === pending){
    setAllPost((prev) => prev.concat({data:doc.data(), id: doc.id}));
    }
    //  if (
    //    Object.values(doc.data())
    //      .toString()
    //      .toLowerCase()
    //      .includes(search.toString().toLowerCase())
    //  ) {
    //    setAllPost((prev) => prev.concat(doc.data()));
    //  }
   });
 };

 useEffect(() => {
   getAllPost();
 }, []);

  return (
    <FlatList
    keyExtractor ={ () => {
    return new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();
    }
  }
    data={allPost} renderItem={ (form) =>{  
      return <RequestCard form={form.item} filter={pending}/> }} />
  
  )
}