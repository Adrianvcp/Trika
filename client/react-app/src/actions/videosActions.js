import {VIEW_VIDEOS_LIST} from './actionTypes'
import {ADD_VIDEO} from './actionTypes'


//FETCH-LIST VIDEO'S
export function fetchVideoList()
{
    const url = "http://localhost:8080/api/videos";
    return function (dispatch, getState) {

        fetch(url)
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setVideoList(jsonData._embedded.videos))
            })
    };
}

function setVideoList(videoList)
{
    return{
        type: VIEW_VIDEOS_LIST,
        videoList
    }
}

//FETCH-ADD VIDEO'S
export function fetchAddVideo(request)
{
    return function (dispatch, getState) {
        fetch("http://localhost:8080/videos/addMovie",{
            method:'post',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(request)
        })
            .then(async response => {   return Object.assign({}, {error: !response.ok}, await response.json() ) })
            .then(jsonData => {
                dispatch(addVideo(jsonData))
            })
    };
}

function addVideo(videoResult)
{
    return{
        type: ADD_VIDEO,
        videoResult
    }
}





