
import {View, StyleSheet, Dimensions, TouchableOpacity, Alert} from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalText from '../global/global_text';
import Input from '../models/input';
import Submit from '../models/submit';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from '../models/image_picker';
import ImageComponent from '../models/image_component';
import DropMenu from '../models/drop_menu';
import { statusData, typeData } from '../constants/constant';
import AddNibret from '../services/cloud/cloud_service.js/AddNibret';
import storage from '@react-native-firebase/storage';
import ConfirmationDialog from '../utils/confirmation_dialog';
import { GlobalContext } from '../services/provider';
import Loading from '../utils/loading';
import ErrorDialog from '../utils/error_dialog';
import InformationDialog from '../utils/info_dialog';
export default function AddProperty() {

       const {
         authDispatch,
         authState: {error, loading,submitted},
       } = useContext(GlobalContext);
   const [infovisible, setinfoVisible] = useState(false);
   const [loadingvisible, setloadingVisible] = useState(false);
const [skipCount, setSkipCount] = useState(true);
  const [errorvisible, seterrorVisible] = useState(false);

useEffect(() => {
  seterrorVisible(!(error === null));
}, [error]);

useEffect(() => {
  if (skipCount) setSkipCount(false);
  if (!skipCount) {
    setloadingVisible(loading);
  }
}, [loading]);
useEffect(() => {
  if (skipCount) setSkipCount(false);
  if (!skipCount) {
    setinfoVisible(true);
  }
}, [submitted]);


  const{pop}= useNavigation();

 const [type, setType] = useState([]);
  const[status,setStatus]=useState([]);
  const[visible,setVisible]=useState(false);
  const [nibretForm, setNibretForm] = useState({
    Name: '',
    Id: '',
    Doc_Id: '',
    Amount_Lost: 0,
    Amount_Needs_Repair: 0,
    Amount_In_Good_Shape: 0,
    Amount_Other: 0,
    Type: '',
    Image_id: '',
  });


  const [localFile, setLocalFile] = useState(null);

   const onChange = ({name, value}) => {
     setNibretForm({...nibretForm, [name]: value});
   }; 
  
  const onFileSelected = (image) => {
    closeSheet();
    setLocalFile(image);
  };

  const uploadImage = () => async (dispatch) => {

     dispatch({
       type: 'ADD_LOADING',
     });
    const response = await fetch(localFile.path);
    const blob = await response.blob();
    const filename = blob._data.blobId;
    nibretForm.Image_id = filename;
    var ref = storage().ref().child(filename).put(blob);

    try {
      await ref;
    } catch (e) {
    }
  };

  const showModal =()=>{
    setVisible(true);
  }

  const onSubmit =async ()=>{
    nibretForm.Doc_Id = nibretForm.Id.replaceAll('/', '_');
   nibretForm.Type = type;

  await uploadImage()(authDispatch);

    AddNibret(nibretForm)(authDispatch);
  }

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
const SCREEN_HEIGHT = Dimensions.get('screen').height;

  return (
    <View style={Styles.bigContainer}>
      <ConfirmationDialog
        visible={visible}
        setVisible={setVisible}
        myfunction={onSubmit}
      />
      <Loading visible={loadingvisible} />
      <ErrorDialog
        content={error}
        visible={errorvisible}
        setVisible={seterrorVisible}
      />
      <InformationDialog
        visible={infovisible}
        content={'You have successfully added a new item.'}
        setVisible={setinfoVisible}
        myfuntion={() => pop()}
      />
      <View style={{flex: 1,paddingHorizontal: 25}}>
        <TouchableOpacity onPress={() => pop()}>
          <Ionicons name="chevron-back" size={40} color="#F7F7F7" />
        </TouchableOpacity>

        <GlobalText
          mylabel={' Add Property'}
          myfont={'PoppinsMedium'}
          mystyle={{fontSize: 35, marginTop: 20}}
        />
      </View>
      <View style={Styles.subContainer}>
        <GlobalText
          mylabel={'Enter property information'}
          myfont={'PoppinsMedium'}
          mystyle={{fontSize: 20, marginLeft: 20, marginBottom: 15}}
        />
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps={'never'}
          showsVerticalScrollIndicator={false}>
          <Input label="Name" data="Name" onChange={onChange} />
          <Input label="Id" data="Id" onChange={onChange} />

          <DropMenu data={typeData} label={'Type'} multiAssigner={setType} />
          <DropMenu
            data={statusData}
            label={'Status'}
            multiAssigner={setStatus}
          />
          {status !== undefined
            ? status.map((items) => (
                <Input
                  key={items}
                  label={`Enter amount of ${items}`}
                  data={`Amount${items.replace(/\s/g, '_')}`}
                  onChange={onChange}
                />
              ))
            : null}

          <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
          <ImageComponent
            label={'Image'}
            popper={openSheet}
            selectedImage={localFile}
          />
        </KeyboardAwareScrollView>
        <View>
          <TouchableOpacity onPress={showModal}>
            <Submit label="Submit" />
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
