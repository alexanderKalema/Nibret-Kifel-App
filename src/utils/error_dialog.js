/* eslint-disable prettier/prettier */
import { View, Text, Modal } from 'react-native'
import React from 'react'
import GenericDialog from '../models/generic_dialog'

export default function ErrorDialog({content,visible,setVisible}) {
 var mycontent ="";

          if(content?.includes("wrong-password")){
             mycontent="Wrong Credentials";
          }
          else if(content?.includes("network")){
           mycontent=  "Check your internet connection";
          }
         else if(content?.includes("user-not-found")){
           mycontent=  "Sorry! Your not an authorized user";
          }
         else if (content?.includes('request')) {
            mycontent = 'Sorry! Too many request';
          } 
          else {
             mycontent = 'Sorry! We encounterd an error';
          }
        

  return (
    <Modal
    transparent
  visible ={visible}
    >
      <GenericDialog
        icon={'error'}
        title={'An Error occured'}
        content ={mycontent}
        optionBuilder={[
          {name: 'OK', action:()=> setVisible(false)},
          {name: 'Cancel', action: ()=>setVisible(false)},
        ]}
      />
    </Modal>
  );
}