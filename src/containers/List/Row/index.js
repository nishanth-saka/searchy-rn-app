import React, {memo, useCallback} from 'react';
import { Animated, TouchableOpacity } from 'react-native'

import ListRowStyles from './ListRowStyles';
import ListRowGif from './RowGif';


// const propsAreEqual = (preItem, nextItem) => {
//     return preItem.item?.priceUsd === nextItem.item?.priceUsd;
//     // return true;
//   }

function ListRow({item}) {

  const {id, images : {preview_gif : {url}}, user} = item;

  return (
    <TouchableOpacity key={`${item?.id ?? Math.random()}`} style={ListRowStyles.container}>
            {/* <FlatListRowPreviewImage {...props} />
            <FlatListRowLabels {...props} />            
            <FlatListRowProfileImage {...props} /> */}

            <ListRowGif gifURL={url}/>

        </TouchableOpacity>     
  )
}

export default ListRow;
