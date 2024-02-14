/* eslint-disable prettier/prettier */
import { View, Text, Modal } from 'react-native'
import React from 'react'
import GenericDialog from '../models/generic_dialog'

export default function ErrorDialog({content,visible,setVisible}) {
 var mycontent ="";

          if(content?.includes("wrong-password")){
             mycontent = 'ያስገቡት መርጃ ልክ አይደለም';
          }
          else if(content?.includes("network")){
           mycontent = 'ኢንተርኔት ማብራቶን ያረጋግጡ';
          }
         else if(content?.includes("user-not-found")){
           mycontent = 'ይቅርታ! ለማለፍ ፍቃድ የሎትም';
          }
         else if (content?.includes('request')) {
            mycontent = 'ብዙ ጊዜ ሞክረዋል! ትንሽ ቆይተው ይሞክሩ';
          } 
          else {
             mycontent = 'ይቅርታ! ችግር አጋጥሞናል';
          }
        

  return (
    <Modal transparent visible={visible}>
      <GenericDialog
        icon={'error'}
        title={'An Error occured'}
        content={mycontent}
        optionBuilder={[
          {name: 'አዎ', action: () => setVisible(false)},
          {name: 'ይሰርዙ', action: () => setVisible(false)},
        ]}
      />
    </Modal>
  );
}