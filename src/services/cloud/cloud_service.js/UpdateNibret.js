import firestore from '@react-native-firebase/firestore';

export function UpdateNibret(form) {
  firestore()
    .collection('Nibret')
    .doc(form.Doc_Id)
    .update({
      Name: form.Name,
      Id: form.Id,
      Type: form.Type,
      Amount_Lost: form.Amount_Lost,
      Amount_In_Good_Shape: form.Amount_In_Good_Shape,
      Amount_Needs_Repair: form.Amount_Needs_Repair,
      Amount_Other: form.Amount_Other,
      Image_id: form.Image_id,
      addedAt: firestore.FieldValue.serverTimestamp(),
    })
    .catch((error) => console.log(error));
}
