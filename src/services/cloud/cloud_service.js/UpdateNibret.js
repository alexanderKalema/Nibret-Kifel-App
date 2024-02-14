import firestore from '@react-native-firebase/firestore';

export function UpdateNibret(form) {
  firestore()
    .collection('Nibret')
    .doc(form.ፋይል_መለያ)
    .update({
      ስም: form.ስም,
      መለያ: form.መለያ,
      የጠፋ_መጠን: form.የጠፋ_መጠን,
      ጥሩ_ሁኔታ_ላይ_ያለ_መጠን: form.ጥሩ_ሁኔታ_ላይ_ያለ_መጠን,
      ጥገና_የሚያስፈልገው_መጠን: form.ጥገና_የሚያስፈልገው_መጠን,
      አይነት: form.አይነት,
      ሌላ_መጠን: form.ሌላ_መጠን,
      ምስል_መለያ: form.ምስል_መለያ,
      የተጨመረበት_ጊዜ: firestore.FieldValue.serverTimestamp(),
    })
    .catch((error) => console.log(error));
}
