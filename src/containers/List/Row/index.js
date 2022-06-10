import React, {memo, useCallback} from 'react';
import { Animated, TouchableOpacity } from 'react-native'

import ListRowStyles from './ListRowStyles';
import ListRowGif from './RowGif';


// const propsAreEqual = (preItem, nextItem) => {
//     return preItem.item?.priceUsd === nextItem.item?.priceUsd;
//     // return true;
//   }

function ListRow() {

    const _keyExtractor = useCallback(
        (item, index) => `${index}`,
        []
      )

  return (
    <TouchableOpacity key={_keyExtractor} style={ListRowStyles.container}>
            {/* <FlatListRowPreviewImage {...props} />
            <FlatListRowLabels {...props} />            
            <FlatListRowProfileImage {...props} /> */}

            <ListRowGif />

        </TouchableOpacity>     
  )
}

export default ListRow;
