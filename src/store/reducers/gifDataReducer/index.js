import { GET_GIF_DATA, GET_GIF_DATA_LOADING } from "../../types";

const initialState = {
    gifData : [],
    gifDataLoading: null,
}

const GifDataReducer = (state = initialState, action) => {
    switch(action?.type){
        case GET_GIF_DATA:{
            const {payload} = action;
            const _obj = {
                ...state,
                gifData: [...[], ...payload.gifData]
            }
            return _obj;
        }
        case GET_GIF_DATA_LOADING:{
            const {payload} = action;

            console.log(``);
            console.log(`GET_GIF_DATA_LOADING payload: `);
            console.log(payload);
            console.log(``);

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