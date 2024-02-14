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
import ConfirmationDialog from '../../utils/confirmation_dialog';
import {GlobalContext} from '../../services/provider';
import Loading from '../../utils/loading';
import ErrorDialog from '../../utils/error_dialog';
import InformationDialog from '../../utils/info_dialog';
import moment from 'moment/moment';
import AddTendDerbRequest from '../../services/cloud/cloud_service.js/AddTendDerbRequest';
export default function SecondType() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    date = moment().utcOffset('+03:00').format('YYYY-MM-DD hh:mm a');
    setCurrentDate(date);
  }, []);
  const {
    authDispatch,
    authState: {error, loading, submitted},
  } = useContext(GlobalContext);
  const [infovisible, setinfoVisible] = useState(submitted);
  const [loadingvisible, setloadingVisible] = useState(loading);
  const isMount = useRef(false);
  const [errorvisible, seterrorVisible] = useState(false);

  useEffect(() => {
    seterrorVisible(!(error === null));
  }, [error]);

  useEffect(() => {
    //  if (isMounted.current) {
    //  setloadingVisible(loading);
    //  } else {
    //    isMounted.current = true;
    //  }
    // if (skipCount) setSkipCount(false);
    // if (!skipCount) {
    //   setloadingVisible(loading);
    // }
  }, [loading]);
  useEffect(() => {
   if (isMount.current) {

     setinfoVisible(submitted);
   } else {

     isMount.current = true;
   }
  }, [submitted]);

  const {pop} = useNavigation();

  const [visible, setVisible] = useState(false);
  const [tendDerbForm, setTendDerbForm] = useState({
    Cloth_Type: 'ጥንድ ድርብ ልብሰ ስብሃት',
    Reason: '',
    Reciever_Name: '',
    Date_Recieved: '',
    Date_Returned: '',
    Reciever_Class: '',
    Amount_Kemis: 0,
    Amount_Shash: 0,
    Amount_Aklil: 0,
    Amount_Chama: 0,
    Amount_Netela: 0,
    Donor_Name: '',
    Status: '',
  });

  const onChange = ({name, value}) => {
    setTendDerbForm({...tendDerbForm, [name]: value});
  };


  // const showConfirmation = () => {
  //   setVisible(true);
  // };

  const showModal = () => {
    setVisible(true);
  };

  const onSubmit = async () => {
tendDerbForm.Date_Recieved = currentDate;
    AddTendDerbRequest(tendDerbForm)(authDispatch);
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
        content={'አዲስ ጥያቄ በትክክል ጨምረዋል'}
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
          mylabel={'     ጥንድ ድርብ ልብሰ ስብሃት \n              መዋሻ ቅጽ'}
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
          <Input label="ምክንያት" data="Reason" onChange={onChange} />
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
              <Input label="ነጠላ" data="Amount_Netela" onChange={onChange} />
            </View>
            <View style={{flex: 1}}>
              <Input label="ጫማ" data="Amount_Chama" onChange={onChange} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <View style={{marginRight: 10, flex: 1}}>
              <Input label="ሻሽ" data="Amount_Shash" onChange={onChange} />
            </View>
            <View style={{flex: 1}}></View>
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
            <Submit label="ያመልክቱ" />
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
