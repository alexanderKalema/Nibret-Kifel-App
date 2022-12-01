import React, {useEffect, useState} from 'react';
import {View, Button, Image} from 'react-native';

import {utils} from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';

export default function Trial({localFile}) {
  const [url, setUrl] = useState();
  useEffect(() => {
    const func = async () => {
      const reference = storage().ref('Snapchat-774727667.jpg');
      //  await reference.getDownloadURL.then(
      // myurl = await reference.getDownloadURL();
      // console.log(myurl);
      // setUrl(myurl);
    };

    func();
  }, []);

  // create bucket storage reference to not yet existing image

  return (
    <View>
      <Image style={{height: 100, width: 150}} source={{uri: url}} />
    </View>
  );
}
