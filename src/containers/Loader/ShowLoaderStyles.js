import { StyleSheet } from 'react-native';

import { FOOTER_HEIGHT, SCREEN_WIDTH, ROW_PADDING } from '../../utils/constants';
import { BORDER_COLOR, MAIN_COLOR } from '../../utils/colors';

export default styles = new StyleSheet.create({
    container: {
        width: SCREEN_WIDTH*0.7, 
        height:70, 
        backgroundColor:'#C80435', 
        padding:10, marginRight: 15, 
        borderColor:'#fff', 
        borderWidth:1, 
        borderRadius: 35, 
        alignContent:'center', 
        alignItems:'center',
        bottom: 20,
        justifyContent: 'center',
        position: 'absolute'
      },
      searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        borderRadius: 15,
        alignItems: "center",
        backgroundColor: MAIN_COLOR
      },
      searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "80%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: BORDER_COLOR
      },
      input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%"        
      },
})