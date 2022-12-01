import {StyleSheet, Text} from 'react-native';
import React from 'react';

export default function GlobalText({myfont, mylabel, mystyle}) {
  const GlobalStyle = StyleSheet.create({
    CustomFont: {fontFamily: myfont, color: 'black'},
  });

  return <Text style={[GlobalStyle.CustomFont, mystyle]}>{mylabel}</Text>;
}
