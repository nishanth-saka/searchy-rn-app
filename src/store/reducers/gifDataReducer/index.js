import _ from 'lodash';

import { GET_GIF_DATA, GET_GIF_DATA_LOADING, UPDATE_GIF_DATA } from "../../types";

const initialState = {
    gifData : [],
    gifDataLoading: null,
}

const GifDataReducer = (state = initialState, action) => {
    switch(action?.type){
        case UPDATE_GIF_DATA:{
            const {payload} = action;
            const _array = _.compact(_.union(state.gifData, payload.gifData));

            const _obj = {
                ...state,
                gifData: _.uniqBy(_array, 'id')  //[...[], ...payload.gifData]
            }
            return _obj;
        }
        case GET_GIF_DATA:{
            const {payload} = action;
            const _array = _.compact(_.union([], payload.gifData));

            const _obj = {
                ...state,
                gifData: _.uniqBy(_array, 'id')  //[...[], ...payload.gifData]
            }
            return _obj;
        }
        case GET_GIF_DATA_LOADING:{
            const {payload} = action;

            const _obj = {
                ...state,
                gifDataLoading: payload.gifDataLoading
            }
            return _obj;
        }
        default:
            return state;
    }
}

export default GifDataReducer;