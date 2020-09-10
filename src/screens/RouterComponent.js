import React from 'react';
import {Actions, Lightbox, Scene} from 'react-native-router-flux';

import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

const RouterComponent = Actions.create(
    <Lightbox key="lightBox">
        <Scene key="root">
            <Scene key="movieList" component={MovieList} hideNavBar initial/>
            <Scene key="movieDetails" component={MovieDetails} hideNavBar initial/>
        </Scene>
    </Lightbox>,
);

export default RouterComponent;
