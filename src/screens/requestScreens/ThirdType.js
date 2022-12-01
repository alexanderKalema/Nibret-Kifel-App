import {
  View,
  StyleSheet,
  TouchableOpacity,

} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalText from '../../global/global_text';
import Input from '../../models/input';
import Submit from '../../models/submit';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import DropMenu from '../../models/drop_menu';
import {BaleKabaType} from '../../constants/constant';
import ConfirmationDialog from '../../utils/confirmation_dialog';
import {GlobalContext} from '../../services/provider';
import Loading from '../../utils/loading';
import ErrorDialog from '../../utils/error_dialog';
import InformationDialog from '../../utils/info_dialog';
import moment from 'moment/moment';
import AddLibseSebhatRequest from '../../services/cloud/cloud_service.js/AddLibseSebhatRequest';
export default function ThirdType() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    date = moment().utcOffset('+03:00').format('YYYY-MM-DD hh:mm a');
    setCurrentDate(date);
  }, []);
  const {
    authDispatch,
    authState: {error, loading, submitted},
  } = useContext(GlobalContext);
  const [infovisible, setinfoVisible] = useState(false);
  const [loadingvisible, setloadingVisible] = useState(false);
  const isMounted = useRef(false);
   const [anotherskipCount, setAnotherSkipCount] = useState(true);
  const [errorvisible, seterrorVisible] = useState(false);

  useEffect(() => {
    seterrorVisible(!(error === null));
  }, [error]);

  useEffect(() => {
    // if (anotherskipCount) {
    //   setAnotherSkipCount(false);
    //   console.log('yekeldala', loading);
    // } else {
    //   console.log('am suppose to come here', loading);
    //   setloadingVisible(loading);
    // }
  }, [loading]);
  useEffect(() => {
 if (isMounted.current) {
    setinfoVisible(submitted);
 } else {
   isMounted.current = true;
 }

  }, [submitted]);

  const {pop} = useNavigation();
 const [type, setType] = useState([]);

  const [visible, setVisible] = useState(false);
  const [baleKabaForm, setBaleKabaForm] = useState({
    Cloth_Type: 'ባለካባ ልብሰ ስብሃት',
    Reciever_Name: '',
    Date_Recieved: '',
    Date_Returned: '',
    Reciever_Class: '',
    Amount_Kemis: 0,
    Amount_Aklil: 0,
    Amount_Kaba: 0,
    Donor_Name: '',
    Status: '',
  });

  const onChange = ({name, value}) => {
    setBaleKabaForm({...baleKabaForm, [name]: value});
  };

  const showModal = () => {
    setVisible(true);
  };

  const onSubmit = async () => {
    baleKabaForm.Type = type;
  baleKabaForm.Date_Recieved= currentDate;

    AddLibseSebhatRequest(baleKabaForm)(authDispatch);
  };

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
        myfuntion={() => {
          pop();
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
          mylabel={'   ባለካባ ልብሰ ስብሃት መዋሻ \n                    ቅጽ'}
          myfont={'PoppinsMedium'}
          mystyle={{fontSize: 30, marginTop: 20, color: 'white'}}
        />
      </View>
      <View style={Styles.subContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}></View>
          <GlobalText
            mylabel={`የወጣበት ቀን : ${currentDate}`}
            myfont={'PoppinsMedium'}
            mystyle={{fontSize: 15, marginBottom: 15}}
          />
        </View>

        <KeyboardAwareScrollView
          keyboardShouldPersistTaps={'never'}
          showsVerticalScrollIndicator={false}>
          <DropMenu
            data={BaleKabaType}
            label={'የልብሰ ስብሃቱ አይነት'}
            multiAssigner={setType}
          />
          <GlobalText
            mylabel={'ብዛት ያስገቡ :'}
            myfont={'Tailwind SC Regular'}
            mystyle={{fontSize: 14, marginVertical: 5}}
          />

          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <View style={{marginRight: 10, flex: 1}}>
              <Input label="ቀሚስ" data="Amount_Kemis" onChange={onChange} />
            </View>
            <View style={{flex: 1}}>
              <Input label="አክሊል" data="Amount_Aklil" onChange={onChange} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <View style={{marginRight: 10, flex: 1}}>
              <Input label="ካባ" data="Amount_Kaba" onChange={onChange} />
            </View>
            <View style={{marginRight: 10, flex: 1}}></View>
          </View>
          <Input label="ተረካቢው ክፍል" data="Reciever_Class" onChange={onChange} />
          <Input
            label="የተረካቢው አባል ሙሉ ስም"
            data="Reciever_Name"
            onChange={onChange}
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
