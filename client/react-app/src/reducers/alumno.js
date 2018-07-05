import {VIEW_ALUM_LIST,ADD_ALUM} from "../actions/actionTypes";


export default function data(state = {}, action) {
    switch (action.type) 
    {
        case VIEW_ALUM_LIST:
            return Object.assign({}, state, {
                actionType: action.type,
                alumList: action.alumList,
                error: false
            });
        case ADD_ALUM:
            return Object.assign({}, state, {
                actionType: action.type,
                alumResult: action.alumResult,
                error: false
            });

        default:
            return state;
    }
}