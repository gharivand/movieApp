import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator, Dimensions} from 'react-native';
import {Header, ScrollViewContainer, PosterImage} from '../common';
import {connect} from 'react-redux';
import {colors} from '../assets/theme';

const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height;

class MovieDetails extends Component {
    render() {
        return (
            <ScrollViewContainer
                header={
                    <Header back/>
                }
            >
                {this.props.movies.movieDetail_loading ?
                    <ActivityIndicator size={'large'} color={colors.gray} style={{marginTop: 20}}/> :
                    <View style={{flex: 1}}>
                        <Image
                            blurRadius={2}
                            source={{uri: this.props.movies.movieDetail.Poster}}
                            style={styles.posterBack}/>
                        <PosterImage
                            uri={this.props.movies.movieDetail.Poster}
                            style={styles.poster}/>
                        <View style={styles.topContainer}>
                            <Text style={styles.dataText}>{'Year: ' + this.props.movies.movieDetail.Year}</Text>

                            <Text style={styles.dataText}>
                                {'Language: ' + this.props.movies.movieDetail.Language}</Text>
                        </View>
                        <View style={styles.centerContainer}>
                            <Text style={styles.titleText}>{this.props.movies.movieDetail.Title}</Text>
                            <Text style={styles.detailText}>{this.props.movies.movieDetail.Plot}</Text>
                        </View>
                        <View style={styles.bottomContainer}>
                            <Text style={styles.detailText}>{'Genre: ' + this.props.movies.movieDetail.Genre}</Text>
                            <Text
                                style={styles.detailText}>{'Director: ' + this.props.movies.movieDetail.Director}</Text>
                            <Text style={styles.detailText}>{'Actors: ' + this.props.movies.movieDetail.Actors}</Text>
                            <Text style={styles.detailText}>{'Runtime: ' + this.props.movies.movieDetail.Runtime}</Text>
                            <Text style={styles.detailText}>{'Country: ' + this.props.movies.movieDetail.Country}</Text>
                        </View>
                    </View>}
            </ScrollViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    posterBack: {
        width: widthScreen,
        height: heightScreen / 3,
        backgroundColor: colors.lightGrey,
    },
    poster: {
        width: widthScreen,
        height: heightScreen / 3,
        position: 'absolute',
        resizeMode: 'contain',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    centerContainer: {
        margin: 5,
    },
    bottomContainer: {
        margin: 5,
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 5,
        padding: 5,
        backgroundColor: colors.lightGrey
    },
    dataText: {
        fontSize: 12,
        color: colors.textSmallColor,
        marginTop: 5,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        padding: 3,
        borderRadius: 3
    },
    titleText: {
        fontSize: 14,
        color: colors.textColor,
    },
    detailText: {
        fontSize: 12,
        color: colors.textSmallColor,
        marginTop: 5,
    },
});

const mapStateToProps = (state) => ({
    movies: state.movies,
});

export default connect(mapStateToProps, null)(MovieDetails);
