import React from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {fetchAddVideo} from '../../actions/videosActions'
import {connect} from 'react-redux'

class VideosForm extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            titulo:'',
            linkImage:'',
            descripcion:'',
            miniatura:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit()
    {
        this.props.fetchAddVideo(this.state);
    }
    
    handleChange(event) {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        this.setState({...this.state, [fieldName]: fieldValue})
    }

    render(){
        return(
            <div>
                <h3> Videos :</h3>
                <Form>
                    <FormGroup>
                        <ControlLabel>Nombre de Video</ControlLabel>
                        <FormControl name="titulo" value={this.state.titulo} placeholder="video Title" onChange={this.handleChange.bind(this)}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Imagen Curso</ControlLabel>
                        <FormControl name="miniatura" value={this.state.miniatura} placeholder="Image" onChange={this.handleChange.bind(this)}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Descripcion</ControlLabel>
                        <FormControl name="descripcion" value={this.state.descripcion} placeholder="video Title" onChange={this.handleChange.bind(this)}/>
                    </FormGroup>
                    <Button onClick={this.handleSubmit} type="submit">Agregar Video</Button>
                </Form>
            </div>
        )
    }

}

const mapState = state =>{
    return{
        videoResult:state.videosdata.videoResult,
        actionType:state.videosdata.actionType
    }
};

const mapDispatch = {
    fetchAddVideo
};


export default connect(mapState,mapDispatch) (VideosForm);