import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import './main.css';
import TasksPage from "./TasksPage";
import VideosPage from './VideosPage';
import CursoesPage from './CursoesPage';

class Routes extends React.Component {
    render() 
    {
        return (
            <Router>
                <div className="main_container">
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/tasks" component={TasksPage}/>
                    <Route path="/videos" component={VideosPage}/>
                    <Route path="/addcurso" component={CursoesPage}/>
                </div>
            </Router>
        )
    }
}

export default Routes;