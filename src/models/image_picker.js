import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePickerCropper from 'react-native-image-crop-picker';
import GlobalText from '../global/global_text';

export default ImagePicker = React.forwardRef(({onFileSelected}, ref) => {
  const options = [
    {
      name: 'Take from camera',
      icon: <Ionicons style={{color: 'grey'}} size={45} name="camera" />,
      onPress: () => {
        ImagePickerCropper.openCamera({
          cropping: false,
          freeStyleCropEnabled: true,
        })
          .then((images) => {
            onFileSelected(images);
          })
          .catch((error) => {
          });
      },
    },
    {
      name: 'Choose from Gallery',
      icon: <Ionicons name="image" style={{color: 'grey'}} size={45} />,
      onPress: () => {
        ImagePickerCropper.openPicker({
          cropping: false,
          freeStyleCropEnabled: true,
        })
          .then((images) => {

            onFileSelected(images);
          })
          .catch((error) => {
          });
      },
    },
  ];
  return (
    <RBSheet
      ref={ref}
      height={200}
      openDuration={250}
      dragFromTopOnly
      closeOnDragDown
      customStyles={{
        container: {
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
      
        },
      }}>
      <View style={mystyles.optionsWrapper}>
        {options.map(({name, onPress, icon}) => (
          <TouchableOpacity
            onPress={onPress}
            style={mystyles.pickerOption}
            key={name}>
            {icon}
            <GlobalText
              mylabel={name}
              myfont={'Tailwind SC Regular'}
              mystyle={{fontSize: 18,marginLeft:15}}
            />
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  );
});


const mystyles = StyleSheet.create({
  pickerOption: {
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center',
  },

  optionsWrapper: {
    paddingHorizontal: 30,
  },

  text: {
    fontSize: 17,
    paddingLeft: 17,
  },
});