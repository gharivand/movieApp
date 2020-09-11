import * as Types from './actionTypes';
import {apiClient} from '../services';
import config from '../utils/Config';
import {Actions} from 'react-native-router-flux';
import configureStore from '../store';

const {store} = configureStore();
const remote = apiClient();

function requestSearchMovie(title, page) {
    return (dispatch) => {
        dispatch({type: Types.SEARCH_MOVIES_REQUEST});
        let moviesList = store.getState().movies.moviesList;
        remote.get('', {
            params: {
                apikey: config.apikey,
                s: title,
                page: page,
            },
        }).then(res => {
            if (res.error) {
                dispatch({type: Types.SEARCH_MOVIES_FAILED});
                alert(res.title);
            } else {
                dispatch({
                    type: Types.SEARCH_MOVIES_RESPONSE, response: {
                        moviesList: [...moviesList, ...res.Search],
                        moviesList_has_next_page: res.Search.length !== res.totalResults,
                        moviesList_next_page: (moviesList.length / 10) + 2,
                    },
                });
            }
        });
    };
}

function requestDetailMovie(id) {
    return (dispatch) => {
        dispatch({type: Types.DETAIL_MOVIE_REQUEST});
        Actions.movieDetails();
        remote.get('', {
            params: {
                apikey: config.apikey,
                i: id,
            },
        }).then(res => {
            if (res.error) {
                dispatch({type: Types.DETAIL_MOVIE_FAILED});
                alert(res.title);
            } else {
                dispatch({type: Types.DETAIL_MOVIE_RESPONSE, response: {movieDetail: res}});
            }
        });
    };
}


export {requestSearchMovie, requestDetailMovie};
