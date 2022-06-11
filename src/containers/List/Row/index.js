import React, {memo, useCallback} from 'react';
import { Animated, TouchableOpacity } from 'react-native'

import ListRowStyles from './ListRowStyles';
import ListRowGif from './RowGif';

function ListRow({item}) {
  const {id, images : {original_still, downsized_small, original, downsized_medium, fixed_width_small_still}, user} = item;

  return (
    <TouchableOpacity key={`${item?.id}`} style={ListRowStyles.container}>
            {/* <FlatListRowPreviewImage {...props} />
            <FlatListRowLabels {...props} />            
            <FlatListRowProfileImage {...props} /> */}

            <ListRowGif gifURLStill={original_still?.url} gifURL={original?.mp4} previewURL={fixed_width_small_still?.url} id={id}/>

        </TouchableOpacity>     
  )
}

export default memo(ListRow);
