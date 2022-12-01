/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Button, FlatList, ScrollView, Text, View} from 'react-native';
import Cards from './cards';
import { set } from 'react-native-reanimated';


export function ShowCards({type,search}) {
  const [allPost, setAllPost] = useState([]);

  const getAllPost = async () => {
    var snapshot;
    


    if (type === 'Lost') {
     setAllPost([])
      snapshot = await firestore()
        .collection('Nibret')
        .where('Amount_Lost', '>', 0)
        .get();
    } else if (type === 'Needs Repair') {
      setAllPost([]);
      snapshot = await firestore()
        .collection('Nibret')
        .where('Amount_Needs_Repair', '>', 0)
        .get();
    } else if (type === 'Good Shape') {
      setAllPost([]);
      snapshot = await firestore()
        .collection('Nibret')
        .where('Amount_In_Good_Shape', '>', 0)
        .get();
    } else if (type === 'Other Amount') {
      setAllPost([]);
      snapshot = await firestore()
        .collection('Nibret')
        .where('Amount_Other', '>', 0)
        .get();
    } else if (type === 'Steel') {
      setAllPost([]);
      snapshot = await firestore()
        .collection('Nibret')
        .where('Type', '==', 'Made of steel')
        .get();
    } else if (type === 'Wood') {
      setAllPost([]);
      snapshot = await firestore()
        .collection('Nibret')
        .where('Type', '==', 'Made of wood')
        .get();
    
    } else if (type === 'Clothing') {
      setAllPost([]);
      snapshot = await firestore()
        .collection('Nibret')
        .where('Type', '==', 'Clothing')
        .get();
 
    } else if (type === 'Paper') {
      setAllPost([]);
      snapshot = await firestore()
        .collection('Nibret')
        .where('Type', '==', 'Paper')
        .get();
    
    } else if (type === 'Other Type') {
      setAllPost([]);
      snapshot = await firestore()
        .collection('Nibret')
        .where('Type', '==', 'Other')
        .get();
    } else {
     setAllPost([]);
      snapshot = await firestore().collection('Nibret').get();
    }

    snapshot.forEach((doc) => {


// if(doc.data().map( (values) =>{ values.toString().includes(search) }   ))
// {
//       console.log('I have found', doc.data());
// }   
  // doc.data().map(
  //   (values) =>{

  //     if(values.toString.contains(search)){
        
  //     }
  //   }
  // )
// doc.data().map(
//  (myvalves)=>{console.log(myvalves)}
// );
if(Object.values(doc.data()).toString().toLowerCase().includes(search.toString().toLowerCase())){

      setAllPost((prev) => prev.concat(doc.data()));
   }
   
   });


    
  };

  useEffect(() => {
    getAllPost();
  }, [type,search]);

  return (
    <FlatList  data={allPost} renderItem={ (mycards) =>{  return <Cards form={mycards.item} />;
}  }  />
      
  );
}
