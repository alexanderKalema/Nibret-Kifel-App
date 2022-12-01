/* eslint-disable prettier/prettier */
import firestore from '@react-native-firebase/firestore';
import { FlatList, Text, View } from 'react-native';
import Cards from '../../../models/cards';

export default (form) =>
  async (dispatch) => {

try{
  firestore()
    .collection('Nibret')
    .doc(form.Doc_Id)
    .set({
      Name: form.Name,
      Id: form.Id,
      Type: form.Type,
      Amount_Lost: form.Amount_Lost,
      Amount_In_Good_Shape: form.Amount_In_Good_Shape,
      Amount_Needs_Repair: form.Amount_Needs_Repair,
      Amount_Other: form.Amount_Other,
      Image_id: form.Image_id,
      addedAt: firestore.FieldValue.serverTimestamp(),
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



