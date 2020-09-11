import React, {Component} from 'react';
import {StatusBar,Text} from 'react-native';
import {Actions, Router} from 'react-native-router-flux';
import {connect, Provider} from 'react-redux';

import RouterComponent from './src/screens/RouterComponent';
import {colors} from './src/assets/theme';
import configureStore from './src/data/store';

const {store} = configureStore();

export default class App extends Component {

    routerBackAndroidHandler() {
        if (Actions.state.index === 0) {
            return false;
        }
        Actions.pop();
        return true;
    }

    render() {
        const RouterWithRedux = connect()(Router);
        return (
            <Provider store={store}>
                <StatusBar backgroundColor={colors.statusBar} barStyle="light-content"/>
                <RouterWithRedux
                    backAndroidHandler={() => this.routerBackAndroidHandler()}
                    scenes={RouterComponent}
                />
            </Provider>
        );
    }

}










