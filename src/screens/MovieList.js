import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {MovieItem, ScrollViewContainer} from '../common';

export default class MovieList extends Component {
    render() {
        return (
            <ScrollViewContainer>
                <FlatList
                    data={[]}
                    keyExtractor={(item) => item.imdbID}
                    renderItem={({item}) => this._renderItem(item)}
                />
            </ScrollViewContainer>
        );
    }

    _renderItem(item) {
        return (
            <MovieItem
                year={item.Year}
                imdbRate={item.imdbRating}
                image={item.Poster}
                title={item.Title}
                plot={item.Plot}
                onPress={()=>{}}
            />
        );
    }
}
