import { StyleSheet } from 'react-native';

import { FOOTER_HEIGHT, SCREEN_WIDTH, ROW_PADDING } from '../../../utils/constants';
import { BORDER_COLOR, MAIN_COLOR } from '../../../utils/colors';

export default styles = new StyleSheet.create({
    'container': {
        bottom: 10,
        height: FOOTER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BORDER_COLOR,
        margin: 10,        
    }
})