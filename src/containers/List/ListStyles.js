import { StyleSheet } from 'react-native';

import { SCREEN_WIDTH, ROW_HEIGHT, ROW_PADDING } from '../../utils/constants';
import { BORDER_COLOR } from '../../utils/colors';

export default styles = new StyleSheet.create({
    'container': {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BORDER_COLOR        
    }
})