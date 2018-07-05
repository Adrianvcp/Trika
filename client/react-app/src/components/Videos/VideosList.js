import React,{ Component } from 'react';
import PropTypes from "prop-types";

import VideoOb from './video';
 
const styles = {
    products: {
      display: 'flex',
      alignItems: 'stretch',
      flexWrap: 'wrap'
    },
    product: {
      width: '220px',
      marginLeft: 10,
      marginRight: 10
    },
    top:{
        marginLeft:4
    }
  };

class VideoList extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            videoList:[]
        };

    }

    static propTypes = {
        videoList: PropTypes.array.isRequired
    };

    componentWillReceiveProps(nextProps) 
    {
        if (nextProps.courseList) {
            this.setState(this.state.videoList =  nextProps.courseList.slice());
        }
        
    }

    
    render()
    {

        return (
            
            <div style={styles.products} className="">
                {this.state.videoList.map(video =>
                        <VideoOb key={video._links.self.href} video={video} delete={this.props.deletevideo}/>
                )}
            </div>


        )
    }

}

export default VideoList;