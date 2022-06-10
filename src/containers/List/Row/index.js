import React, {memo, useCallback} from 'react';
import { Animated, TouchableOpacity } from 'react-native'

import ListRowStyles from './ListRowStyles';
import ListRowGif from './RowGif';


const propsAreEqual = (preItem, nextItem) => {
    // return preItem.item?.id === nextItem.item?.id;
    return true;
  }

function ListRow({item}) {

  const {id, images : {original, downsized_still}, user} = item;

  console.log(``);
  console.log(`ListRow: `, id);
  console.log(item);
  console.log(``);

  return (
    <TouchableOpacity key={`${item?.id}`} style={ListRowStyles.container}>
            {/* <FlatListRowPreviewImage {...props} />
            <FlatListRowLabels {...props} />            
            <FlatListRowProfileImage {...props} /> */}

            <ListRowGif gifURL={original?.url} previewURL={downsized_still?.url} id={id}/>

        </TouchableOpacity>     
  )
}

export default memo(ListRow, propsAreEqual);
