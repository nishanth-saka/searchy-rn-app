import { GET_GIF_DATA, GET_GIF_DATA_LOADING, UPDATE_GIF_DATA } from "../types";
import { getGifDataAPI, updateGifDataAPI } from "../../helper/services";

export const getGifData = (params) => {
    return async(dispatch) => {
        dispatch(_setGifLoading(true));
        
        const _data = await getGifDataAPI({searchParam : params?.searchParam});
        const _obj = {
            type: GET_GIF_DATA,
            payload: {gifData : _data?.data}
        };
        
        dispatch(_obj);
        dispatch(_setGifLoading(false));
    }
}

export const updateGifData = (params) => {
    return async(dispatch) => {
        dispatch(_setGifLoading(true));
        
        const _data = await updateGifDataAPI({searchParam : params?.searchParam});
        const _obj = {
            type: UPDATE_GIF_DATA,
            payload: {gifData : _data?.data}
        };
        
        dispatch(_obj);
        dispatch(_setGifLoading(false));
    }
}

const _setGifLoading = params => {
    const _obj = {
        type: GET_GIF_DATA_LOADING,
        payload: {gifDataLoading : params}
    };

    return _obj;
}
