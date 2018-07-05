import {VIEW_TASK_LIST} from './actionTypes';

export function fetchTaskList() {
    return function (dispatch, getState) {

        fetch("http://localhost:8080/api/alumnoes")
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setTaskList(jsonData._embedded.alumnoes))
            })
    };
}

function setTaskList(taskList) {
    return {
        type: VIEW_TASK_LIST,
        taskList
    }
}