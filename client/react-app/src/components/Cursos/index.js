import React from 'react';
import {connect} from "react-redux";
import {fetchCursoList} from '../../actions/cursosActions'
import {VIEW_COURSES_LIST_TOTAL} from "../../actions/actionTypes";
import CursoList from "./CursoList";


class Cursos extends React.Component {

    componentDidMount() {
        this.props.fetchCursoList();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.actionType === VIEW_COURSES_LIST_TOTAL) {
            this.setState({nextProps});
            
        }   
    }

    render() {
        return (
            <div>
               
                <CursoList cursoList={this.props.cursoList}/>
            </div>
        )
    }
}

const mapState = state => {
    return {
        cursoList: state.data.todoList || [],
        actionType: state.data.actionType
    }
};

const mapDispatch = {
    fetchCursoList
};

export default connect(mapState, mapDispatch)(Cursos);