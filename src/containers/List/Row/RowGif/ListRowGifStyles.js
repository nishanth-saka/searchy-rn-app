import { StyleSheet } from 'react-native';
import { MAIN_COLOR, BORDER_COLOR } from '../../../../utils/colors';

export default styles = new StyleSheet.create({
    'container': {
        width: `100%`,
        height: `100%`,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: MAIN_COLOR,
        padding: 10
    },
    'gifBlock': {
        flex: 1,
        borderRadius: 15,
        borderWidth: 5,
        borderColor: BORDER_COLOR,        
    }
})