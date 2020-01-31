import React, {Component} from 'react';
import './App.css';
import AppLayout from "./layouts/AppLayout";
import * as actions from './actions'
import { connect } from "react-redux";

interface IApp {
    fetchUser?: any
}

class App extends Component<IApp> {

    componentWillMount(): void {
        this.props.fetchUser();
    }

    render () {
        return (
            <div>
                <AppLayout/>
            </div>
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