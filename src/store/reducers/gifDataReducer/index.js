import { GET_GIF_DATA } from "../../types";

const initialState = {
    gifData : []
}

const GifDataReducer = (state = initialState, action) => {
    switch(action?.type){
        case GET_GIF_DATA:{
            const {payload} = action;
            const _obj = {
                ...state,
                gifData: [...state.gifData, ...payload.gifData]
            }

            console.log(``);
            console.log(`getGifData action: `);
            console.log(action?.type);
            console.log(_obj);
            console.log(``);

            return _obj;
        }
        default:
            return state;
    }
}

export default GifDataReducer;