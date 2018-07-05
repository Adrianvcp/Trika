import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import Header from '../Header';
import './Layout.css';
import SideMenu from "../SideMenu";


import {connect} from "react-redux";
import {fetchcoursesList}from '../../actions/cursosActions'
import { VIEW_COURSES_LIST } from '../../actions/actionTypes';


export const menuItems = 
[
    {
        id: 0,
        title: 'Home',
        icon: 'icon_house_alt first_level_icon',
        link: '/'
    },
    {
        id: 1,
        title: 'Maintenance',
        icon: 'icon_document_alt first_level_icon',
        submenu_title: 'Maintenance',
        submenu: [
            {title: 'Alumnos', link: '/tasks'},
            {title: 'Cursos', link: '/addcurso'}
            
        ]
    },
    {
        id: 2,
        title: 'Sesion',
        icon: 'icon_folder-alt first_level_icon',
        badge: true,
        submenu_title: 'Sesion',
        submenu: [
            {title: 'Login', link: '/login'}

        ]
    },
    {
        id: 3,
        title: 'Cursos',
        icon: 'icon_folder-alt first_level_icon',
        badge: true,
        submenu_title: 'Cursos',
        submenu: []
    }];

class Layout extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = {
            menuExpanded: true,
            courseL:[]
        }
        this.changeMenuSate = this.changeMenuSate.bind(this);
    }

    changeMenuSate() {
        this.setState({menuExpanded: !this.state.menuExpanded});
    }

    componentDidMount()
    {
       this.props.fetchcoursesList();                
    }
    
    
    componentWillReceiveProps(nextProps) 
    {
        if(nextProps.actionType === VIEW_COURSES_LIST)
        {
            menuItems[3].submenu = nextProps.coursesList.slice();        
        }
        
    }

    render() {
        let menu_expanded_class = this.state.menuExpanded ? "side_menu_expanded" : "side_menu_collapsed";
        return (
            <div className={`App side_menu_active ${menu_expanded_class}`}>
                <Header/>
                <SideMenu onToggle={this.changeMenuSate} expanded={this.state.menuExpanded}
                          items={menuItems} />

                <div id="main_wrapper">
                    <div className="container-fluid">
                        {this.props.children}
                    </div>    
                </div>

            </div>
        )
    }

}


const mapState = state => {
    console.log("state2:",state);
    return {
        coursesList: state.coursesData.todoList || [],
        actionType: state.coursesData.actionType
    }
};

const mapDispatch = {
    fetchcoursesList
};

export default connect(mapState,mapDispatch) (Layout);