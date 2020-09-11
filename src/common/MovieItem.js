import React from 'react';
import {Text, StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import {colors} from '../assets/theme';
import {PosterImage} from './PosterImage';

function colorPick(type) {
    switch (type) {
        case 'movie' :
            return colors.blue;
        case 'series' :
            return colors.green;
        case 'episode' :
            return colors.red;
        default:
            return colors.gold;
    }
}

const MovieItem = ({onPress, image, year, title, Type}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.buttonStyle}>
            <PosterImage style={styles.image} uri={image}/>
            <View style={styles.containerDetail}>
                <Text numberOfLines={1} style={styles.titleText}>{title}</Text>
                <Text style={styles.yearText}>{year}</Text>
                <Text style={[styles.typeText, {backgroundColor: colorPick(Type)}]}>{Type}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        height: 100,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colors.lightGrey,
        alignItems: 'center',
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 3,
        backgroundColor: colors.lightGrey,
        marginHorizontal: 7,
    },
    containerDetail: {
        alignItems: 'flex-start',
    },
    cardTime: {
        padding: 2,
        backgroundColor: colors.white,
        borderRadius: 3,
        minWidth: 15,
        alignItems: 'center',
        height: 15,
        elevation: 1,
    },
    titleText: {
        fontSize: 14,
        color: colors.textColor,
        marginTop: 5,
    },
    yearText: {
        fontSize: 10,
        color: colors.white,
        backgroundColor: colors.gold,
        borderRadius: 5,
        paddingHorizontal: 3,
        marginTop: 5,
    },
    typeText: {
        fontSize: 10,
        color: colors.white,
        backgroundColor: colors.gold,
        borderRadius: 5,
        paddingHorizontal: 3,
        marginTop: 3,
    },
});

export {MovieItem};
