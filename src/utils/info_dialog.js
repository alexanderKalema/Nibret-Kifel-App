/* eslint-disable prettier/prettier */
import {Modal} from 'react-native';
import React from 'react';
import GenericDialog from '../models/generic_dialog';

export default function InformationDialog({
  visible,
  setVisible,
  content,
  myfuntion
}) {
  return (
    <Modal transparent visible={visible}>
      <GenericDialog
        icon={'check-box'}
        title={'Success'}
        content={content}
        optionBuilder={[
          {name: 'OK', action: () => {setVisible(false); myfuntion();}},
        ]}
      />
    </Modal>
  );
}
