import { GET_GIF_DATA } from "../../types";

const initialState = {
    gifData : []
}

const GifDataReducer = (state = initialState, action) => {
    console.log(``);
    console.log(`getGifData action: `);
    console.log(action?.type);
    console.log(``);

    switch(action?.type){
        case GET_GIF_DATA:{
            const {payload} = action;
            return {
                ...state,
                gifData: [...state.gifData, ...payload.gifData]
            }
        }
        default:
            return state;
    }
}

export default GifDataReducer;