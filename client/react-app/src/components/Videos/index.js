import React from 'react';
import VideoForm from './VideosForm'
import VideosList from './VideosList'
import {connect} from "react-redux";

import {VIEW_VIDEOS_LIST} from '../../actions/actionTypes'
import {fetchVideoList} from '../../actions/videosActions'
 

class Videos extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            datosCurso:[],
            videosList:[]
        }
        this.deleteVideo = this.deleteVideo.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchVideoList();
    }

    componentWillReceiveProps(nextProps)
    {
        if (nextProps.actionType  === VIEW_VIDEOS_LIST) {
            this.setState({datosCurso: nextProps.videoList});
        }
    }


    // Delete video
    deleteVideo(videos) {
        fetch (videos._links.self.href,
        { method: 'DELETE',})
        .then( 
            res => this.props.fetchVideoList()
        )
        .catch( err => console.error(err))                
    }


    render()
    {
        return(
            <div>
                <VideoForm/>
                <VideosList deletevideo={this.deleteVideo} courseList={this.props.videoList} />
            </div>
        )
    }
}

const mapState = state =>{
    return{
        videoList: state.videosdata.todoList || [],
        actionType: state.videosdata.actionType
    }
};

const mapDispatch ={
    fetchVideoList
};

export default connect(mapState,mapDispatch)(Videos);