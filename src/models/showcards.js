/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {FlatList} from 'react-native';
import Cards from './cards';


export function ShowCards({type,search}) {
  const [allPost, setAllPost] = useState([]);

  const getAllPost = async () => {
    var snapshot;
    


    if (type === 'የጠፋ') {
      setAllPost([]);
      snapshot = await firestore()
        .collection('Nibret')
        .where('የጠፋ_መጠን', '>', 0)
        .get();
    } else if (type === 'ጥገና የሚያስፈልገው') {
      setAllPost([]);
      snapshot = await firestore()
        .collection('Nibret')
        .where('ጥገና_የሚያስፈልገው_መጠን', '>', 0)
        .get();
    } else if (type === 'ጥሩ ሁኔታ ላይ ያለ') {
      setAllPost([]);
      snapshot = await firestore()
        .collection('Nibret')
        .where('ጥሩ_ሁኔታ_ላይ_ያለ_መጠን', '>', 0)
        .get();
    } else if (type === 'ሌላ ሁኔታ ላይ ያለ') {
      setAllPost([]);
      snapshot = await firestore()
        .collection('Nibret')
        .where('ሌላ_መጠን', '>', 0)
        .get();
    } else if (type === 'የብረት') {
      setAllPost([]);
      snapshot = await firestore()
        .collection('Nibret')
        .where('አይነት', '==', 'የብረት እቃ')
        .get();
    } else if (type === 'የእንጨት') {
      setAllPost([]);
      snapshot = await firestore()
        .collection('Nibret')
        .where('አይነት', '==', 'የእንጨት እቃ')
        .get();
    } else if (type === 'አልባሳት') {
      setAllPost([]);
      snapshot = await firestore()
        .collection('Nibret')
        .where('አይነት', '==', 'አልባሳት')
        .get();
    } else if (type === 'ወረቀት') {
      setAllPost([]);
      snapshot = await firestore()
        .collection('Nibret')
        .where('አይነት', '==', 'ወረቀት')
        .get();
    } else if (type === 'ሌላ አይነት') {
      setAllPost([]);
      snapshot = await firestore()
        .collection('Nibret')
        .where('አይነት', '==', 'ሌላ')
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
