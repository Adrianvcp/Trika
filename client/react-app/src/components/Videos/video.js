import React,{ Component } from 'react';

import {Button, Glyphicon } from 'react-bootstrap'

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

class VideoOb extends Component
{

    constructor(props) {
        super(props);
        this.deleteVideo = this.deleteVideo.bind(this);
    }

    deleteVideo() {
        this.props.delete(this.props.video);
    }

    render()
    {

        return (
            
            <div style={styles.products} className="">

                        <div className="thumbnail" style={styles.product}>
                            <img src={this.props.video.miniatura} alt={this.props.video.name} />

                            <div className="caption">
                            <h4>{this.props.video.titulo}</h4>
                            <p>
                                <Button bsStyle="primary" onClick={this.deleteVideo} role="button">
                                    
                                    <Glyphicon glyph="trash" /> Eliminar
                                </Button>
                                <Button className="ml-4"  bsStyle="primary" role="button" >
                                    
                                    <Glyphicon glyph="pencil" /> Editar
                                </Button>
                            
                            </p>
                            </div>
                        </div>
            
            </div>


        )
    }

}

export default VideoOb;