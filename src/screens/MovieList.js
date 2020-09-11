import React, {Component} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {MovieItem, ScrollViewContainer, Header, SearchBar, Button} from '../common';
import {connect} from 'react-redux';
import {requestSearchMovie, requestDetailMovie} from '../data/actions/actions';

class MovieList extends Component {

    constructor() {
        super();
        this.state = {
            searchField: '',
            typingTimeout: 0,
        };
        this.searchTimeout = null;
    }

    componentDidMount() {
        this.search_movie('bat');
    }

    search_movie(title) {
        this.setState({searchField: title});
        if (this.state.typingTimeout) {
            clearTimeout(this.state.typingTimeout);
        }
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() =>
            this.props.requestSearchMovie(title, 1), 500);
    }

    render() {
        return (
            <ScrollViewContainer
                header={
                    <Header/>
                }
                onRefresh={() => {
                    this.search_movie(this.state.searchField);
                }}
                refreshing={this.props.movies.moviesList_loading}
            >
                <SearchBar
                    value={this.state.searchField}
                    onChangeText={(v) => this.search_movie(v)}
                    onClearText={() => this.search_movie('')}
                    placeHolder={'Search Movie'}
                />
                <FlatList
                    style={{width: '100%'}}
                    data={this.props.movies.moviesList}
                    keyExtractor={(item) => item.imdbID}
                    renderItem={({item}) => this._renderItem(item)}
                />

                {this.props.movies.moviesList.length > 0 && this.props.movies.moviesList_has_next_page ?
                    <Button
                        title={'Show more'}
                        isLoading={this.props.movies.moviesList_loading}
                        onPress={() => {
                            this.props.requestSearchMovie(this.state.searchField, this.props.movies.moviesList_next_page);
                        }}
                    /> : null}

            </ScrollViewContainer>
        );
    }

    _renderItem(item) {
        return (
            <MovieItem
                year={item.Year}
                image={item.Poster}
                title={item.Title}
                Type={item.Type}
                onPress={() => this.props.requestDetailMovie(item.imdbID)}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies,
});
const mapDispatchToProps = {requestSearchMovie, requestDetailMovie};
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
