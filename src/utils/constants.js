import { Dimensions } from "react-native";

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const ROW_HEIGHT = Dimensions.get('screen').height * 0.3;
export const FOOTER_HEIGHT = Dimensions.get('screen').height * 0.05;
export const ROW_PADDING = Dimensions.get('screen').height * 0.01;

export const GIF_DATA_LIMIT = 10;
export const GIF_DEFAULT_QUERY = 'baseball';