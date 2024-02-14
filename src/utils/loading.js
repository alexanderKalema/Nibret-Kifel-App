/* eslint-disable prettier/prettier */
import {Modal, View} from 'react-native';
import React from 'react';
import {Grid} from 'react-native-animated-spinkit';
import GlobalText from '../global/global_text';

export default function Loading({
  visible,
  setVisible,
}) {
  return (
    <Modal transparent visible={visible}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <Grid size={60} color="orange"></Grid>
        <GlobalText
          mylabel={'እባኮት ትንሽ ይጠብቁ'}
          myfont={'Tailwind SC Regular'}
          mystyle={{fontSize: 24, marginTop: 20, color: 'white'}}
        />
      </View>
    </Modal>
  );
}
