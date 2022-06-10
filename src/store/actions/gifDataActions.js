import _ from 'lodash';

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

export const debounceUpdateGifData = _.debounce(async(query, dispatch) => {
    if (query !== "") {
        const _data = await updateGifDataAPI(query);
        const _obj = {
            type: UPDATE_GIF_DATA,
            payload: {gifData : _data?.data}
        };
            
        dispatch(_obj);
    }
}, 200);

export const updateGifData = query => dispatch => {
    dispatch(_setGifLoading(true));        
    debounceUpdateGifData(query, dispatch);
}

// export const debounceUpdateGifData = _.debounce(async(query, dispatch) => {
//     if (query !== "") {
//         await updateGifData(query);
//     }
// }, 200);

// export const updateGifData = (params) => {
//     return async(dispatch) => {
//         dispatch(_setGifLoading(true));        
//         const _data = await updateGifDataAPI(params);
//         const _obj = {
//             type: UPDATE_GIF_DATA,
//             payload: {gifData : _data?.data}
//         };
            
//         dispatch(_obj);
//         dispatch(_setGifLoading(false));
//     }
    
// }

const _setGifLoading = params => {
    const _obj = {
        type: GET_GIF_DATA_LOADING,
        payload: {gifDataLoading : params}
    };

    return _obj;
}
