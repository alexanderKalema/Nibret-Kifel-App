/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalText from '../global/global_text';
import Input from '../models/input';
import Submit from '../models/submit';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from '../models/image_picker';
import ImageComponent from '../models/image_component';
import DropMenu from '../models/drop_menu';
import { typeData} from '../constants/constant';
import storage from '@react-native-firebase/storage';
import ConfirmationDialog from '../utils/confirmation_dialog';
import { UpdateNibret } from '../services/cloud/cloud_service.js/UpdateNibret';
import { GlobalContext } from '../services/provider';
import Loading from '../utils/loading';
import ErrorDialog from '../utils/error_dialog';
import InformationDialog from '../utils/info_dialog';
export default function EditProperty({route}) {


   const {
     authDispatch,
     authState: {error, loading, submitted},
   } = useContext(GlobalContext);
   const [infovisible, setinfoVisible] = useState(false);
   const [loadingvisible, setloadingVisible] = useState(false);
   const [skipCount, setSkipCount] = useState(true);
   const [errorvisible, seterrorVisible] = useState(false);
     const isMounted = useRef(false);


   useEffect(() => {
     seterrorVisible(!(error === null));
   }, [error]);

   useEffect(() => {
     if (skipCount) {setSkipCount(false);}
     else if (!skipCount) {
       setloadingVisible(true);
     }
   }, [loading]);
    useEffect(() => {
      if (isMounted.current) {
        setinfoVisible(submitted);
      } else {
        isMounted.current = true;
      }
    }, [submitted]);







  const {pop} = useNavigation();

  const[index,setIndex]=useState(0);
  const [type, setType] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [nibretForm, setNibretForm] = useState(route.params);
  const [localFile, setLocalFile] = useState(null);
  const [visible, setVisible] = useState(false);





  const onChange = ({name, value}) => {
    setNibretForm({...nibretForm, [name]: value});
  };
  
  const renderImage = async () => {

    const url = await storage().ref(`${nibretForm.ምስል_መለያ}`).getDownloadURL();
    setImageUrl(url);
  };

  const onFileSelected = (image) => {
    closeSheet();
    setLocalFile(image);
  };

  const uploadImage = async () => {
    const response = await fetch(localFile.path);
    const blob = await response.blob();
    const filename = blob._data.blobId;
    nibretForm.ምስል_መለያ = filename;
    var ref = storage().ref().child(filename).put(blob);

    try {
      await ref;
    } catch (e) {
    }

  };
   const showModal = () => {
     setVisible(true);
   };

  const onUpdate = async (dispatch) => {
     dispatch({
       type: 'ADD_LOADING',
       payload: null,
     });

    nibretForm.አይነት = type

    if(localFile){
   await uploadImage();
    }
    UpdateNibret(nibretForm);
      dispatch({
        type: 'ADD_SUCCESSFUL',
        payload: null,
      });

  };

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  const sheetRef = useRef(null);
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };
 useEffect(
() => {
    renderImage()
        .then()
        .catch(error => {
        });
      
        let myindex = typeData.findIndex(
          (age) => age.value === nibretForm.አይነት,
        );
         setIndex(myindex);
        //setType(nibretForm.Type)      
      }
  
  
  ,[]
 )

  return (
    <View style={Styles.bigContainer}>
      <ConfirmationDialog
        visible={visible}
        setVisible={setVisible}
        myfunction={() => onUpdate(authDispatch)}
      />
      <Loading visible={loadingvisible} />
      <ErrorDialog
        content={error}
        visible={errorvisible}
        setVisible={seterrorVisible}
      />
      <InformationDialog
        visible={infovisible}
        content={'አዲስ ንብረት በትክክል ተቀይረዋል'}
        setVisible={setinfoVisible}
        myfuntion={() => {pop();
          authDispatch({
            type: 'CLEAR_STATE',
          });
        }}
      />

      <View style={{flex: 1, paddingHorizontal: 25}}>
        <TouchableOpacity onPress={() => pop()}>
          <Ionicons name="chevron-back" size={40} color="#F7F7F7" />
        </TouchableOpacity>

        <GlobalText
          mylabel={'    ንብረት ማስተካከያ ቅጽ'}
          myfont={'PoppinsMedium'}
          mystyle={{fontSize: 35, marginTop: 20, color: '#F7F7F7'}}
        />
      </View>
      <View style={Styles.subContainer}>
        <GlobalText
          mylabel={'የተስተካከለውን መረጃ ያስገቡ'}
          myfont={'PoppinsMedium'}
          mystyle={{fontSize: 20, marginLeft: 20, marginBottom: 15}}
        />
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps={'never'}
          showsVerticalScrollIndicator={false}>
          <Input
            label="ስም"
            data="ስም"
            onChange={onChange}
            populator={nibretForm}
          />
          <Input
            label="መለያ"
            data="መለያ"
            onChange={onChange}
            populator={nibretForm}
          />
          <DropMenu
            data={typeData}
            label={'አይነት'}
            multiAssigner={setType}
            existing={index}
          />
          <Input
            label="የጠፋ መጠን"
            data="የጠፋ_መጠን"
            onChange={onChange}
            populator={nibretForm}
          />
          <Input
            label="ጥሩ ሁኔታ ላይ ያለ መጠን"
            data="ጥሩ_ሁኔታ_ላይ_ያለ_መጠን"
            onChange={onChange}
            populator={nibretForm}
          />
          <Input
            label="ጥገና የሚያስፈልገው መጠን"
            data="ጥገና_የሚያስፈልገው_መጠን"
            onChange={onChange}
            populator={nibretForm}
          />
          <Input
            label="ሌላ መጠን"
            data="ሌላ_መጠን"
            onChange={onChange}
            populator={nibretForm}
          />

          <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
          <ImageComponent
            label={'Image'}
            popper={openSheet}
            selectedImage={localFile}
            existing={imageUrl}
          />
        </KeyboardAwareScrollView>
        <View>
          <TouchableOpacity onPress={showModal}>
            <Submit label="ያስተካከሉ" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    backgroundColor: '#354545',

    paddingTop: 20,
  },
  subContainer: {
    flex: 4,
    backgroundColor: 'white',
    paddingTop: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 25,
  },
});
