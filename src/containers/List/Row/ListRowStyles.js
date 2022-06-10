import { StyleSheet } from 'react-native';

import { SCREEN_WIDTH, ROW_HEIGHT, ROW_PADDING } from '../../../utils/constants';
import { BORDER_COLOR } from '../../../utils/colors';

export default styles = new StyleSheet.create({
    'container': {
        width: SCREEN_WIDTH * 0.9,
        height: ROW_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BORDER_COLOR,
        margin: ROW_PADDING
    }
})