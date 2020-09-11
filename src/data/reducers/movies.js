import * as Types from '../actions/actionTypes';

const initialState = {
    moviesList: [],
    moviesList_loading: false,
    moviesList_has_next_page: false,
    moviesList_next_page: 1,

    movieDetail: [],
    movieDetail_loading: false,
};

export default (state = initialState, action) => {
    const {response} = action;

    switch (action.type) {

        case Types.SEARCH_MOVIES_REQUEST:
            return {...state, moviesList_loading: true, ...response};
        case Types.SEARCH_MOVIES_RESPONSE:
            return {...state, moviesList_loading: false, ...response};
        case Types.SEARCH_MOVIES_FAILED:
            return {...state, moviesList_loading: false, ...response};
        case Types.SEARCH_MOVIES_RESET:
            return {
                ...state,
                moviesList: [],
                moviesList_loading: false,
                moviesList_has_next_page: false,
                moviesList_next_page: 1,
            };

        case Types.DETAIL_MOVIE_REQUEST:
            return {...state, movieDetail_loading: true, ...response};
        case Types.DETAIL_MOVIE_RESPONSE:
            return {...state, movieDetail_loading: false, ...response};
        case Types.DETAIL_MOVIE_FAILED:
            return {...state, movieDetail_loading: false, ...response};

        default:
            return state;
    }

};

