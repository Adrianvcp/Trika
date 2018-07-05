import {VIEW_COURSES_LIST, CREATE_CURSOES,VIEW_COURSES_LIST_TOTAL} from "../actions/actionTypes";

export default function coursesData(state = {}, action) {
    console.log("state:",state);
    switch (action.type) 
    {
        case VIEW_COURSES_LIST:
            return Object.assign({}, state, {
                actionType: action.type,
                todoList: action.coursesList,
                error: false
            });
            case VIEW_COURSES_LIST_TOTAL:
            return Object.assign({}, state, {
                actionType: action.type,
                todoList: action.cursoList,
                error: false
            });
        case CREATE_CURSOES:
            return Object.assign({}, state, {
                actionType: action.type,
                curso: action.curso,
                error: false
            });


            
        default:
            return state;
    }
}

