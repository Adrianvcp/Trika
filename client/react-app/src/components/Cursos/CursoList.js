import React from 'react';
import PropTypes from "prop-types";

class CursoList extends React.Component {

    constructor(props) {
        super(props);

        this.renderList = this.renderList.bind(this);
    }

    static propTypes = {
        cursoList: PropTypes.array.isRequired
    };

    render() {
        let renderFunction =
            this.props.cursoList && this.props.cursoList.length ? this.renderList : this.renderEmpty;

        return (
            renderFunction()
        )
    }

    renderList() {
        return (
            <div>
                <h3>Lista de Alumnos </h3>
                <ul>
                    {this.props.cursoList.map((item, index) =>
                     (
                        <li key={index}>{item.nombre}</li>
                    )
                    )}
                </ul>
            </div>
        )
    }

    renderEmpty() {
        return (
            <div>No items found...</div>
        )
    }
}

export default CursoList;