/* eslint-disable prettier/prettier */
import {Modal} from 'react-native';
import React from 'react';
import GenericDialog from '../models/generic_dialog';

export default function ConfirmationDialog({content, visible, setVisible,myfunction}) { 
  return (
    <Modal transparent visible={visible}>
      <GenericDialog
        icon={'pan-tool'}
        title={'ማረጋገጫ'}
        content={'ለመቀጠል እርግጠኛ ኖት?'}
        optionBuilder={[
          {
            name: 'እሺ',
            action: () => {
              myfunction();
              setVisible(false);
            },
          },
          {name: 'አይ', action: () => setVisible(false)},
        ]}
      />
    </Modal>
  );
}
