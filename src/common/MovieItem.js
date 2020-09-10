import React from 'react';
import {Text, StyleSheet, Image, View, TouchableOpacity,Dimensions} from 'react-native';
import {colors} from '../assets/theme';

const widthScreen = Dimensions.get('screen').width - 20;

const MovieItem = ({onPress, image, year, title, plot, imdbRate}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.buttonStyle}>
            <Image style={styles.image} source={image}/>
            <View style={styles.containerDetail}>
                <View style={styles.rowContainer}>
                        <Text style={styles.smallText}>{year}</Text>
                        <Text style={styles.smallText}>{imdbRate}</Text>
                </View>
                <Text numberOfLines={1} style={styles.titleText}>{title}</Text>
                <Text numberOfLines={2} style={styles.descriptionText}>{plot}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        height: 100,
        width: widthScreen,
        flexDirection: 'row-reverse',
        borderBottomWidth: 0.5,
        borderColor: colors.lightGrey,
        alignItems:'center'
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 3,
        backgroundColor: colors.lightGrey
    },
    containerDetail: {
        alignItems: 'flex-end',
        marginHorizontal: 7,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardTime: {
        padding: 2,
        backgroundColor:colors.white,
        borderRadius: 3,
        minWidth:15,
        alignItems:'center',
        height:15,
        elevation: 1,
    },
    smallText: {
        fontSize: 8,
        color: colors.black,
    },
    titleText: {
        fontSize: 12,
        color: colors.black,
        marginBottom: -5,
        width: widthScreen - 107,
        textAlign:'right'
    },
    descriptionText: {
        fontSize: 10,
        color: colors.gray,
        width: widthScreen - 107,
        textAlign:'right'
    },
});

export {MovieItem};
