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
      አክሊል_መጠን: form.Amount_Aklil,
      ጫማ_መጠን: form.Amount_Chama,
      ምክንያት: form.Reason,
      ነጠላ_መጠን: form.Amount_Netela,
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