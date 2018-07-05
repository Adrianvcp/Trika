import {ADD_ALUM} from './actionTypes';
import {VIEW_ALUM_LIST} from './actionTypes'
 
//FETCH-ALUMNOS LISTA
export function fetchAlumnoList()
{
    return function (dispatch, getState) {

        fetch("http://localhost:8080/api/alumnoes")
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setAlumnoList(jsonData._embedded.alumnoes))
            })
    };
}

function setAlumnoList(alumnList) {
    return {
        type: VIEW_ALUM_LIST,
        alumnList
    }
}

//FETCH- ADD ALUMNO
export function addAlumno(request)
{
    return function(dispatch,getState){
        fetch("https://localhost:8080/alumno/addAlumno",{
            method:'post',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-Type':'application/json'
                },
            body:JSON.stringify(request)
        })
            .then(async response => {   return Object.assign({}, {error: !response.ok}, await response.json() ) })
            .then(jsonData =>{
                dispatch(addAlumno(jsonData))
            })
    }
}


function addAlumno(alumnResult) {
    return {
        type: ADD_ALUM,
        alumnResult
    }
}