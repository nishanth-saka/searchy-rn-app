import React from 'react';
import { TouchableOpacity } from 'react-native';

import ShowLoaderStyles from './ShowLoaderStyles';

export default function ShowLoder({gifDataLoading}) {
  return (
    <TouchableOpacity 
        style={[ShowLoaderStyles.container, {display: gifDataLoading ? 'flex' : 'none'}]}
        onPress={(args) => {}} />
  )
}
