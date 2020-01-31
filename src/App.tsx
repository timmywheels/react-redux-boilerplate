import React, {Component} from 'react';
import './App.css';
import AppLayout from "./layouts/AppLayout";
import * as actions from './actions'
import { connect } from "react-redux";
import HomeView from "./views/HomeView";
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";

interface IApp {
    auth: object
    fetchUser?: any
}

class App extends Component<IApp> {

    componentWillMount(): void {
        this.props.fetchUser();
    }

    render () {
        return (
            <BrowserRouter>
                <AppLayout>
                    <Switch>
                        <Route exact path={'/'} user={this.props.auth} component={HomeView} />
                    </Switch>
                </AppLayout>
            </BrowserRouter>
        );
    }
}

function mapStateToProps({ auth }: { auth: any}) {
    return { auth };
}

function mapActionsToProps({fetchUser}: { fetchUser: any }) {
    return { fetchUser };
}

export default connect(mapStateToProps, mapActionsToProps(actions))(App);