import _ from 'lodash';

import { SET_LIST_VIEWABLE_ID } from "../../types";

const initialState = {
    viewableIDs : []    
}


const ListReducer = (state = initialState, action) => {
    switch(action?.type){
        case SET_LIST_VIEWABLE_ID:{
            const {payload} = action;
            const _array = _.compact(_.union([], payload.viewableIDs));
            const _obj = {
                ...state,
                viewableIDs: _.uniq(_array) //[...[], ...payload.viewableIDs]
            }
            return _obj;
        }

        default:
            return state;
    }
}

export default ListReducer;