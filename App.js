import React, {Component} from 'react';
import {Actions, Router} from 'react-native-router-flux';
import RouterComponent from './src/screens/RouterComponent';

export default class App extends Component {

    routerBackAndroidHandler() {
        if (Actions.state.index === 0) {
            return false;
        }
        Actions.pop();
        return true;
    }

    render() {
        return (
            <Router
                backAndroidHandler={() => this.routerBackAndroidHandler()}
                scenes={RouterComponent}
            />
        );
    }
}










