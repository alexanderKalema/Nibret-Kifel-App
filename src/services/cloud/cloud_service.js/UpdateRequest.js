import firestore from '@react-native-firebase/firestore';

export default (confirmationForm) => (dispatch)=> {
    dispatch({
      type: 'ADD_LOADING',
    });
    try {
      firestore().collection('Requests').doc(confirmationForm.doc_id).update({
        ምርመራ: confirmationForm.ምርመራ,
        አስረካቢው_ስም: confirmationForm.አስረካቢው_ስም,
        Pending: false,
        የተመለሰበት_ቀን: confirmationForm.የተመለሰበት_ቀን,
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
