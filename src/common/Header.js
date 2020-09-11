import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    Text,
} from 'react-native';
import {colors} from '../assets/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

const Header = ({back, children}) => {
    return (
        <View style={styles.container}>
            {children}
            <Text style={styles.appName}>{'IMDB'}</Text>
            {back ?
                <TouchableOpacity activeOpacity={0.8} style={styles.buttonStyle} onPress={() => Actions.pop()}>
                    <Icon name='md-arrow-back' color={colors.black} size={22}/>
                </TouchableOpacity> : null
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.white,
        elevation: 3,
    },
    buttonStyle: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    appName: {
        position: 'absolute',
        textAlign: 'center',
        left: 0,
        right: 0,
        alignSelf: 'center',
        color: colors.textColor,
    },
});

export {Header};
