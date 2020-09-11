import React from 'react';
import {Text, ActivityIndicator, StyleSheet, Platform, View, TouchableOpacity, Dimensions} from 'react-native';
import {colors} from '../assets/theme';

const widthScreen = Dimensions.get('screen').width - 40;

const Button = ({onPress, title, isLoading, disable, buttonStyle, textStyle, indicatorColor}) => {
    return (
        isLoading && isLoading === true ?
            <View style={[styles.buttonStyle, buttonStyle]}>
                <ActivityIndicator color={indicatorColor ? indicatorColor : colors.gray} size={'small'}/>
            </View>
            :
            <TouchableOpacity
                activeOpacity={disable ? 1 : 0.8}
                onPress={disable ? undefined : onPress}
                style={[styles.buttonStyle, buttonStyle]}
            >
                <Text style={[styles.textStyle, textStyle]}>{title}</Text>
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        height: 42,
        width: widthScreen > 200 ? 200 : widthScreen,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.gray,
        marginVertical:10,
        alignSelf:'center'
    },
    textStyle: {
        fontSize: 14,
        color: colors.gray,
        marginBottom: Platform.OS === 'ios' ? -3 : 0,
    },
});

export {Button};
