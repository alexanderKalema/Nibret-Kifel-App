import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import RBSheet from 'react-native-raw-bottom-sheet';
import Input from './input';
import moment from 'moment';
import GlobalText from '../global/global_text';
import Submit from '../models/submit'
import UpdateRequest  from '../services/cloud/cloud_service.js/UpdateRequest';
import { GlobalContext } from '../services/provider';
import ErrorDialog from '../utils/error_dialog';
import Loading from '../utils/loading';
import InformationDialog from '../utils/info_dialog';
import { useNavigation } from '@react-navigation/native';

export default Connector = React.forwardRef(({id},ref) => {

    const {pop} = useNavigation();

 const {
   authDispatch,
   authState: {error, loading, submitted},
 } = useContext(GlobalContext);
   const isMounted = useRef(false);

  const [errorvisible, seterrorVisible] = useState(false);
    const [currentDate, setCurrentDate] = useState('');
      const [loadingvisible, setloadingVisible] = useState(false);

    const [infovisible, setinfoVisible] = useState(submitted);
 useEffect(() => {
   if (isMounted.current) {
    
     setinfoVisible(submitted);
   } else {
    isMounted.current = true;
    
   }
 }, [submitted]);

    useEffect(() => {
      date = moment().utcOffset('+03:00').format('YYYY-MM-DD hh:mm a');
      setCurrentDate(date);
    }, []);
 
 const [confirmationForm, setConfirmationForm] = useState({
   ምርመራ: '',
   አስረካቢው_ስም: '',
   የተመለሰበት_ቀን: '',
   doc_id:''
 });

 const onChange = ({name, value}) => {
   setConfirmationForm({...confirmationForm, [name]: value});
 };
 const onSubmit = ()=>{
  confirmationForm.የተመለሰበት_ቀን =currentDate;
   confirmationForm.doc_id =id;
    UpdateRequest(confirmationForm)(authDispatch);
 }



  return (
    <RBSheet
      ref={ref}
      openDuration={250}
      dragFromTopOnly
      closeOnDragDown
      customStyles={{
        container: {
          height: 'auto',
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
        },
      }}>
      <View style={mystyles.optionsWrapper}>
        <Loading visible={loadingvisible} />
        <ErrorDialog
          content={error}
          visible={errorvisible}
          setVisible={seterrorVisible}
        />
        <InformationDialog
          visible={infovisible}
          content={'ንብረቱ በትክክል ተመልሷል'}
          setVisible={setinfoVisible}
          myfuntion={() => {
            pop();
            authDispatch({
              type: 'CLEAR_STATE',
            });
          }}
        />

        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}></View>
          <GlobalText
            mylabel={`የተመለሰበት ቀን : ${currentDate}`}
            myfont={'PoppinsMedium'}
            mystyle={{fontSize: 15, marginBottom: 15}}
          />
        </View>
        <Input label="የአስረካቢው ስም" data="አስረካቢው_ስም" onChange={onChange} />
        <Input label="ምርመራ" data="ምርመራ" onChange={onChange} />
        <TouchableOpacity onPress={onSubmit}>
          <Submit label={'ያረጋግጡ'} />
        </TouchableOpacity>
      </View>
    </RBSheet>
  );
});

const mystyles = StyleSheet.create({
  pickerOption: {
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center',
  },

  optionsWrapper: {
    paddingHorizontal: 30,
  },

  text: {
    fontSize: 17,
    paddingLeft: 17,
  },
});