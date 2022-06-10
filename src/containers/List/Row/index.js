import React, {memo, useCallback} from 'react';
import { Animated, TouchableOpacity } from 'react-native'

import ListRowStyles from './ListRowStyles';
import ListRowGif from './RowGif';


const propsAreEqual = (preItem, nextItem) => {
    return preItem?.item?.id === nextItem?.item?.id;
    // return true;
  }

function ListRow({item}) {
  const {id, images : {original, fixed_width_small_still}, user} = item;

  return (
    <TouchableOpacity key={`${item?.id}`} style={ListRowStyles.container}>
            {/* <FlatListRowPreviewImage {...props} />
            <FlatListRowLabels {...props} />            
            <FlatListRowProfileImage {...props} /> */}

            <ListRowGif gifURL={original?.url} previewURL={fixed_width_small_still?.url} id={id}/>

        </TouchableOpacity>     
  )
}

export default memo(ListRow, propsAreEqual);
