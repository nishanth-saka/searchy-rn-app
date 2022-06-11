import { StyleSheet } from 'react-native';

import { ROW_HEIGHT, ROW_PADDING } from '../../../../utils/constants';
import { MAIN_COLOR, BORDER_COLOR } from '../../../../utils/colors';

export default styles = new StyleSheet.create({
    'container': {
        width: '100%',
        height: ROW_HEIGHT,
        justifyContent: 'center',
        backgroundColor: MAIN_COLOR,
        padding: ROW_PADDING
    },
    'gifBlock': {
        flex: 1,
        borderRadius: 15,
        borderWidth: 5,
        borderColor: BORDER_COLOR,        
    },
    'profileImage':{
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 25,
        bottom: 20,
        right: 20,
        borderWidth: 2,
        borderColor: '#fff'
      },
      'backgroundVideo': {
        width: '100%',
        height: ROW_HEIGHT,        
      },
})