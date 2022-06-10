import { GET_GIF_DATA, GET_GIF_DATA_LOADING } from "../types";
import { getGifDataAPI } from "../../helper/services";

export const getGifData = params => {
    
    return async(dispatch) => {
        dispatch(_setGifLoading(true));
        const _data = await getGifDataAPI(params);

        const _obj = {
            type: GET_GIF_DATA,
            payload: {gifData : _data?.data}
        };
        
        dispatch(_obj);
        dispatch(_setGifLoading(false));
    }
}

const _setGifLoading = params => {
    console.log(``);
    console.log(`_setGifLoading: `);
    console.log(params);
    console.log(``);

    const _obj = {
        type: GET_GIF_DATA_LOADING,
        payload: {gifDataLoading : params}
    };

    return _obj;
}
