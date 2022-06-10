import { GET_GIF_DATA } from "../types";
import { getGifDataAPI } from "../../helper/services";

export const getGifData = params => {
    return async(dispatch) => {
        const _data = await getGifDataAPI(params);
        const _obj = {
            type: GET_GIF_DATA,
            payload: {gifData : _data}
        };
    
        dispatch(_obj);
    }
}
