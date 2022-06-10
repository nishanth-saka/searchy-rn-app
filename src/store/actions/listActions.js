import { SET_LIST_VIEWABLE_ID } from "../types";

export const setViewableIDs = (params) => {
    console.log(``);
    console.log(`setViewableIDs params: `);
    console.log(params);
    console.log(``);

    const _obj = {
        type: SET_LIST_VIEWABLE_ID,
        payload: {viewableIDs : params}
    };

    return _obj;
}