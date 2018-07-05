import {VIEW_VIDEOS_LIST} from "../actions/actionTypes";
import {ADD_VIDEO} from "../actions/actionTypes"

export default function videosdata(state = {}, action) {
    switch (action.type) 
    {
        case VIEW_VIDEOS_LIST:
            return Object.assign({}, state, {
                actionType: action.type,
                todoList: action.videoList,
                error: false
            });
        
        case ADD_VIDEO:
            return Object.assign({}, state, {
                actionType: action.type,
                videoResult: action.videoResult,
                error: false
            });
        default:
            return state;
    }
}
