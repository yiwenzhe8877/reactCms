import React, {Component} from 'react';
import {HashRouter, Route, Switch,BrowserRouter} from 'react-router-dom'
import Login from '@pages/login'
import Admin from '../admin';

export default class IRouter extends Component {

    componentDidMount(){
        
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route   path="/login" component={Login} />
                    <Route   path="/admin" component={Admin}/>
                </Switch>
            </HashRouter>
        );
    }
}