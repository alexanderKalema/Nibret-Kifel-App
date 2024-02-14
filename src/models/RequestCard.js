import { View,  StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import GlobalText from '../global/global_text';
import Connector from './connector';

export default function RequestCard({form , filter}) {


   const[date,setDate]= useState([]);
   const [nameKefel, setNameKefel] = useState([]);

      const [amount, setAmount] = useState([]);

         const [clothType, setClothType] = useState([]);
            const [others, setOthers] = useState([]);
             const sheetRef = useRef(null);
 const closeSheet = () => {
   if (sheetRef.current) {
     sheetRef.current.close();
   }
 };

 const openSheet = () => {
   if (sheetRef.current) {
     sheetRef.current.open();
   }
 };

    

         const assigner = ()=>{

          setDate([]); setAmount([]); setClothType([]);setNameKefel([]); setOthers(([]));

          
                {Object.keys(form['data']).map((value) =>
                 {
            
                  if(value.includes('መጠን')){
                    setAmount((currentAmount) => [
                      ...currentAmount,
                      {[value.replaceAll('_', ' ')]: form['data'][value]},
                    ]);
                   
                  }
                   else if (value.includes('ቀን') && form['data'][value] != '') {
                     setDate((currentDate) => [
                       ...currentDate,
                       {[value.replaceAll('_', ' ')]: form['data'][value]},
                     ]);
                   } else if (
                     (value.includes('ስም') || value.includes('ከፍል')) &&
                     form['data'][value] != ''
                   ) {
                     setNameKefel((currentNameKefel) => [
                       ...currentNameKefel,
                       {[value.replaceAll('_', ' ')]: form['data'][value]},
                     ]);
                   } else if (value.includes('አይነት') || value.includes('ምክንያት')) {
                     setClothType((currentClothType) => [
                       ...currentClothType,
                       {[value.replaceAll('_', ' ')]: form['data'][value]},
                     ]);
                   } else if (
                     form['data'][value] != '' &&
                     !value.includes('Pending')
                   ) {
                     setOthers((currentOther) => [
                       ...currentOther,
                       {[value.replaceAll('_', ' ')]: form['data'][value]},
                     ]);
                   }
          
                }
                
                )
                
         }
        }
     useEffect(()=>assigner(), []);

  return (
    <View style={[TabStyle.containers]}>
      <View
        style={{
          flex: 1,
          marginHorizontal: 10,
          alignItems: 'flex-end',
        }}>
        {/* <FlatList
          keyExtractor={() => {
            return (
              new Date().getTime().toString() +
              Math.floor(
                Math.random() * Math.floor(new Date().getTime()),
              ).toString()
            );
          }}
          data={date}
          renderItem={(form) => {
            return (
              <FlatList
                keyExtractor={() => {
                  return (
                    new Date().getTime().toString() +
                    Math.floor(
                      Math.random() * Math.floor(new Date().getTime()),
                    ).toString()
                  );
                }}
                data={Object.keys(form.item)}
                renderItem={(miniItem) => {
                  return( <GlobalText
                     mylabel={`${miniItem.item} : ${form.item[miniItem.item]}`}
                     myfont={'PoppinsMedium'}
                     mystyle={{fontSize: 13}}
                   />);
                }}
              />
            );
          }}
        /> */}
        {date.map((items) =>
          Object.keys(items).map((value) => (
            <GlobalText
              mylabel={`${value} : ${items[value]}`}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 11 , color:'dark brown'}}
            />
          )),
        )}
      </View>

      <View style={{marginTop: 5}}>
        {clothType.map((items) =>
          Object.keys(items).map((value) => (
            <GlobalText
              mylabel={`${value} : ${items[value]}`}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 17}}
            />
          )),
        )}
      </View>
      <View style={{alignItems:'center'}}>
        {nameKefel.map((items) =>
          Object.keys(items).map((value) => (
            <GlobalText
              mylabel={`• ${value} : ${items[value]}`}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 15, marginHorizontal: 10, marginVertical: 5}}
            />
          )),
        )}
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',

          marginLeft: 30,
          marginTop: 10,
        }}>
        {amount.map((items) =>
          Object.keys(items).map((value) => (
            <GlobalText
              mylabel={`${value} : ${items[value]}`}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 13, color: 'grey', marginHorizontal: 10}}
            />
          )),
        )}
      </View>
      <View
        style={{
          alignItems:'flex-end',
          marginHorizontal: 10,
          marginTop: 20,
        }}>
        {others.map((items) =>
          Object.keys(items).map((value) => (
            <GlobalText
              mylabel={`${value} : ${items[value]}`}
              myfont={'PoppinsMedium'}
              mystyle={{fontSize: 15, marginHorizontal: 10}}
            />
          )),
        )}
      </View>

      {filter ? (
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}></View>
          <TouchableOpacity
            onPress={() => {
              openSheet();
            }}>
            <View
              style={{
                marginHorizontal: 5,
                backgroundColor: '#EF9F64',
                padding: 15,
                borderRadius: 10,
                zIndex: 5,
              }}>
              <GlobalText
                mylabel={'ያረጋግጡ'}
                myfont={'Tailwind SC Regular'}
                mystyle={{fontSize: 18, color: 'white'}}
              />
            </View>
          </TouchableOpacity>
          <Connector ref={sheetRef} id={form['id']} />
        </View>
      ) : null}
    </View>
  );
  
}

const TabStyle = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containers: {
    marginTop:20,
    marginHorizontal:25,
    marginVertical:10,
    zIndex: 1,
    height: 'auto',
    width: 'auto',
    borderRadius: 16,
    padding: 16,
    borderRadius: 40,
    backgroundColor: 'white',
  },
})
