/* eslint-disable prettier/prettier */
import firestore from '@react-native-firebase/firestore';
import { FlatList, Text, View } from 'react-native';
import Cards from '../../../models/cards';

export default (form) =>
  async (dispatch) => {

try{
  firestore().collection('Nibret').doc(form.ፋይል_መለያ).set({
    ስም: form.ስም,
    መለያ: form.መለያ,
    የጠፋ_መጠን: form.የጠፋ_መጠን,
    ጥሩ_ሁኔታ_ላይ_ያለ_መጠን: form.ጥሩ_ሁኔታ_ላይ_ያለ_መጠን,
    ጥገና_የሚያስፈልገው_መጠን: form.ጥገና_የሚያስፈልገው_መጠን,
    አይነት: form.አይነት,
    ሌላ_መጠን: form.ሌላ_መጠን,
    ምስል_መለያ: form.ምስል_መለያ,
    የተጨመረበት_ጊዜ: firestore.FieldValue.serverTimestamp(),
  });
     dispatch({
      type: 'ADD_SUCCESSFUL',
      payload: null,
    });
  }
    catch
    {
    (error) =>
      dispatch({
        type: 'ADD_FAILED',
        payload: error.code
          ? error.code
          : {error: 'Something went wrong, try agin'},
      });
    }
  // try {
  //   await setDoc(doc(db, 'Nibret', form.id), {
  //     name: form.name,
  //     type: form.type,
  //     addedAt: firebase.firestore.FieldValue.serverTimestamp(),
  //   });

  //   const docRef = await addDoc(collection(db, 'users'), {
  //     first: 'Ada',
  //     last: 'Lovelace',
  //     born: 1815,
  //   });
  //   console.log('Document written with ID: ', docRef.id);
  // } catch (e) {
  //   console.error('Error adding document: ', e);
  // }
}


// export function addNibret(form) {
//   firebase
//     .firestore()
//     .collection('Nibret')
//     .doc(form.id)
//     .set({
//       name: form.name,
//       type: form.type,
//       addedAt: firebase.firestore.FieldValue.serverTimestamp(),
//     })
//     .then((snapshot) => snapshot.get())
//     .catch((error) => console.log(error));
// }

// export async function getFoods(foodsRetreived) {
//   var foodList = [];

//   var snapshot = await firebase
//     .firestore()
//     .collection('Foods')
//     .orderBy('createdAt')
//     .get();

//   snapshot.forEach((doc) => {
//     foodList.push(doc.data());
//   });

//   console.log(foodList);

//   foodsRetreived(foodList);



