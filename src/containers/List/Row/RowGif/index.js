import React from 'react'
import {Text ,View , Image , StyleSheet} from 'react-native' ;

import ListRowGifStyles from './ListRowGifStyles';

const SAMPLE_URL = `https://media2.giphy.com/media/IAV5Gn2u3k9eHYgOa7/200w_s.gif?cid=b7615b27rteuj23nfdilccv6pqdgnl8fo8d5ye76ivo3vvtm&rid=200w_s.gif&ct=g`;
function ListRowGif({gifURL = `${SAMPLE_URL}`}) {
  return (
    <View style={ListRowGifStyles.container}>
          <Image
            style ={ListRowGifStyles.gifBlock}
            source={{ uri : gifURL}}
          />
        </View>
  )
}

export default ListRowGif;