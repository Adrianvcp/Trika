import {combineReducers} from 'redux';
import data from './task';
import coursesData from './coursesReducer'
import alumno from './alumno'
import videosdata from './video'

export default combineReducers({
    data,coursesData,videosdata,alumno
});
