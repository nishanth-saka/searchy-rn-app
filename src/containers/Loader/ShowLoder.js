import React from 'react';
import { TouchableOpacity } from 'react-native';

import ShowLoaderStyles from './ShowLoaderStyles';

export default function ShowLoder({gifDataLoading, loadNext}) {
  console.log(``);
  console.log(`ShowLoder: ${gifDataLoading}`);
  console.log(`ShowLoder: ${gifDataLoading}`);
  console.log(`ShowLoder: ${gifDataLoading}`);
  console.log(`ShowLoder: ${gifDataLoading}`);
  console.log(``);
  console.log(``);
  console.log(``);
  return (
    <TouchableOpacity 
        style={[ShowLoaderStyles.container, {display: gifDataLoading ? 'flex' : 'none'}]}
        onPress={(args) => {
          loadNext();
        }} />
  )
}
