/* eslint-disable prettier/prettier */
import firestore from '@react-native-firebase/firestore';
import {FlatList, Text, View} from 'react-native';
import Cards from '../../../models/cards';

export default (form) => async (dispatch) => {
  dispatch({
    type: 'ADD_LOADING',
  });
  try {
    firestore().collection('Requests').doc().set({
      ልብስ_አይነት: form.Cloth_Type,
      ተቀባይ_ስም: form.Reciever_Name,
      የወጣበት_ቀን: form.Date_Recieved,
      የተመለሰበት_ቀን: form.Date_Returned,
      ተቀባይ_ከፍል: form.Reciever_Class,
      ቀሚስ_መጠን: form.Amount_Kemis,
      ሻሸ_መጠን: form.Amount_Shash,
      ምክንያት: form.Reason,
      አክሊል_መጠን: form.Amount_Aklil,
      ከፋይ_ድግድጋት_መጠን: form.Amount_Kefay_Degdegat,
      ሞጣህት_መጠን: form.Amount_Motaht,
      አይነት: form.Type,
      አስረካቢው_ስም: form.Donor_Name,
      ምርመራ: form.Status,
      Pending: true,
    });
    dispatch({
      type: 'ADD_SUCCESSFUL',
      payload: null,
    });
  } catch {
    (error) =>
      dispatch({
        type: 'ADD_FAILED',
        payload: error.code
          ? error.code
          : {error: 'Something went wrong, try agin'},
      });
  }
};
