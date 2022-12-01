/* eslint-disable prettier/prettier */
import {Modal} from 'react-native';
import React from 'react';
import GenericDialog from '../models/generic_dialog';

export default function ConfirmationDialog({content, visible, setVisible,myfunction}) { 
  return (
    <Modal transparent visible={visible}>
      <GenericDialog
        icon={'pan-tool'}
        title={'Confirmation'}
        content={"Are you sure you want to continue?"}
        optionBuilder={[
          {name: 'Yes', action: () => {  myfunction();  setVisible(false)}},
          {name: 'No', action: () => setVisible(false)},
        ]}
      />
    </Modal>
  );
}
