/* eslint-disable prettier/prettier */
import {View, Text, Modal} from 'react-native';
import React from 'react';
import GenericDialog from '../models/generic_dialog';
import { useNavigation } from '@react-navigation/native';

export default function LoginDialog({visible, setVisible}) {
  const {navigate} = useNavigation();

  return (
    <Modal transparent visible={visible}>
      <GenericDialog
        icon={'error'}
        title={'መረጃዎን ያስገቡ'}
        content={'ለመቀጠል ፍቃድ ያስፈልጎታል'}
        optionBuilder={[
          {
            name: 'ይቀጥሉ',
            action: () =>
              navigate('Login', {
                setVisible: () => setVisible(false),
              }),
          },
          {name: 'ይሰርዙ', action: () => setVisible(false)},
        ]}
      />
    </Modal>
  );
}
