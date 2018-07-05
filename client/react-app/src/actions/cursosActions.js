import {VIEW_COURSES_LIST} from './actionTypes';
import {CREATE_CURSOES} from './actionTypes';
import {VIEW_COURSES_LIST_TOTAL} from './actionTypes';

export function fetchCourseList()
{
    return function(dispatch,getState){
        fetch("http://localhost:8080/curso/2")
            .then(response => response.json())
            .then(jsonData =>{ dispatch(setCoursesList(jsonData)) })
    }
}

export function fetchcoursesList()
{
    return function(dispatch,getState){
        fetch("http://localhost:8080/curso/1")
            .then(response =>
                response.json().then(data => ({
                    data: data,
                    status: response.status
                }))
            )
            .then(response => {
                if(response.status === 200)
                {
                    //this.setState({courseL:response.data._embedded.cursoes});
                    dispatch(setCoursesList(response.data));          
                }  
            })
    }
}
export  function CreateCursoes(curso)
{
    return function (dispatch,getState) 
    {
         fetch('http://localhost:8080/api/cursoes', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(curso)
        })
            .then(response => response.json()
            )
            .then(jsonData => {
                dispatch(setCreateCursoes(jsonData))
            })
    
    }
}





export function fetchCursoList() {
    return function (dispatch, getState) {

        fetch("http://localhost:8080/api/cursoes")
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setCursoList(jsonData._embedded.cursoes))
            })
    };
}

function setCursoList(cursoList) {
    return {
        type: VIEW_COURSES_LIST_TOTAL,
       cursoList
    }
}




function setCoursesList(coursesList){
    return{
        type: VIEW_COURSES_LIST,
        coursesList
    }
}

function setCreateCursoes(curso){
    return {
        type: CREATE_CURSOES,
        curso
    };
}