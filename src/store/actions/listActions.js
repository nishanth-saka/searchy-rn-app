import _ from 'lodash';

import { SET_LIST_VIEWABLE_ID } from "../types";

export const debounceSetViewableIDs = _.debounce((param, dispatch) => {
    const _obj = {
        type: SET_LIST_VIEWABLE_ID,
        payload: {viewableIDs : param}
    };

    dispatch(_obj);
}, 200);

export const setViewableIDs = param => dispatch => {
    debounceSetViewableIDs(param, dispatch);
}

// export const setViewableIDs = (params) => {
//     const _obj = {
//         type: SET_LIST_VIEWABLE_ID,
//         payload: {viewableIDs : params}
//     };

//     return _obj;
// }